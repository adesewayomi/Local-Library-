function findAuthorById(authors, id) {
  let writer = authors.find((author) => (author.id === id));
  return writer;
}

function findBookById(books, id) {
  let foundBook = books.find((book) => (book.id === id));
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  const allBooksSorted = [];
  const notLoaned = books.filter((book) => !book.borrows[0].returned);
  const loanedOut = books.filter((book) => book.borrows[0].returned);
  allBooksSorted.push(notLoaned);
  allBooksSorted.push(loanedOut);
  return allBooksSorted;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    let account = accounts.find(borrower => borrower.id === borrow.id)
    return { ...borrow, ...account}
  }).slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
