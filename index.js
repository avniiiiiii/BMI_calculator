function calculateBMI() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value) / 100; // Convert height from cm to m
  var bmi = weight / (height * height);
  var resultElement = document.getElementById("result");

  if (!isNaN(bmi)) {
    var category;
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    resultElement.innerHTML =
      "Your BMI: " + bmi.toFixed(2) + "<br>" + "Category: " + category;
  } else {
    resultElement.innerHTML = "Please enter valid weight and height.";
  }
}
