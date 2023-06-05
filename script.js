const btnEl = document.getElementById("btn");

btnEl.addEventListener("click", () => {
  const height = document.getElementById("height").value / 100;
  const weight = document.getElementById("weight").value;
  const bmi = weight / (height * height);
  const bmiVal = document.getElementById("bmi-result");
  bmiVal.value = bmi;
  const info = document.getElementById("weight-condition");
  if (bmi < 18.5) info.innerText = "Under weight";
  else if (bmi < 25) info.innerText = "Normal weight";
  else if (bmi < 30) info.innerText = "Over weight";
  else info.innerText = "Obesity";
});
