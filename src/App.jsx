import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import './assets/App.css';

import Books from './components/Books';
import Header from './components/Header';
import AppProvider from './AppProvider';

function App() {
	return (
		<div className="App">
      <CssBaseline>
        <AppProvider>
          <Header />
          <Books />
        </AppProvider>
      </CssBaseline>
		</div>
	);
}

export default App;
