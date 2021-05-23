import React from "react";
import { Card, Button } from "react-bootstrap/";

function BookCard(book) {
  return (
    <Card style={{ maxWidth: "18rem" }}>
      <Card.Img variant="top" src={book.image} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          <p>{book.subtitle}</p>
          <p>{book.publishedDate}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
