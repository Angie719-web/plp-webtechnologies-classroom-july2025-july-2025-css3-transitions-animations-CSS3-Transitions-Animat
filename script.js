/* Part 2: JavaScript Functions */

let globalCount = 0; // global scope example

function addNumbers(a, b) {
  let sum = a + b;  // local scope variable
  return sum;
}

function changeBoxColor(element, color) {
  element.style.backgroundColor = color;
}

function logMessage(message) {
  console.log("Message: " + message);
}

console.log("Sum of 5 + 10:", addNumbers(5, 10));
logMessage("Functions are working!");


/* Part 3: Combining CSS & JS */

const animateBtn = document.getElementById("animateBtn");
const jsBox = document.getElementById("jsBox");

animateBtn.addEventListener("click", () => {
  globalCount++;
  jsBox.classList.toggle("animate");

  // alternate color each click
  if (globalCount % 2 === 0) {
    changeBoxColor(jsBox, "purple");
  } else {
    changeBoxColor(jsBox, "limegreen");
  }
});

// Modal logic
const modal = document.getElementById("myModal");
const modalBtn = document.getElementById("modalBtn");
const closeModal = document.getElementById("closeModal");

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
