const DATA_URL = "data/systems.json";

const buildingTypeSelect = document.getElementById("buildingType");

async function populateBuildingTypes() {

  try {

    const response = await fetch(DATA_URL);
    const data = await response.json();

    const buildings = data.buildings;

    // Get unique building types
    const types = [...new Set(buildings.map(b => b.type))];

    // Sort alphabetically
    types.sort();

    // Add default option
    buildingTypeSelect.innerHTML = `
      <option value="">Select building type</option>
    `;

    // Add options
    types.forEach(type => {

      const option = document.createElement("option");

      option.value = type;
      option.textContent = type;

      buildingTypeSelect.appendChild(option);

    });

  }
  catch (error) {

    console.error("Error loading building types:", error);

  }

}

populateBuildingTypes();
