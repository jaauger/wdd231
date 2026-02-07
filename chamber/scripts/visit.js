const visitBox = document.querySelector("#visitMessage");

const MS_PER_DAY = 1000 * 60 * 60 * 24;

const lastVisit = localStorage.getItem("lastVisit");

const now = Date.now();

let message = "";

if (!lastVisit) {
  // First visit
  message = "Welcome! Let us know if you have any questions.";
} else {
  const daysBetween = Math.floor((now - Number(lastVisit)) / MS_PER_DAY);

  if (daysBetween < 1) {
    message = "Back so soon! Awesome!";
  } else if (daysBetween === 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = `You last visited ${daysBetween} days ago.`;
  }
}

// Display message
visitBox.textContent = message;

// Store new visit time
localStorage.setItem("lastVisit", now);
