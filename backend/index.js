require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const User = require("./schemas/User");
const bodyParser = require("body-parser");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    "https://zerodha-app-qfcm.onrender.com",
    "https://zerodha-dashboard-o1pv.onrender.com",
];
const cors = require("cors");
const session = require('express-session');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel} = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");


const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended : true}));

let sessionOptions = ({
    secret: "itismysupersecretkey",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongoUrl: process.env.MONGO_URL}),
    cookie: {
        secure: true,
        sameSite: "none",
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
});

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/allHoldings", async(req, res) => {
    let allHoldings = await HoldingsModel.find({});;
    res.json(allHoldings);
});

app.get("/allPositions", async(req, res) => {
    let allPositions = await PositionsModel.find({});;
    res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
    let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    });

    newOrder.save();
    res.send("Order saved!");
});

app.post("/signup", wrapAsync(async(req, res) => {
    try {
        let {username, email, password} = req.body;
    let newUser = new User({email, username});
    await User.register(newUser, password);
    req.login(newUser, (err) => {
        if(err) {
            return res.status(500).json({error: "Login after signup failled"});
        }
        res.json({message: "Signup and Login successful", user: req.user});
    });
    } catch(err) {
        res.status(400).json({error: err.message});
    }
    
}));

app.post("/login",
    passport.authenticate("local"), (req, res)  => {
    res.json({message: "Login successfully", user: req.user});
});

app.get("/auth", (req, res) => {
    if(req.isAuthenticated()) {
        res.json({user: req.user});
    } else {
        res.status(400).json({message: "Not Logged In"});
    }
});

app.post("/logout", (req, res) => {
    req.logout((err) => {
        if(err) {
        res.status(500).json({error: err.message});
        }
        req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.status(200).json({message: "Log out successfully"});
    });
    });
});

app.use((err, req, res, next) => {
    let {status=500, message="Something went wrong"} = err;
    res.status(status).send(message);
})

app.listen(PORT, (req, res) => {
    console.log("App started");
    mongoose.connect(url);
    console.log("DB connected");
});