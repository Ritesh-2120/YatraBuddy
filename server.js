if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
const cors = require('cors');

const ExpressError = require("./Utils/ExpressError.js");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const itineraryRouter = require("./routes/itinerary.js");
const User = require("./Models/user.js");

app.set("view engine", "ejs");  
app.set("views", path.join(__dirname, "views")); 
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
app.use(cors()); // To allow cross-origin requests
app.use(express.json()); // To parse JSON request bodies



//connecting database
// const MONGO_URL = "mongodb://127.0.0.1:27017/yatradata";
const db_url = process.env.atlas_db_url;

main()
.then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err.message);    
});

async function main(){ 
    await mongoose.connect(db_url);
}


//connect-mongo session
const store = MongoStore.create({
    mongoUrl: db_url,
    crypto: {
      secret:process.env.SECRET
    },
    touchAfter: 24 * 3600,  // 24 hours
  });
store.on("error", () => {
  console.log("Error in MONGO SESSION STORE", err)
})


//add an expiry time of 7 days
const sessionOptions = {store, secret: process.env.SECRET, resave: false, saveUninitialized: true, cookie: {
    expires: Date.now() + 7*24*60*60*1000,
    maxAge: 7*24*60*60*1000,
    httpOnly: true,
}} ;


app.use(session(sessionOptions));
app.use(flash());
//Authentication and authorization of users 
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})


// Serve HTML files - Basic API
app.get("/", (req, res) => {
    res.render('index.ejs');  
});
app.get("/chatbot", (req, res) => {
    res.render('chatbot.ejs', { showFooter: false });
});
// Route to display the itinerary form
app.use('/', itineraryRouter );
//listing routes
app.use("/listing",listingRouter);
//Review routes
app.use("/listing/:id/reviews",reviewRouter);
app.use("/",userRouter);



//creating a ExpressError - message for page not found
app.all("*",(req,res,next) => {
    next(new ExpressError(404, "Page Not Found!"));
});
//Handling Custom Error
app.use((err,req,res,next) =>{
    let {statusCode = 500 , message="Custom Error Handing"} = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("list/error.ejs",{message});
});
// Start the server
app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
});

