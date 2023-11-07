// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = "bb94e74d5f51bc780f64b7a9ae11c779";

document
  .getElementById("fetchDataButton")
  .addEventListener("click", async () => {
    try {
      // Get user's IP-based geolocation data
      const ipGeoResponse = await fetch(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`
      );
      const ipGeoData = await ipGeoResponse.json();

      // Show user's location on Google Maps
      const googleMap = document.getElementById("googleMap");
      googleMap.src = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d${ipGeoData.latitude}!2d${ipGeoData.longitude}!3d17.3850447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2us!4v1629263937116!5m2!1sen!2us`;

      // Get weather data using latitude and longitude
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${ipGeoData.latitude}&lon=${ipGeoData.longitude}&appid=${apiKey}&units=metric`
      );
      const weatherData = await weatherResponse.json();


      
      // Display weather information
      const weatherDetails = document.getElementById("weatherDetails");
      weatherDetails.innerHTML = `
      <p>Current Temperature: ${weatherData.current.temp}°C</p>
      <p>Humidity: ${weatherData.current.humidity}%</p>
      <p>Weather Description: ${weatherData.current.weather[0].description}</p>
    `;
    } catch (error) {
      console.error("Error:", error);
    }
  });