import React from 'react';
import './assets/App.css';

import Books from './components/Books';
import Header from './components/Header';
import AppProvider from './AppProvider';

function App() {
	return (
		<div className="App">
			<AppProvider>
				<Header />
				<Books />
			</AppProvider>
		</div>
	);
}

export default App;
