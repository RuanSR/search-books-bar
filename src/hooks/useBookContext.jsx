import { useContext } from 'react';

import { BookContext } from '../contexts/BookContext';

export function useBookContext() {
	const context = useContext(BookContext);

	if (!context) {
		throw new Error('error on BookContext!');
	}

  return context;
}
