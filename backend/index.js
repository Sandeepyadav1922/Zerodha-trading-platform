require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/users");
const bodyParser = require("body-parser");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const cors = require("cors");
const session = require('express-session');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const userRoutes = require("./routes/userRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");


const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    "https://zerodha-app-qfcm.onrender.com",
    "https://zerodha-dashboard-o1pv.onrender.com",
  ],
  credentials: true,
}));

app.use(bodyParser.json());
app.use(express.urlencoded({extended : true}));

let sessionOptions = {
    secret: "itismysupersecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: "lax",
    },
};

// if (process.env.NODE_ENV === "production") {
//     app.set("trust proxy", 1);
//     sessionOptions.cookie.secure = true;
//     sessionOptions.cookie.sameSite = "none";
// }

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", dashboardRoutes);
app.use("/", userRoutes);

app.use("/", (req, res, next) => {
    return next(new ExpressError(404, "Page Not Found"));
})

app.use((err, req, res, next) => {
    let {status=500, message="Something went wrong"} = err;
    res.status(status).json(message);
})

app.listen(PORT, (req, res) => {
    console.log("App started");
    mongoose.connect(url);
    console.log("DB connected");
});