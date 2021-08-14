import React, { Fragment, useState } from 'react';
import { Image, Card, Button } from 'react-bootstrap/';

import BookDetailsModal from '../BookDetailsModal/BookDetailsModal';

function BookCard({ book }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Fragment>
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
			<BookDetailsModal show={show} handleClose={handleClose} book={book} />
		</Fragment>
	);
}

export default BookCard;
