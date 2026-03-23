const { ExpressError } = require("../utils/ExpressError");
const User = require("../models/users");

module.exports.Signup = async(req, res) => {
    try {
        let {username, email, password} = req.body;
    let newUser = new User({email, username});
    await User.register(newUser, password);
    req.login(newUser, (err) => {
        if(err) {
            throw new ExpressError(500, {error: "Login after signup failled"})
        }
        res.json({message: "Signup and Login successful", user: req.user});
    });
    } catch(err) {
        res.status(400).json({error: err.message});
    }
};

module.exports.Auth = (req, res) => {
    if(req.isAuthenticated()) {
        res.status(200).json({user: req.user});
    } else {
        throw new ExpressError(400, "Not Logged In");
    }
};

module.exports.LogOut = (req, res) => {
    req.logout((err) => {
        if(err) {
        throw new ExpressError(500, {error: err.message});
        }
        req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.status(200).json({message: "Log out successfully"});
    });
    });
}