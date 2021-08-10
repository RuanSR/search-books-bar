import React, { useState } from 'react';
import { useSearchRole } from '../../hooks/useSearchRole';
import FavoriteModal from '../FavoritesModal/FavoriteModal';

import { Button } from 'react-bootstrap/';

import Table from '../BookTable/Table';

function Books() {
	const { searchRole, setSearchRole } = useSearchRole();
	const [favoriteBooks, setFavoriteBooks] = useState([]);
	const [show, setShow] = useState(false);

	const handleModal = () => {
		setShow(!show);
	};

	const handleAddFavorites = (bookId) => {
		const books = [];
		for (let i = 0; i < favoriteBooks.length; i++) {
			books.push(favoriteBooks[i]);
		}
		books.push(bookId);
		setFavoriteBooks(books);
	};

	const handleRemoveFavorite = (bookId) => {
		const books = [];
		for (let i = 0; i < favoriteBooks.length; i++) {
			books.push(favoriteBooks[i]);
		}
		books.pop(bookId);
		setFavoriteBooks(books);
		localStorage.removeItem(bookId);
	};

	const hamdleNextResult = () => {
		let newIndex = searchRole.index + searchRole.maxResult;
		setSearchRole({
			search: searchRole.search,
			maxResult: searchRole.maxResult,
			index: newIndex,
		});
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-auto ">
					<div className="container d-inline-flex">
						<input
							onChange={(e) => {
								setSearchRole({
									search: e.target.value,
									maxResult: searchRole.maxResult,
									index: searchRole.maxResult,
								});
							}}
							className="form-control m-2"
							type="text"
							placeholder="Digite o nome do livro"
						/>
						<Button variant="outline-success" onClick={handleModal}>
							Favoritos
						</Button>
					</div>
				</div>
				<div className="col-auto">
					<Table handleAddFavorites={handleAddFavorites} />
					<Button
						className="m-5"
						variant="outline-secondary"
						onClick={hamdleNextResult}
					>
						Próximos Resultados
					</Button>
				</div>
			</div>

			<FavoriteModal
        show={show}
        closeModal={handleModal}
        removeFavorite={handleRemoveFavorite}
        favoritesBooks={favoriteBooks}
			/>
		</div>
	);
}

export default Books;
