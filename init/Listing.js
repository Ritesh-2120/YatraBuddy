require("dotenv").config({ path: "../.env" }); // Ensure environment variables are loaded
const mongoose = require("mongoose");
const initData = require("../init/data.js");
const addingItem = require("../Models/addItem.js");

const db_url = process.env.atlas_db_url;
console.log("Database URL:", process.env.atlas_db_url);
// Check if db_url is loaded
if (!db_url) {
    console.error("Database URL is undefined. Please check your .env file.");
    process.exit(1);
}

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(db_url);
        console.log("Connected to DB");
    } catch (err) {
        console.error("Database connection failed:", err.message);
        process.exit(1); // Exit process with failure
    }
};

// Initialize Database
const initDB = async () => {
    try {
        // Clear existing data
        await addingItem.deleteMany();
        console.log("Existing data cleared");

        // Add owner property to initData and insert
        const formattedData = initData.data.map((obj) => ({
            ...obj,
            owner: "6799d05fc8cb0ee59abc75c3",
        }));
        await addingItem.insertMany(formattedData);
        console.log("Data was initialized successfully");
    } catch (err) {
        console.error("Error initializing data:", err.message);
    } finally {
        mongoose.connection.close(); // Close connection after operations
    }
};

// Run the script
(async () => {
    await connectDB();
    await initDB();
})();
