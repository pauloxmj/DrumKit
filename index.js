let tom1 = new Audio("sounds/tom-1.mp3");
let tom2 = new Audio("sounds/tom-2.mp3");
let tom3 = new Audio("sounds/tom-3.mp3");
let tom4 = new Audio("sounds/tom-4.mp3");
let snare = new Audio("sounds/snare.mp3");
let crash = new Audio("sounds/crash.mp3");
let kickBass = new Audio("sounds/kick-bass.mp3");

// Assign sound to keys
function playSound(key) {
  switch (key) {
    case "w":
      tom1.play();
      break;
    case "a":
      tom2.play();
      break;
    case "s":
      tom3.play();
      break;
    case "d":
      tom4.play();
      break;
    case "j":
      snare.play();
      break;
    case "k":
      crash.play();
      break;
    case "l":
      kickBass.play();
      break;
    default:
      console.log("Invalid key pressed: " + key);
  }
}

// Button effect
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

// Handle button click
document.querySelectorAll("button").forEach(function(button) {
  button.addEventListener("click", function() {
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
});

// Handle key press
document.addEventListener("keydown", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

