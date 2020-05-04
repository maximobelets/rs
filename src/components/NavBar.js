import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
	return(
		<nav>
			<NavLink to='/' exact>
				Main
			</NavLink>
			<NavLink to='/About' exact>
				About
			</NavLink>
			<NavLink to='/Login' exact>
				Login
			</NavLink>
		</nav>
	)
};

export default NavBar;
