import React, { useState } from "react";
import SearchBar from "../SearchBar";

function Books() {
  const [livros, setLivros] = useState([]);
  const searchBook = (data) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${data.searchField}}`)
      .then(response => response.json())
      .then(response => {
        setLivros(response.items);
        console.log(response.items);
      })
  };
  return (
    <div>
      <SearchBar onSubmit={searchBook} />
      <SearchList props={livros}/>
    </div>
  );
}

export default Books;
