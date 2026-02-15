/* =========================================
   FORM ACTION PAGE HANDLER
   Uses URLSearchParams to display form data
========================================= */

const params = new URLSearchParams(window.location.search);

// Safely get values with fallback
function getValue(name) {
  return params.get(name) || "Not provided";
}

// Populate the page
document.getElementById("result-name").textContent =
  getValue("name");

document.getElementById("result-email").textContent =
  getValue("email");

document.getElementById("result-buildingType").textContent =
  getValue("buildingType");

document.getElementById("result-notes").textContent =
  getValue("notes");
