function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
    return books.reduce((acc, book) => (acc + (!book.borrows[0].returned)), 0)
}

function sortMostCommon(item1, item2) {
  return item2.count - item1.count;
}

function getMostCommonGenres(books) {
  const genres = books.reduce((acc, book) => {
    const { genre } = book;
    if (!acc[genre]) acc[genre] = { name: genre, count: 1 };
    else acc[genre].count++;
    return acc;}, 
    {});
  return Object.values(genres).sort(sortMostCommon).slice(0, 5);
}

function getMostPopularBooks(books) {
  return books.map((book) => {
    return {name: book.title, count: book.borrows.length}
   }).sort((bookOne, bookTwo) => (bookOne.count < bookTwo.count ? 1 : -1)).slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  books.sort((bookOne, bookTwo) => bookOne.borrows.length > bookTwo.borrows.length ? -1 : 1 )
  result = books.slice(0,5);

  let popularAuthors = [];
  for(let book of result) {
    for(let author of authors){
      const authorName = author.name.first + " " + author.name.last
      if(book.authorId == author.id){
        book.author = author;
        popularAuthors.push({name: `${authorName}`, count: book.borrows.length})
      }
    }  
  }
  return popularAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
