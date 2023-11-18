function convertTemperature() {
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    if (isNaN(inputValue))
    {
      document.getElementById("result").textContent = "Please enter a valid number.";
      return;
    }
    let result;
    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        result = (inputValue * 9/5) + 32;
      } else if (toUnit === "kelvin") {
        result = inputValue + 273.15;
      } else {
        result = inputValue;
      }
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
        result = (inputValue - 32) * 5/9;
      } else if (toUnit === "kelvin") {
        result = (inputValue - 32) * 5/9 + 273.15;
      } else {
        result = inputValue;
      }
    } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
        result = inputValue - 273.15;
      } else if (toUnit === "fahrenheit") {
        result = (inputValue - 273.15) * 9/5 + 32;
      } else {
        result = inputValue;
      }
    }

    document.getElementById("result").textContent = "Result: " + result.toFixed(4);
  }

  document.getElementById("fromUnit").addEventListener("change", convertTemperature);
  document.getElementById("toUnit").addEventListener("change", convertTemperature);
  document.getElementById("inputValue").addEventListener("input", convertTemperature);

  convertTemperature();