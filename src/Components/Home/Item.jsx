import React from 'react';

export default function Item({ item }) {
	console.log(item);
	return (
		<>
			<td>{item.base_ccy}</td>
			<td>{item.buy}</td>
			<td>{item.ccy}</td>
			<td>{item.sale}</td>
		</>
	);
}
