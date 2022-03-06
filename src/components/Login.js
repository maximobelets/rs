import React, { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<section>
			<h1>Autefication</h1>
			<form>
				<label>
					Email
				</label>
				<input type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}/>
				<label>
					Password
				</label>
				<input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/>
			</form>
		</section>
	)
}

export default Login;
