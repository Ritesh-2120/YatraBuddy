# YatraBuddy

## Overview
YatraBuddy is a virtual travel guide platform designed to enhance tourism experiences by providing comprehensive and interactive information about tourist destinations. It helps travelers explore popular attractions and hidden gems while assisting them with planning and organizing their journeys efficiently.

## Features
- **Tourist Information**: Offers detailed descriptions, photos, videos, myths, and historical context for various tourist sites.
- **Cultural Insights**: Highlights local traditions, foods, and cultural significance of destinations.
- **User Authentication**: Secure login, logout, and signup functionality to personalize user experiences and maintain data security.
- **Admin Controls**: Allows administrators to add and delete items from the listings.
- **User Review System**: Enables users to submit, view and delete their reviews for tourist sites, helping build a community-driven platform.
- **Interactive Maps**: Utilizes OpenStreetMap for dynamic location visualization, helping users navigate destinations effortlessly.
- **Generate Itinerary**: Automatically creates travel itineraries using the Gemini API (under development).
- **Responsive Design**: Ensures a seamless user experience on mobile, tablet, and desktop devices.

## Technology Stack
- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Maps Integration**: OpenStreetMap

## Project Structure
```plaintext
.
├── public         # Static files (CSS, JavaScript, images)
├── routes         # API routes
├── views          # HTML templates (if using templating engine)
├── models         # Database models
├── utils          # Utility functions
├── .env.example   # Example environment variables
├── package.json   # Dependencies and scripts
└── server.js      # Main server file
```

## Dependencies
The following are the major dependencies used in the project:
- `@google/generative-ai`: Provides AI capabilities for generating personalized content.
- `body-parser`: Parses incoming request bodies in a middleware.
- `cloudinary`: Manages and stores media files such as images and videos.
- `connect-flash`: Handles flash messages for displaying notifications.
- `connect-mongo`: Stores session data in MongoDB.
- `cors`: Enables cross-origin resource sharing for the application.
- `dotenv`: Loads environment variables from a `.env` file.
- `ejs`: A templating engine for generating HTML markup with dynamic content.
- `ejs-mate`: Provides layout capabilities for EJS templates.
- `express`: A web framework for building server-side applications.
- `express-session`: Manages user sessions securely.
- `joi`: A schema validation library for validating input data.
- `leaflet`: A library for interactive maps and geospatial data visualization.
- `leaflet-geosearch`: Adds geosearch functionality to Leaflet maps.
- `method-override`: Supports HTTP verbs like PUT and DELETE in forms.
- `mongo`: Provides utility functions for working with MongoDB.
- `mongoose`: An ODM library for MongoDB to structure and manage data.
- `multer`: Handles file uploads to the server.
- `multer-storage-cloudinary`: Integrates Multer with Cloudinary for file storage.
- `node`: Provides runtime for executing JavaScript code server-side.
- `nodemon`: Automatically restarts the server during development on file changes.
- `passport`: A middleware for authentication.
- `passport-local`: Implements local authentication strategies.
- `passport-local-mongoose`: Simplifies integration of Passport with Mongoose.

## Acknowledgements
- OpenStreetMap for map integration.
- Gemini API for itinerary generation.
- Bootstrap for responsive design.
---

We hope YatraBuddy makes your travel planning experience seamless and enjoyable!
