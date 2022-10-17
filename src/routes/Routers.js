import { EmployeeProvider } from 'contexts/Employee/EmployeeContext';
import Contact from 'pages/Contact';
import { AddEmployee } from 'pages/Employee/AddEmployee';
import EditEmployee from 'pages/Employee/EditEmployee';
import Employee from 'pages/Employee/Employee';
import { EmployeeList } from 'pages/Employee/EmployeeList';
import { AddEmployeeForReactQuery } from 'pages/EmployeeForReactQuery/AddEmployeeForReactQuery';
import EditEmployeeForReactQuery from 'pages/EmployeeForReactQuery/EditEmployeeForReactQuery';
import EmployeeForReactQuery from 'pages/EmployeeForReactQuery/EmployeeForReactQuery';
import { EmployeeListForReactQuery } from 'pages/EmployeeForReactQuery/EmployeeListForReactQuery';
import Home from 'pages/Home';
import AddProductForFormik from 'pages/Product/AddProductForFormik';
import AddProductForHookForm from 'pages/Product/AddProductForHookForm';
import ProductList from 'pages/Product/ProductList';
import Proudct from 'pages/Product/Products';
import WebrtcForCamera from 'testOtherExample/WebrtcForCamera/WebrtcForCamera';
import WebrtcForCamera4 from 'testOtherExample/WebrtcForCamera/WebrtcForCamera4';
import WebrtcForCamera5 from 'testOtherExample/WebrtcForCamera/WebrtcForCamera5';
import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Camera from 'pages/Camera/Camera';

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
				<Route path='editEmployee/:id' element={<EditEmployee />} />
				<Route path='' element={<EmployeeList />} />
			</Route>

			<Route path='/employeeForReactQuery/*' element={<EmployeeForReactQuery />}>
				<Route path='addEmployeeForReactQuery' element={<AddEmployeeForReactQuery />} />
				<Route path='editEmployeeForReactQuery/:id' element={<EditEmployeeForReactQuery />} />
				<Route path='' element={<EmployeeListForReactQuery />} />
			</Route>
			<Route path='/camera' element={<Camera />}></Route>
			<Route path='/contact' element={<Contact />} />
		</Routes>
	);
};

export default Routers;
