const User = require("../Models/user.js");

module.exports.renderSignupForm = (req,res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async (req,res) => {
    try {  
        let {username, email, password} = req.body;
        const newUser = new User({ email, username});
        const registeredUSer = await User.register(newUser, password);
        console.log(registeredUSer);
        req.login(registeredUSer, (err)=> {
            if(err){
                return next(err);
            }
            req.flash("success","User Registered succesfully");
            res.redirect("/listing");
        });
        } catch (e) {
            req.flash("error",e.message);
            res.redirect("/signup");
            };
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
