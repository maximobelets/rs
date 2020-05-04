import React from 'react';
import ItemCard from './ItemCard';
import './Items.css';

import data from '../data/data.json';

const Items = () => {
	return(
		<div className="cards-section">
			{data.map((item, index) => (
				<ItemCard
					key={index}
					name={item.name}
					description={item.description}
				/>
			))}
		</div>
	)
};

export default Items;
