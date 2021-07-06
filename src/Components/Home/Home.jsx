import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../redux/actions/ActionsHome/ActionsHome';
import Item from './Item';

export const Home = (props) => {
	const { items, getItems } = props;
	useEffect(() => {
		getItems();
		// eslint-disable-next-line
	}, []);
	return (
		<section id='tabs' className='project-tab'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='tab-content' id='nav-tabContent'>
							<div
								className='tab-pane fade show active'
								id='nav-home'
								role='tabpanel'
								aria-labelledby='nav-home-tab'
							>
								<table className='table'>
									<thead>
										<tr>
											<th>Base_ccy</th>
											<th>Buy</th>
											<th>Ccy</th>
											<th>Sale</th>
										</tr>
									</thead>
									<tbody>
										{items
											? items.map(
													(
														item,
														index
													) => (
														<tr
															key={
																index
															}
														>
															<Item
																item={
																	item
																}
															/>
														</tr>
													)
											  )
											: null}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	items: state.items.items.data,
});

const mapDispatchToProps = {
	getItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
