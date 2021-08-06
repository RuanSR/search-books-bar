/* eslint-disable no-lone-blocks */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-return-assign */

import React, { useState } from 'react';
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

function BookCard(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSave = () => {
		localStorage.setItem(
			props.id,
			JSON.stringify({
				id: props.id,
				image: props.image,
				title: props.title,
				subtitle: props.subtitle,
				description: props.description,
				publishedDate: props.publishedDate,
				addedIn: new Date().toLocaleString(),
			})
		);

		props.handleFavorites(props.id);
		{
			alert('Adicionado com sucesso!');
		}
		handleClose();
	};

	return (
		<>
			<Card style={{ maxWidth: '15rem' }}>
				<Image
					variant="top"
					src={props.image}
					style={{ maxWidth: '250px', maxHeight: '250px' }}
					thumbnail
				/>
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>
						<p>{props.subtitle}</p>
						<p>
							Data de publicação:
							{props.publishedDate}
						</p>
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
							<Col md="auto">
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
							<Col md="auto">
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
