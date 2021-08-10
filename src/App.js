import React from 'react';
import './assets/App.css';

import Books from './components/Books';
import Header from './components/Header';
import { BookProvider } from './contexts/BookContext';
import { SearchRoleProvider } from './contexts/SearchRoleContext';
import { FavoritesBooksProvider } from './contexts/FavoritesBooksContext';

function App() {
	return (
		<div className="App">
      <SearchRoleProvider>
        <BookProvider>
          <FavoritesBooksProvider>
            <Header />
            <Books />
          </FavoritesBooksProvider>
        </BookProvider>
      </SearchRoleProvider>
		</div>
	);
}

export default App;
