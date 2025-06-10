# YatraBuddy

YatraBuddy is a comprehensive travel companion web application built with Node.js and Express. It helps users plan and manage their travel experiences with features like location mapping, user authentication, and more.

## 🚀 Features

- User Authentication and Authorization
- Interactive Maps Integration (Leaflet)
- Cloud Storage for Media Files
- Session Management
- Form Validation
- Responsive Design
- MongoDB Database Integration

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript)
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Passport.js
- **File Upload**: Multer with Cloudinary
- **Maps**: Leaflet.js
- **AI Integration**: Google Generative AI
- **Form Validation**: Joi
- **Styling**: Custom CSS

## 📋 Prerequisites

- Node.js (v20.11.1 or higher)
- MongoDB
- Cloudinary Account
- Google AI API Key

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/YatraBuddy.git
cd YatraBuddy
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
GOOGLE_AI_API_KEY=your_google_ai_api_key
```

4. Start the development server:
```bash
npm start
```

## 📁 Project Structure

```
YatraBuddy/
├── controllers/     # Route controllers
├── Models/         # Database models
├── public/         # Static files
├── routes/         # Route definitions
├── Utils/          # Utility functions
├── views/          # EJS templates
├── init/           # Initialization scripts
├── middleware.js   # Custom middleware
├── server.js       # Main application file
└── package.json    # Project dependencies
```

## 🔐 Environment Variables

The following environment variables are required to run the application:

- `MONGODB_URI`: MongoDB connection string
- `CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name
- `CLOUDINARY_API_KEY`: Cloudinary API key
- `CLOUDINARY_API_SECRET`: Cloudinary API secret
- `GOOGLE_AI_API_KEY`: Google AI API key

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Express.js team for the amazing framework
- MongoDB team for the database
- Cloudinary for cloud storage
- Leaflet.js for maps integration 