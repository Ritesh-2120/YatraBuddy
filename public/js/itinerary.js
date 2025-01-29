// Function to parse itinerary text
function parseItineraryText(text) {
    const itinerary = { activities: [] };
    const lines = text.split("\n");
    let currentDay = null;

    lines.forEach(line => {
        // Remove Markdown bold formatting
        line = line.replace(/\*\*/g, "");

        if (line.includes("Day")) {
            if (currentDay) {
                itinerary.activities.push(currentDay);
            }
            currentDay = { title: line, description: "" };
        } else {
            // Remove other unwanted characters like asterisks (*)
            line = line.replace(/\*/g, ""); // This line removes asterisks
            line = line.replace(/(\bMorning\b|\bAfternoon\b|\bEvening\b|\bDinner\b)/g, "<strong>$1</strong>");
            if (currentDay) currentDay.description += line.trim() + " ";
        }
    });

    if (currentDay && currentDay.title && currentDay.description) {
        itinerary.activities.push(currentDay);
    }

    return itinerary;
}

// Get the raw itinerary text from the global variable
const itineraryText = window.itineraryText || "";
// Parse the text into a structured itinerary format
const parsedItinerary = parseItineraryText(itineraryText);

// Display the parsed itinerary
const parsedItineraryDiv = document.getElementById('parsed-itinerary');
parsedItinerary.activities.forEach(activity => {
    const activityElement = document.createElement('div');
    activityElement.innerHTML = `<h3>${activity.title}</h3><p>${activity.description}</p>`;
    parsedItineraryDiv.appendChild(activityElement);
});
