import { useState, createContext, useEffect } from 'react';

import BookServie from '../api/BookServices';

import {useSearchRole} from '../hooks/useSearchRole';

export const BookContext = createContext([]);

export function BookProvider({ children }) {
  const { searchRole } = useSearchRole();
	const [ books, setBooks ] = useState([]);

	useEffect(() => {
		BookServie
			.get(searchRole.search, searchRole.maxResult, searchRole.index)
			.then((data) => {
				setBooks(data.items);
			})
			.catch((error) => console.log(error));
	}, [searchRole]);

	return (
		<BookContext.Provider value={{ books }}>
      {children}
    </BookContext.Provider>
	);
}
