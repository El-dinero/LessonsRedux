import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container'>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarColor01'
					aria-controls='navbarColor01'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse'
					id='navbarColor01'
				>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<NavLink
								className='nav-link active'
								aria-current='page'
								to='/'
							>
								Home
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;
