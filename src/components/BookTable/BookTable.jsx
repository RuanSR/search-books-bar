import { useState } from 'react';

import { Card } from '../Card/Card';
import BookDetailsModal from '../BookDetailsModal/BookDetailsModal';

import { useBookContext } from '../../hooks/useBookContext';

import NoImage from '../../assets/img/no-image.png';

import { BookList } from './styles';

function BookTable() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const { books } = useBookContext();
	let book;

	return (
		<>
			<BookList>
				{books?.map(
					(bookResponse, index) => (
						(book = {
							image: bookResponse.volumeInfo.imageLinks
								? bookResponse.volumeInfo.imageLinks.thumbnail
								: NoImage,
							title: bookResponse.volumeInfo.title
								? bookResponse.volumeInfo.title
								: 'Sem título',
							subtitle: bookResponse.volumeInfo.subtitle
								? bookResponse.volumeInfo.subtitle
								: 'Sem subtitulo',
							description: bookResponse.volumeInfo.description
								? bookResponse.volumeInfo.description
								: 'Sem descrição',
						}),
						(
							<Card
								key={index}
								thumbnailImage={book.image}
								CardTitle={book.title}
								CardText={book.subtitle}
								PublishedDate={bookResponse.volumeInfo.publishedDate}
								clickAction={handleShow}
							/>
						)
					)
				)}
			</BookList>
			{book !== undefined && <BookDetailsModal show={show} handleClose={handleClose} book={book} /> }
		</>
	);
}

export default BookTable;
