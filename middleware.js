const Listing = require("./Models/addItem.js");
const Review = require("./Models/review.js");
const ExpressError = require("./Utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schemaVaidate.js");

module.exports.isLoggedIn = (req,res,next) => {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","You must be logged in to create listing!");
        return res.redirect("/login");
    }
    next();
}



module.exports.setRedirectUrl = (req, res, next) => {
    // console.log(req.session);
    // console.log(req.originalUrl);
    // req.session.redirectUrl = req.originalUrl;
    
    if(req.session.redirectUrl){
        res.locals.redirectUrl= req.session.redirectUrl;
    }
    next();
};

module.exports.isAdmin = (req, res, next) => {
    if (res.locals.currUser && res.locals.currUser.username === "admin") {
        return next();
    }
    req.flash("error", "You do not have permission to add Items!");
    return res.redirect("/listing"); 
};


module.exports.isOwner = async (req,res,next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","You don't have permission to change");
        return res.redirect(`/listing/${id}`);
    }
    next();
}

//to see we can send request from hoppscotch - server side validation
module.exports.validateListing = (req,res,next) => {   
    let {error} = listingSchema.validate(req.body); 
    if(error){ 
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    else{
        next();
    }
};


//server side validation for Review
module.exports.validateReview = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body); 
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    else{
        next();
    }
}


module.exports.isReviewAuthor = async (req,res,next) => {
    let {id, reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","You don't have permission to delete review");
        return res.redirect(`/listing/${id}`);
    }
    next();
}
