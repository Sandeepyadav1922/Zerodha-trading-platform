const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

router.post("/signup", wrapAsync(userController.Signup));

router.post("/login",
    passport.authenticate("local"), (req, res)  => {
    res.json({message: "Login successfully", user: req.user});
});

router.get("/auth", (userController.Auth));
router.post("/logout", (userController.LogOut));

module.exports = router;