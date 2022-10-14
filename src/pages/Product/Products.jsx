import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import AddProductForHookForm from './AddProductForHookForm';
import AddProductForFormik from './AddProductForFormik';
import ProductList from './ProductList';

const Proudct = () => {
	return (
		<div className='proudct'>
			<Link to='addProductForHookForm'>New ProductForHookForm</Link>
			<Link to='addProductForFormik'>New AddProductForFormik</Link>
			<Outlet />
		</div>
	);
};

export default Proudct;
