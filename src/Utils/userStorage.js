function removeFavorite(bookId){
  localStorage.removeItem(bookId);
};

export {removeFavorite};