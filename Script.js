document.addEventListener("DOMContentLoaded", function() {
    const temperatureInput = document.getElementById("temperatureInput");
    const unitSelector = document.getElementById("unitSelector");
    const convertButton = document.getElementById("convertButton");
    const result = document.getElementById("result");

    convertButton.addEventListener("click", function() {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelector.value;

        if (unit === "celsius") {
            const fahrenheit = (temperature * 9/5) + 32;
            result.textContent = `${temperature}°C is ${fahrenheit.toFixed(2)}°F`;
        } else if (unit === "fahrenheit") {
            const celsius = (temperature - 32) * 5/9;
            result.textContent = `${temperature}°F is ${celsius.toFixed(2)}°C`;
        } else {
            result.textContent = "Please select a valid unit.";
        }
    });
});
