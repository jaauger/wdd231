const KEY = "favoriteSystems";

export function saveFavorite(site) {
  const saved = JSON.parse(localStorage.getItem(KEY)) || [];
  saved.push(site);
  localStorage.setItem(KEY, JSON.stringify(saved));
}
