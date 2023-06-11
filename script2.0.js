function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperatureInput').value);
    var celsiusOutput = document.getElementById('celsiusOutput');
    var fahrenheitOutput = document.getElementById('fahrenheitOutput');
    var kelvinOutput = document.getElementById('kelvinOutput');
    
    var celsius = temperature;
    var fahrenheit = (temperature * 9 / 5) + 32;
    var kelvin = temperature + 273.15;
    
    celsiusOutput.textContent = celsius.toFixed(2) + '°C';
    fahrenheitOutput.textContent = fahrenheit.toFixed(2) + '°F';
    kelvinOutput.textContent = kelvin.toFixed(2) + 'K';
  }