/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { useSearchRole } from '../../hooks/useSearchRole';

import {
	Container,
	Image,
	Media,
	CardGroup,
	Col,
	Row,
	Card,
	Button,
	Modal,
} from 'react-bootstrap/';

import Table from '../BookTable/Table';

function Books() {
  const { searchRole, setSearchRole } = useSearchRole();
	const [favoriteBooks, setFavoriteBooks] = useState([]);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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

  const hamdleNextResult = () =>{
    let newIndex = searchRole.index + searchRole.maxResult;
    setSearchRole({search: searchRole.search, maxResult: searchRole.maxResult, index: newIndex});
    console.log(searchRole)
  };

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-auto ">
					<div className="container d-inline-flex">
						<input
							onChange={(e) => {
								setSearchRole({search: e.target.value, maxResult: searchRole.maxResult, index: searchRole.maxResult});
							}}
							className="form-control m-2"
							type="text"
							placeholder="Digite o nome do livro"
						/>
						<Button variant="outline-success" onClick={handleShow}>
							Favoritos
						</Button>
					</div>
				</div>
				<div className="col-auto">
					<Table
						handleFavorites={handleAddFavorites}
					/>
					<Button
						className="m-5"
						variant="outline-secondary"
						onClick={hamdleNextResult}
					>
						Próximos Resultados
					</Button>
				</div>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Livros Favoritos</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row className="justify-content-center">
							<Col md="auto">
								{favoriteBooks.map((bookId, index) => (
									<CardGroup key={index} className="m-3">
										<Card>
											<Card.Body>
												<Media>
													<Image
														className="mr-3"
														src={JSON.parse(localStorage.getItem(bookId)).image}
														thumbnail
														alt="thumbnail livro"
													/>
													<Media.Body>
														<h5>Título</h5>
														<p>
															{JSON.parse(localStorage.getItem(bookId)).title}
														</p>

														<h5>Subtítulo</h5>
														<p>
															{
																JSON.parse(localStorage.getItem(bookId))
																	.subtitle
															}
														</p>

														<h5>Publicado em:</h5>
														<p>
															{
																JSON.parse(localStorage.getItem(bookId))
																	.publishedDate
															}
														</p>
														<p />
													</Media.Body>
												</Media>
											</Card.Body>
											<Card.Footer>
												<small className="text-muted">
													Adicionado ao favoritos em{' '}
													{JSON.parse(localStorage.getItem(bookId)).addedIn}
												</small>
											</Card.Footer>
											<Button variant="danger" onClick={handleRemoveFavorite}>
												Remover dos favoritos
											</Button>
										</Card>
									</CardGroup>
								))}
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Fechar
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Books;
