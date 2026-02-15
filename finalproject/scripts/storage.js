const FAVORITES_KEY = "favoriteBuildings";

export function getFavorites() {

  return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];

}

export function saveFavorites(favorites) {

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));

}

export function toggleFavorite(buildingId) {

  let favorites = getFavorites();

  if (favorites.includes(buildingId)) {

    favorites = favorites.filter(id => id !== buildingId);

  } else {

    favorites.push(buildingId);

  }

  saveFavorites(favorites);

}

