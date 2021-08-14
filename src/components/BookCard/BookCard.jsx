/* eslint-disable no-undef */
import React, { useState } from 'react';
import BookDetails from '../BookDetails/BookDetails';

import { Image, Card, Button } from 'react-bootstrap/';

function BookCard({ book }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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

			<BookDetails show={show} handleClose={handleClose} book={book} />
		</>
	);
}

export default BookCard;
