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

import { useMyFavorites } from '../../hooks/useMyFavorites';

function FavoriteModal({
	show,
	closeModal
}) {
  const { removeFavorite } = useMyFavorites();

	return (
		<Modal show={show} onHide={closeModal}>
			<Modal.Header closeButton>
				<Modal.Title>Livros Favoritos</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Container>
					<Row className="justify-content-center">
						<Col md="auto">
							{Object.keys(localStorage).map((bookId, index) => (
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
														{JSON.parse(localStorage.getItem(bookId)).subtitle}
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
										<Button variant="danger" onClick={() => removeFavorite(bookId)}>
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
				<Button variant="secondary" onClick={closeModal}>
					Fechar
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
export default FavoriteModal;
