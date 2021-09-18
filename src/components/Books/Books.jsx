import React, { useState } from 'react';

import { useSearchRole } from '../../hooks/useSearchRole';

import FavoriteModal from '../FavoritesModal/FavoriteModal';
import BookTable from '../BookTable';

import { ContainerItens, SearchBox, BookList } from './styles';

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
			<ContainerItens>
				<SearchBox>
          <input
            onChange={(e) => {
              setSearchRole({
                search: e.target.value,
                maxResult: searchRole.maxResult,
                index: searchRole.maxResult,
              });
            }}
            type="text"
            placeholder="Digite o nome do livro"
          />
          <button onClick={handleModal}>
            Favoritos
          </button>
				</SearchBox>
				<BookList>
					<BookTable />
					<button
						onClick={hamdleNextResult}
					>
						Próximos Resultados
					</button>
				</BookList>
			</ContainerItens>

			<FavoriteModal show={show} closeModal={handleModal} />
		</div>
	);
}

export default Books;
