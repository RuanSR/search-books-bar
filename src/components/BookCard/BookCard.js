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

function BookCard({id, image, title, subtitle, description, publishedDate}) {
  const { addFavorite } = useMyFavorites();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Card style={{ maxWidth: '15rem' }}>
				<Image
					variant="top"
					src={image}
					style={{ maxWidth: '250px', maxHeight: '250px' }}
					thumbnail
				/>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>
						<p>{subtitle}</p>
						<p>
							Data de publicação:
							{publishedDate}
						</p>
					</Card.Text>
					<Button variant="info" onClick={handleShow}>
						Detalhes
					</Button>
				</Card.Body>
			</Card>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row>
							<Col md="auto">
								<Media>
									<Image
										className="mr-3"
										src={image}
										thumbnail
										alt="thumbnail livro"
									/>
									<Media.Body>
										<h5>Subtítulo</h5>
										<p>{subtitle}</p>

										<h5>Publicado em:</h5>
										<p>{publishedDate}</p>
									</Media.Body>
								</Media>
							</Col>
							<Col md="auto">
								<h1>Descrição</h1>
								<p>{description}</p>
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Fechar
					</Button>
					<Button variant="success" onClick={() => addFavorite({id, image, title, subtitle, description, publishedDate})}>
						Salvar nos favoritos
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default BookCard;
