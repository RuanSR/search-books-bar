import React from "react";

import { Card, Button } from "react-bootstrap/";

function BookCard(book) {
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src={book.image} /> */}
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          {book.subtitle}
          <br />
          {book.publishedDate}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
