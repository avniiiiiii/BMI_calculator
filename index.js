const btn = document.getElementById("calculate");
btn.addEventListener("click", () => {
  let height = parseFloat(document.querySelector("#height").value); //to convert the input
  // values to floating-point numbers for accurate calculations.
  let weight = parseFloat(document.querySelector("#weight").value);

  // Check if height or weight is empty or not a number
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Please enter valid values for height and weight.");
    return;
  }
  // BMI calculation
  height = height / 100; // Convert height to meters
  let bodymassidx = weight / (height * height);
  bodymassidx = bodymassidx.toFixed(2); //2 numbers after decimal
  console.log(bodymassidx);
  //we have to display our bmi in result
  const bminum = document.querySelector("#result");
  bminum.innerHTML = bodymassidx;
  //determining status
  let status = "";
  if (bodymassidx < 18.5) {
    status = "Underweight";
  } else if (bodymassidx >= 18.5 && bodymassidx < 25) {
    status = "Healthy";
  } else if (bodymassidx >= 25 && bodymassidx < 30) {
    status = "Overweight";
  } else if (bodymassidx >= 30) {
    status = "Obese";
  }
  document.querySelector(
    ".comment"
  ).innerHTML = `Comment: You are <span id="comment">${status}</span>`;
});
