function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  
  if (weight > 0 && height > 0) {
    const bmi = weight / (height * height);
    const resultText = `Your BMI is ${bmi.toFixed(2)}.`;
    document.getElementById('result').textContent = resultText;
  } else {
    document.getElementById('result').textContent = "Please enter valid values.";
  }
}
