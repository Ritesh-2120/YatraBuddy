const express = require("express");
const router = express.Router();
const User = require("../Models/user.js");
const wrapAsync = require("../Utils/wrapAsync.js");
const passport = require("passport");
const { setRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");

router.route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup));


router.route("/login")
    .get(userController.renderLoginForm)
    .post(
        setRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }), userController.login);


router.get("/logout", userController.logout);

module.exports = router; 