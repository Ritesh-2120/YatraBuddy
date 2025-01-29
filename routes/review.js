const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../Utils/wrapAsync.js");
const Review = require("../Models/review.js");
const Listing = require("../Models/addItem.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const ReviewController = require("../controllers/review.js");


//Ceating Reviews - POST route
router.post("/", isLoggedIn, validateReview, wrapAsync (ReviewController.createReview));
//Delete Review Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync (ReviewController.destroyReview));

module.exports = router;