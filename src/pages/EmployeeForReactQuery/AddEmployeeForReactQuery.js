import { EmployeeContext } from 'contexts/Employee/EmployeeContext';
import React, { useState, useContext } from 'react';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from 'services/EmployeeService';

export const AddEmployeeForReactQuery = () => {
	const navigate = useNavigate();
	const { isLoading, mutate: addEmployee } = useMutation(
		async () => {
			const newEmployee = {
				name,
				gender,
				phone,
			};
			return await EmployeeService.createEmployee(newEmployee);
		},
		{
			onSuccess: (res) => {
				navigate('/employeeForReactQuery');
			},
			onError: (err) => {
				console.log(err);
			},
		},
	);

	const [name, setName] = useState('');
	const [gender, setGender] = useState('');
	const [phone, setPhone] = useState('');
	const onSubmit = (e) => {
		e.preventDefault();
		addEmployee();
	};

	return (
		<React.Fragment>
			<div className=''>
				<form onSubmit={onSubmit}>
					<div className=''>
						Name of employee
						<input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter name' />
					</div>
					<div className=''>
						gender
						<input value={gender} onChange={(e) => setGender(e.target.value)} type='text' placeholder='Enter Gender' />
					</div>
					<div className=''>
						phone
						<input value={phone} onChange={(e) => setPhone(e.target.value)} type='text' placeholder='Enter Phone' />
					</div>
					<div>
						<button type='submit'>Add Employee</button>
					</div>
					<div className=''>
						<Link to='/employee'>Cancel</Link>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};
