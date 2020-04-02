import React from 'react';

const ItemCard = (props) => {
	return(
		<div>
			<h4>{props.name}</h4>
			<p>{props.description}</p>
		</div>
	)
};

export default ItemCard;
