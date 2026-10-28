const speedVal = document.getElementById("refreshRate");
const rotation = document.getElementById("toggleswitch");
const statusText = document.getElementById("status");
const copyright = document.getElementById("copy");

// Event listeners for user interactions
speedVal.addEventListener("input", cubeSpeed);
rotation.addEventListener("change", cubeDirection);

let clockwise = false; // Variable to track rotation direction
statusText.innerHTML = `<p>anti-clockwise</p>`; // Initial direction display

// Function to adjust cube speed based on slider input
function cubeSpeed() {
  const speed = Number(speedVal.value); // Get the current speed value
  const cube = document.getElementById("cube"); // Reference to the cube element
  const direction = !clockwise
    ? `animate1 ${speed}s linear infinite` // Anti-clockwise animation
    : `animate2 ${speed}s linear infinite`; // Clockwise animation
  cube.style.animation = direction; // Apply the animation style
}

// Function to change cube direction based on toggle switch
function cubeDirection() {
  const speed = Number(speedVal.value); // Get the current speed value
  if (!this.checked) {
    cube.style.animation = `animate1 ${speed}s linear infinite`; // anti-clockwise animation
    statusText.innerHTML = `<p>anti-clockwise</p>`; // display 'anti-clockwise' text  to screen
    clockwise = false; // Update direction variable
  } else {
    cube.style.animation = `animate2 ${speed}s linear infinite`; // clockwise animation
    statusText.innerHTML = `<p>clockwise</p>`; // display 'clockwise' text to screen
    clockwise = true; // Update direction variable
  }
}

// Dynamically generate copyright information
copyright.innerHTML =
  "Copyright &copy; " + // Start of the copyright string
  new Date().getFullYear() + // Get the current year
  ` <a href="https://www.gaz41.com">gaz41.com</a>. <span class="copy2">All Rights Reserved</span>`;
