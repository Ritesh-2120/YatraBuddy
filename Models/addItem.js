const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const addingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String, 
    image: {
        url: String,
        filename: String,
    },    
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    geometry: {
        lat: Number,
        lng: Number,
    },
});

addingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({ _id : { $in: listing.reviews }});
    }
});

//adding coordinates to DB
addingSchema.pre("save", async function (next) {
    if (this.isModified("location") || this.isModified("country")) {
      const map_token = process.env.MAP_TOKEN;
      const address = `${this.location}, ${this.country}`;
      const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${map_token}`;
  
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry;
          this.geometry = { lat, lng }; // Set geometry field
        } else {
          throw new Error("Location not found.");
        }
      } catch (error) {
        console.error("Geocoding Error:", error);
        next(error);
      }
    }
    next();
  });
  
//Item will be added when we refresh on URL after completing code
const listings = mongoose.model("listings",addingSchema);
module.exports = listings;