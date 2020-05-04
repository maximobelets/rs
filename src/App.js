import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Routes from './routes';
import NavBar from './components/NavBar';

const App = () => {
	return(
		<Router>
			<NavBar />
			<Routes />
		</Router>
	)
}

export default App;
