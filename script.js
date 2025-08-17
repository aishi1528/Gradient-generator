const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const direction = document.getElementById("direction");
const preview = document.getElementById("preview");
const cssCode = document.getElementById("cssCode");
const copyBtn = document.getElementById("copy");
const randomBtn = document.getElementById("random");

// Generating gradient function
function generateGradient() {
  const gradient = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
  preview.style.background = gradient;
  cssCode.value = `background: ${gradient};`;
}

// Copy CSS
copyBtn.addEventListener("click", () => {
  cssCode.select();
  document.execCommand("copy");
  copyBtn.innerText = "✅ Copied!";
  setTimeout(() => (copyBtn.innerText = "📋 Copy CSS"), 1500);
});

// Random color generator
function getRandomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
}

randomBtn.addEventListener("click", () => {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  generateGradient();
});

// Updating on input change
color1.addEventListener("input", generateGradient);
color2.addEventListener("input", generateGradient);
direction.addEventListener("change", generateGradient);

generateGradient();
