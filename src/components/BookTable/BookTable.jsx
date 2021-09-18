import { useBookContext } from '../../hooks/useBookContext';

import BookCard from '../BookCard';
import NoImage from '../../assets/img/no-image.png';

import { Book as bookItem } from '../../models/Book';

import { BookList } from './styles';

function BookTable() {
	const { books } = useBookContext();
	let book;

	return (
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
						<BookCard
							key={index}
							book={
								new bookItem(
									bookResponse.id,
									book.image,
									book.title,
									book.subtitle,
									book.description,
									bookResponse.volumeInfo.publishedDate
								)
							}
						/>
					)
				)
			)}
		</BookList>
	);
}

export default BookTable;
