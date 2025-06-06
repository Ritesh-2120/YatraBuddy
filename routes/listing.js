const express = require("express");
const router = express.Router();
const wrapAsync = require("../Utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing, isAdmin } = require("../middleware.js");
const ListingController = require("../controllers/listing.js");

const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


router
    .route("/")
    .get(wrapAsync(ListingController.index))
    .post(isLoggedIn, isAdmin, upload.single('listing[image]'), validateListing, wrapAsync(ListingController.createListing));

// API endpoint to fetch all listings
router.get("/api/listings", wrapAsync(ListingController.getAllListings));

//new route
router.get("/new", isLoggedIn, isAdmin, ListingController.renderNewForm);

router
    .route("/:id")
    .get(wrapAsync(ListingController.showListing))
    .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(ListingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(ListingController.destroyListing));


//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(ListingController.renderEditForm));


module.exports = router;