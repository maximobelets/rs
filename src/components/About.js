import React, {useState, useEffect} from 'react';
import { Wrapper } from './Wrapper';

const About = () => {
	const [data, setData] = useState('test');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((res) => res.json())
		.then((res) => res.title)
		.then(setData)
		// .then((res) => setData(res))
	}, [])

	console.log(data, 1)

	return(
		<div>
			<h3>
				About page
			</h3>
			<Wrapper>
				<h1>
					Test1234
				</h1>
			</Wrapper>
		</div>
	)
};

export default About;
