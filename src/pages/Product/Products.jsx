import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AddProductForHookForm from './AddProductForHookForm';
import AddProductForFormik from './AddProductForFormik';
import ProductList from './ProductList';

const Proudct = () => {
	return (
		<div className='proudct'>
			<Link to='addProductForHookForm'>New ProductForHookForm</Link>
			<Link to='addProductForFormik'>New AddProductForFormik</Link>

			<Routes>
				<Route path='addProductForHookForm' element={<AddProductForHookForm />} />
				<Route path='addProductForFormik' element={<AddProductForFormik />} />
				<Route path='' element={<ProductList />} />
			</Routes>
		</div>
	);
};

export default Proudct;
