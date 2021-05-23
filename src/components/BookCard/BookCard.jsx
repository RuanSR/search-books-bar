import React, { useState } from "react";
import {
  Container,
  Image,
  Media,
  Col,
  Row,
  Card,
  Button,
  Modal,
} from "react-bootstrap/";

function BookCard(book) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ maxWidth: "18rem" }}>
        <Card.Img variant="top" src={book.image} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <h5>Subtítulo</h5>
            <p>{book.subtitle}</p>
            <p>Data de publicação: {book.publishedDate}</p>
          </Card.Text>
          <Button variant="info" onClick={handleShow}>
            Detalhes
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{book.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={"auto"}>
                <Media>
                  <Image
                    className="mr-3"
                    src={book.image}
                    thumbnail
                    alt="thumbnail livro"
                  />
                  <Media.Body>
                    <h5>Subtítulo</h5>
                    <p>{book.subtitle}</p>

                    <h5>Publicado em:</h5>
                    <p>{book.publishedDate}</p>
                  </Media.Body>
                </Media>
              </Col>
              <Col md={"auto"}>
                <h1>Descrição</h1>
                <p>{book.description}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="success" onClick={handleClose}>
            Salvar nos favoritos
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookCard;
