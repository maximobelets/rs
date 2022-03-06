import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Routes from './routes';
import NavBar from './components/NavBar';
import { useFetch } from './hooks/customHooks';

const App = () => {

	useFetch(5)

	return(
		<Router>
			<NavBar />
			<Routes />
		</Router>
	)
}

export default App;
