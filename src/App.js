import React from 'react';
import ItemCard from './components/ItemCard';
import './App.css';
import data from './data/data.json'

const App = () => {
	return(
		<div className="cards-section">
			{data.map((item, index) => {
				return <ItemCard
					key={index}
					name={item.name}
					description={item.description}
				/>
			})}
		</div>
	)
}

export default App;
