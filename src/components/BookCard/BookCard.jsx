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

function BookCard(props) {
  const [show, setShow] = useState(false);
  const [myBook] = useState(props);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    localStorage.setItem(
      myBook.id,
      JSON.stringify({
        id: myBook.id,
        image: myBook.image,
        title: myBook.title,
        subtitle: myBook.subtitle,
        description: myBook.description,
        publishedDate: myBook.publishedDate,
        addedIn: new Date().toLocaleString(),
      })
    );

    props.handleFavorites(myBook.id);
    {alert('Adicionado com sucesso!')}
    handleClose();
  };

  return (
    <>
      <Card style={{ maxWidth: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            <h5>Subtítulo</h5>
            <p>{props.subtitle}</p>
            <p>Data de publicação: {props.publishedDate}</p>
          </Card.Text>
          <Button variant="info" onClick={handleShow} props={props}>
            Detalhes
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={"auto"}>
                <Media>
                  <Image
                    className="mr-3"
                    src={props.image}
                    thumbnail
                    alt="thumbnail livro"
                  />
                  <Media.Body>
                    <h5>Subtítulo</h5>
                    <p>{props.subtitle}</p>

                    <h5>Publicado em:</h5>
                    <p>{props.publishedDate}</p>
                  </Media.Body>
                </Media>
              </Col>
              <Col md={"auto"}>
                <h1>Descrição</h1>
                <p>{props.description}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="success" onClick={handleSave}>
            Salvar nos favoritos
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookCard;
