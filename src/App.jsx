import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { GlobalStyle } from './styles/global';

import './assets/App.css';

import Books from './components/Books';
import Header from './components/Header';
import AppProvider from './AppProvider';

function App() {
	return (
		<div className="App">
      <AppProvider>
        <GlobalStyle/>
        <Header />
        <Books />
      </AppProvider>
		</div>
	);
}

export default App;
