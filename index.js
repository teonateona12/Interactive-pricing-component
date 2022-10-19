"strict mode";

const toggle = document.querySelector(".toggle-button");
const rangeInputs = document.querySelectorAll('input[type="range"]');
const text = document.querySelector(".text");
const price = document.querySelector(".price-span");
const range = document.getElementById("range");
const monthOrYear = document.querySelector(".hide");

const handleInputChange = (e) => {
  let target = e.target;
  const min = target.min;
  const max = target.max;
  const val = target.value;
  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
};

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  if (toggle.classList == "toggle-button active") {
    monthOrYear.textContent = "/early";
    if (range.value == 0) {
      text.textContent = "10K PEGAVIEVS";
      price.textContent = "$72.00";
    }
    if (range.value == 25) {
      text.textContent = "50K PEGAVIEVS";
      price.textContent = "$108.00";
    }
    if (range.value == 50) {
      text.textContent = "100K PEGAVIEVS";
      price.textContent = "$144.00";
    }
    if (range.value == 75) {
      text.textContent = "500K PEGAVIEVS";
      price.textContent = "$216.00";
    }
    if (range.value == 100) {
      text.textContent = "1M PEGAVIEVS";
      price.textContent = "$324.00";
    }
  }

  if (toggle.classList == "toggle-button") {
    monthOrYear.textContent = "/month";
    if (range.value == 0) {
      text.textContent = "10K PEGAVIEVS";
      price.textContent = "$8.00";
    }
    if (range.value == 25) {
      text.textContent = "50K PEGAVIEVS";
      price.textContent = "$12.00";
    }
    if (range.value == 50) {
      text.textContent = "100K PEGAVIEVS";
      price.textContent = "$16.00";
    }
    if (range.value == 75) {
      text.textContent = "500K PEGAVIEVS";
      price.textContent = "$24.00";
    }
    if (range.value == 100) {
      text.textContent = "1M PEGAVIEVS";
      price.textContent = "$36.00";
    }
  }
});

rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
  input.addEventListener("click", () => {
    if (toggle.classList == "toggle-button active") {
      if (input.value == 0) {
        text.textContent = "10K PEGAVIEVS";
        price.textContent = "$72.00";
      }
      if (input.value == 25) {
        text.textContent = "50K PEGAVIEVS";
        price.textContent = "$108.00";
      }
      if (input.value == 50) {
        text.textContent = "100K PEGAVIEVS";
        price.textContent = "$144.00";
      }
      if (input.value == 75) {
        text.textContent = "500K PEGAVIEVS";
        price.textContent = "$216.00";
      }
      if (input.value == 100) {
        text.textContent = "1M PEGAVIEVS";
        price.textContent = "$324.00";
      }
    } else if (toggle.classList !== "toggle-button active") {
      if (input.value == 0) {
        text.textContent = "10K PEGAVIEVS";
        price.textContent = "$8.00";
      }
      if (input.value == 25) {
        text.textContent = "50K PEGAVIEVS";
        price.textContent = "$12.00";
      }
      if (input.value == 50) {
        text.textContent = "100K PEGAVIEVS";
        price.textContent = "$16.00";
      }
      if (input.value == 75) {
        text.textContent = "500K PEGAVIEVS";
        price.textContent = "$24.00";
      }
      if (input.value == 100) {
        text.textContent = "1M PEGAVIEVS";
        price.textContent = "$36.00";
      }
    }
  });
});
