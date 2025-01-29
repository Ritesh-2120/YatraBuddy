var map = L.map('map').setView([0, 0], 9);

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//map_token is coming from routes
function geocodeAddress(address) {
  var apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${map_token}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.results.length > 0) {
        var result = data.results[0];
        // console.log(data.results[0].geometry);
        var lat = result.geometry.lat;
        var lon = result.geometry.lng;

        L.marker([lat, lon]).addTo(map)
          .bindPopup("Location: " + result.formatted)
          .openPopup();
        map.setView([lat, lon], 13);
      } else {
        alert("Location not found.");
      }
    })
    .catch(error => console.error('Error:', error));
}

geocodeAddress(address);
