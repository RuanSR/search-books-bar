import React, { useState } from 'react';
import { useSearchRole } from '../../hooks/useSearchRole';
import FavoriteModal from '../FavoritesModal/FavoriteModal';

import { Button } from 'react-bootstrap/';

import Table from '../BookTable/Table';

function Books() {
	const { searchRole, setSearchRole } = useSearchRole();
	const [show, setShow] = useState(false);

	const handleModal = () => {
		setShow(!show);
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
					<Table />
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
			/>
		</div>
	);
}

export default Books;
