function convertToFahrenheit() {
  var celsiusTemp = parseFloat(document.getElementById("temperature").value);
  var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
  document.getElementById("result").innerHTML = fahrenheitTemp.toFixed(2) + " °F";
}

function convertToCelsius() {
  var fahrenheitTemp = parseFloat(document.getElementById("temperature").value);
  var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
  document.getElementById("result").innerHTML = celsiusTemp.toFixed(2) + " °C";
}
