function findAccountById(accounts, id) {
  let borrower = accounts.find((account) => (account.id === id));
  return borrower;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountsA, accountsB) => (accountsA.name.last > accountsB.name.last ? 1:-1));
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let borrowers = [];
  books.forEach((book) => {book.borrows.forEach((borrow) => borrowers.push(borrow.id)) });
  let borrows = borrowers.filter((borrowerId) => borrowerId === account.id);
  let result = borrows.length;
  return result;  
}


function getBooksPossessedByAccount(account, books, authors) {
  let booksTaken = []; 
  books.forEach(book=>{
    if (book.borrows.find(item => item.id === account.id && !item.returned)) {
      booksTaken.push(book);
    }
  })
  booksTaken.forEach(book => {
    let anAuthor = authors.find(person => person.id === book.authorId);
    book['author'] = anAuthor;
  })
  return booksTaken;
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
