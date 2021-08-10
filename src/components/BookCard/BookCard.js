/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useMyFavorites } from '../../hooks/useMyFavorites';
import {
	Container,
	Image,
	Media,
	Col,
	Row,
	Card,
	Button,
	Modal,
} from 'react-bootstrap/';

function BookCard({ book }) {
	const { addFavorite } = useMyFavorites();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

  const handleOnFavorite = () =>{
    addFavorite({book});
    alert('Adicionado com sucesso!');
    handleClose();
  }

	return (
		<>
			<Card style={{ maxWidth: '15rem' }}>
				<Image
					variant="top"
					src={book.image}
					style={{ maxWidth: '250px', maxHeight: '250px' }}
					thumbnail
				/>
				<Card.Body>
					<Card.Title>{book.title}</Card.Title>
					<Card.Text>
						<p>{book.subtitle}</p>
						<p>
							Data de publicação:
							{book.publishedDate}
						</p>
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
							<Col md="auto">
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
							<Col md="auto">
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
					<Button variant="success" onClick={handleOnFavorite}>
						Salvar nos favoritos
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default BookCard;
