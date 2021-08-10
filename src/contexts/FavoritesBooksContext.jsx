import { useState, createContext } from 'react';

export const FavoritesBooksContext = createContext([]);

export function FavoritesBooksProvider({ children }) {
	const [myFavorotes, setMyFavorotes] = useState([]);

  const addFavorite = ({book}) =>{
    localStorage.setItem(
			book.id,
			JSON.stringify(book),
		);
    addFavoriteState(book.id);
  }

	const addFavoriteState = (bookId) => {
		const books = [];
		for (let i = 0; i < myFavorotes.length; i++) {
			books.push(myFavorotes[i]);
		}
		books.push(bookId);
		setMyFavorotes(books);
	};

	const removeFavorite = (bookId) => {
		const books = [];
		for (let i = 0; i < myFavorotes.length; i++) {
			books.push(myFavorotes[i]);
		}
		books.pop(bookId);
		localStorage.removeItem(bookId);
		setMyFavorotes(books);
	};

	return (
		<FavoritesBooksContext.Provider
			value={{ myFavorotes, addFavorite, removeFavorite }}
		>
			{children}
		</FavoritesBooksContext.Provider>
	);
}
