const { response } = require("express");
const Listing = require("../Models/addItem.js");


module.exports.index = async (req,res) => {
    const list = await Listing.find({});
    res.render("list/list.ejs", {list});
};

module.exports.renderNewForm = (req,res) => {
    res.render("list/new.ejs");
};

module.exports.showListing = async (req,res) => {
    let {id} = req.params;
    const list = await Listing.findById(id).populate({ path: "reviews", populate: {path: "author"}}).populate("owner");
    if(!list){
        req.flash("error","List item which you want to access does not exist");
        return res.redirect("/listing");
    }
    res.render("list/show.ejs",{ list , apiKey: process.env.MAP_TOKEN });
};

module.exports.createListing = async (req,res,next) => {
    try {
        let url = req.file.path;
        let filename = req.file.filename;

        const newItem = new Listing(req.body.listing);
        newItem.owner = req.user._id;
        newItem.image = {url, filename};

        // Ensure coordinates are numbers
        if (newItem.coordinates) {
            newItem.coordinates.latitude = Number(newItem.coordinates.latitude);
            newItem.coordinates.longitude = Number(newItem.coordinates.longitude);
        }

        await newItem.save();
        req.flash("success","New Listing Created!");
        res.redirect("/listing");
    } catch (err) {
        next(err);
    }
};

module.exports.renderEditForm = async (req,res) =>{
    let {id} = req.params;
    const list = await Listing.findById(id);
    res.render("list/edit.ejs",{list});
};

module.exports.updateListing = async (req,res) => {
    try {
        let {id} = req.params;
        let listing = await Listing.findById(id);
        
        // Update basic fields
        Object.assign(listing, req.body.listing);

        // Ensure coordinates are numbers
        if (listing.coordinates) {
            listing.coordinates.latitude = Number(listing.coordinates.latitude);
            listing.coordinates.longitude = Number(listing.coordinates.longitude);
        }

        if(typeof req.file !== "undefined"){
            let url = req.file.path;
            let filename = req.file.filename;
            listing.image = {url, filename};
        }

        await listing.save();
        req.flash("success","Listing updated!");
        res.redirect(`/listing/${id}`);
    } catch (err) {
        next(err);
    }
};

module.exports.destroyListing = async (req,res) =>{
    let {id} = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    req.flash("success","List item deleted!");
    res.redirect("/listing");
};

// API endpoint to fetch all listings
module.exports.getAllListings = async (req, res) => {
    try {
        const listings = await Listing.find({});
        res.json(listings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch listings' });
    }
};