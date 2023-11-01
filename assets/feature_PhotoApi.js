// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Create a new Leaflet map instance
    var map = L.map('map').setView([51.505, -0.09], 13);
  
    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Check if the Geolocation API is available
    if ("geolocation" in navigator) {
      // Get the user's current position
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
  
        // Create a marker for the user's location
        var marker = L.marker([latitude, longitude]).addTo(map);
  
        // Update the map view to center on the user's location
        map.setView([latitude, longitude], 13);
      });
    } else {
      console.log("Geolocation is not supported by your browser");
    }
  });