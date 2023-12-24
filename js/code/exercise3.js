import books from "../data/data_for_exercise3.js";

function sortBooks(arg) {
  const filteredBooks = arg.filter(({ year }) => {
    return year > 2000;
  });
  const sortedBooks = filteredBooks.sort((a, b) => a.year - b.year);
  const titles = sortedBooks.map(({ title }) => {return title})
  return titles;
}

console.log(sortBooks(books));
