import React, { useState } from "react";

import {
  Container,
  Image,
  Media,
  CardGroup,
  Col,
  Row,
  Card,
  Button,
  Modal,
} from "react-bootstrap/";
import Table from "../BookTable/Table";

function Books() {
  const [show, setShow] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [next, setNext] = useState(0);
  const [maxResults] = useState(5);
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddFavorites = (bookId) => {
    let books = [];
    for (let i = 0; i < favoriteBooks.length; i++) {
      books.push(favoriteBooks[i]);
    }
    books.push(bookId);
    setFavoriteBooks(books);
  };

  const handleRemoveFavorite = (bookId) => {
    let books = [];
    for (let i = 0; i < favoriteBooks.length; i++) {
      books.push(favoriteBooks[i]);
    }
    books.pop(bookId);
    setFavoriteBooks(books);
    localStorage.removeItem(bookId);
  };

  return (
    <div className="container">
      <input
        onChange={(e) => {
          setSearchField(e.target.value);
        }}
        className="form-control m-2"
        type="text"
        placeholder="Digite o nome do livro"
      />
      <Button
        variant="info"
        onClick={() => {
          setNext(next + maxResults);
        }}
      >
        Próximos Resultados
      </Button>
      <Button variant="info" onClick={handleShow}>
        Favoritos
      </Button>
      <Table
        busca={searchField}
        next={next}
        maxResults={maxResults}
        handleFavorites={handleAddFavorites}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Livros Favoritos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="justify-content-center">
              <Col md={"auto"}>
                {favoriteBooks.map((bookId, index) => {
                  return (
                    <CardGroup key={index} className="m-3">
                      <Card>
                        <Card.Body>
                          <Media>
                            <Image
                              className="mr-3"
                              src={
                                JSON.parse(localStorage.getItem(bookId)).image
                              }
                              thumbnail
                              alt="thumbnail livro"
                            />
                            <Media.Body>
                              <h5>Título</h5>
                              <p>
                                {JSON.parse(localStorage.getItem(bookId)).title}
                              </p>

                              <h5>Subtítulo</h5>
                              <p>
                                {
                                  JSON.parse(localStorage.getItem(bookId))
                                    .subtitle
                                }
                              </p>

                              <h5>Publicado em:</h5>
                              <p>
                                {
                                  JSON.parse(localStorage.getItem(bookId))
                                    .publishedDate
                                }
                              </p>
                              <p></p>
                            </Media.Body>
                          </Media>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">
                            Adicionado ao favoritos em{" "}
                            {JSON.parse(localStorage.getItem(bookId)).addedIn}
                          </small>
                        </Card.Footer>
                        <Button variant="danger" onClick={handleRemoveFavorite}>
                          Remover dos favoritos
                        </Button>
                      </Card>
                    </CardGroup>
                  );
                })}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Books;
