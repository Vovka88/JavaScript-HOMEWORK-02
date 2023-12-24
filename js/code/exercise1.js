import movies from "../data/data_for_exercise1.js";

function infoGenres(obj, name) {
  return `Знайдено такі фільми ${obj[name]}, у жанрі: ${name} `;
}

console.log(infoGenres(movies, "action"));
console.log(infoGenres(movies, "drama"));
console.log(infoGenres(movies, "comedy"));
console.log(infoGenres(movies, "horror"));
