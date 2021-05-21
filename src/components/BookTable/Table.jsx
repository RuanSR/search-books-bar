import React, { useState, useEffect } from "react";

import BookCard from "../BookCard/BookCard";

function Table(props) {
  console.log(props.busca);
  const [books, setLivros] = useState([]);

  useEffect(()=>{
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${props.busca}}`)
      .then((response) => response.json())
      .then((response) => {
        setLivros(response.items);
      });
  },[props.busca])

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {books.map((book, index) => {
          return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-8 p-1">
              <BookCard
                key={index}
                // image={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                subtitle={book.volumeInfo.subtitle}
                publishedDate={book.volumeInfo.publishedDate}
              />
            </div>
          );
        })}
      </div>
    </div>

    /* <div className="col-6 col-md-4"> */
  );
}

export default Table;
