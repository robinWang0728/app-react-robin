import Contact from 'pages/Contact';
import Home from 'pages/Home';
import AddProductForFormik from 'pages/Product/AddProductForFormik';
import AddProductForHookForm from 'pages/Product/AddProductForHookForm';
import ProductList from 'pages/Product/ProductList';
import Proudct from 'pages/Product/Products';
import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Routers = () => {
	const Home = React.lazy(() => import('pages/Home'));

	return (
		<Routes>
			<Route path='/' element={<Navigate to='/home' />} />
			<Route
				path='/home'
				element={
					<Suspense fallback={<>Loading Home ...</>}>
						<Home />
					</Suspense>
				}
			/>
			<Route path='/product/*' element={<Proudct />}>
				<Route path='addProductForHookForm' element={<AddProductForHookForm />} />
				<Route path='addProductForFormik' element={<AddProductForFormik />} />
				<Route path='' element={<ProductList />} />
			</Route>
			<Route path='/contact' element={<Contact />} />
		</Routes>
	);
};

export default Routers;
