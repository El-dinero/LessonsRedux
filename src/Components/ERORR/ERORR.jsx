import React from 'react';

function ERORR() {
	return (
		<div
			className='d-flex justify-content-center align-items-center'
			style={{ height: '100vh', fontSize: '34px' }}
			id='main'
		>
			<h1
				className='mr-3 pr-3 align-top border-right inline-block align-content-center'
				style={{ fontSize: '34px' }}
			>
				404
			</h1>
			<div className='inline-block align-middle'>
				<h2
					className='font-weight-normal lead'
					id='desc'
					style={{ fontSize: '34px' }}
				>
					The page you requested was not found.
				</h2>
			</div>
		</div>
	);
}

export default ERORR;
