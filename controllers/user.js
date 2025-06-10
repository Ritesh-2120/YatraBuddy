const User = require("../Models/user.js");

module.exports.renderSignupForm = (req,res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async (req,res,next) => {
    try {  
        let {username, email, password} = req.body;
        
        // Validate required fields
        if (!username || !email || !password) {
            req.flash("error", "All fields are required");
            return res.redirect("/signup");
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            req.flash("error", "Please enter a valid email address");
            return res.redirect("/signup");
        }

        // Validate password length
        if (password.length < 6) {
            req.flash("error", "Password must be at least 6 characters long");
            return res.redirect("/signup");
        }

        const newUser = new User({ email, username});
        const registeredUser = await User.register(newUser, password);
        
        req.login(registeredUser, (err)=> {
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to YatraBuddy! You have been registered successfully");
            res.redirect("/listing");
        });
    } catch (e) {
        if (e.name === 'UserExistsError') {
            req.flash("error", "A user with the given username is already registered");
        } else {
            req.flash("error", e.message);
        }
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req,res) => {
    res.render("users/login.ejs");
};


module.exports.login =  async(req, res) => {
    req.flash("success", "Welcome! You are logged in!");
    // console.log(res.locals.redirectUrl);
    let redirectUrl = res.locals.redirectUrl || "/listing";
    res.redirect(redirectUrl);
};
module.exports.logout = (req,res,next) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listing");
    });
};
