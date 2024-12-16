function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  
  if (weight > 0 && height > 0) {
    const bmi = weight / (height * height);
    let category = '';

    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    const resultText = `Your BMI is <span class="result-box">${bmi.toFixed(2)}</span>. You are classified as <strong>${category}</strong>.`;
    document.getElementById('result').innerHTML = resultText;
  } else {
    document.getElementById('result').textContent = "Please enter valid values.";
  }
}
