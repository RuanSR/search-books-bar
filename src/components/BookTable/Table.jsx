import { useBookContext } from '../../hooks/useBookContext';

import BookCard from '../BookCard/BookCard';
import NoImage from '../../assets/img/no-image.png';

function Table({handleAddFavorites}) {
	const { books } = useBookContext();
	let book;

	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				{books?.map((bookResponse, index) => (
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-8 p-1">
						{
							((book = {
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
									handleFavorites={handleAddFavorites}
									id={bookResponse.id}
									image={book.image}
									title={book.title}
									subtitle={book.subtitle}
									description={book.description}
									publishedDate={bookResponse.volumeInfo.publishedDate}
								/>
							))
						}
					</div>
				))}
			</div>
		</div>
	);
}

export default Table;
