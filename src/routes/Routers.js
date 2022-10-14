import Contact from 'pages/Contact';
import { AddEmployee } from 'pages/Employee/AddEmployee';
import { EditEmployee } from 'pages/Employee/EditEmployee';
import Employee from 'pages/Employee/Employee';
import { EmployeeList } from 'pages/Employee/EmployeeList';
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
			<Route path='/employee/*' element={<Employee />}>
				<Route path='addEmployee' element={<AddEmployee />} />
				<Route path='editEmployee' element={<EditEmployee />} />
				<Route path='' element={<EmployeeList />} />
			</Route>
			<Route path='/contact' element={<Contact />} />
		</Routes>
	);
};

export default Routers;
