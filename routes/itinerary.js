const express = require('express');
const router = express.Router();

const { GoogleGenerativeAI } = require('@google/generative-ai'); // Import the GoogleGenerativeAI package
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Initialize GoogleGenerativeAI with your API key
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); // Define the generative model


// Route to display the itinerary form
router.get('/itinerary-form', (req, res) => {
    res.render('itinerary/itineraryForm.ejs'); // Render form EJS
  });

// Route to generate the itinerary
router.post('/generate-itinerary', async (req, res) => {
  const { destination, dates, interests, budget } = req.body;

  // Input validation
  if (!destination || !dates) {
    return res.status(400).json({ error: "Destination and dates are required." });
  }

  // Construct the prompt for the Gemini API
  const prompt = `
    Generate a travel itinerary for a trip to ${destination} from ${dates}.
    The user's interests are ${interests}.
    They have a budget of ${budget}.
    Format the itinerary clearly, including activities, lodging, and restaurant recommendations.
  `;

  try {
    // Call the Gemini API (replace with your actual API call)
    const result = await model.generateContent(prompt);

    // Parse the generated text to a structured format
    const itineraryText = result.response.text();
    res.render('itinerary/output.ejs', { itineraryText }); // Render the output.ejs with parsed itinerary
  } catch (error) {
    console.error("Error from Gemini API:", error.message);
    res.status(500).json({ error: "Failed to generate itinerary.", details: error.message });
  }
});

module.exports = router;