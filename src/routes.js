import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Items from './components/Items';
import About from './components/About';
import Login from './components/Login';

const Routes = () => {
	return (
		<Switch>
			<Route path='/' component={Items} exact></Route>
			<Route path='/About' component={About} exact/>
			<Route path='/Login' component={Login} exact/>
		</Switch>
	)
};

export default Routes;
