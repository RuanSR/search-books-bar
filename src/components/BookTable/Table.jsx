import React, { useState, useEffect } from "react";

import BookCard from "../BookCard/BookCard";
import NoImage from "../../assets/img/no-image.png";

function Table(props) {
  const [books, setLivros] = useState([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${props.busca}}`)
      .then((response) => response.json())
      .then((response) => {
        setLivros(response.items);
      });
  }, [props.busca]);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {books.map((book, index) => {
          return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-8 p-1">
              {book.volumeInfo.imageLinks ? (
                <BookCard
                  key={index}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  title={book.volumeInfo.title}
                  subtitle={book.volumeInfo.subtitle}
                  publishedDate={book.volumeInfo.publishedDate}
                />
              ) : (
                <BookCard
                  key={index}
                  image={NoImage}
                  title={book.volumeInfo.title}
                  subtitle={book.volumeInfo.subtitle}
                  publishedDate={book.volumeInfo.publishedDate}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Table;
