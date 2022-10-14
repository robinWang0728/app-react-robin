import { EmployeeContext } from 'contexts/Employee/EmployeeContext';
import { LoadingContext } from 'contexts/LoadingContext';
import React, { useContext, useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, Link, useParams } from 'react-router-dom';
import EmployeeService from 'services/EmployeeService';

const EditEmployeeForReactQuery = () => {
	const { showLoading, hideLoading } = useContext(LoadingContext);
	const navigate = useNavigate();
	const params = useParams();
	const currentEmployeeId = params.id;
	const [selectedEmployee, setSelectedEmployee] = useState({
		id: null,
		name: '',
		gender: '',
		phone: '',
	});

	const {
		isLoading: findEmployeeByIdLoading,
		isFetching,
		status,
	} = useQuery(
		'findEmployeeById',
		async () => {
			return await EmployeeService.getEmployeeById(currentEmployeeId);
		},
		{
			enabled: true,
			onSuccess: (res) => {
				setSelectedEmployee(res.data);
				console.log(res);
			},
			onError: (err) => {
				console.log(err);
			},
		},
	);

	const onSubmit = async (e) => {
		try {
			e.preventDefault();
			showLoading();
			const response = hideLoading();
			navigate('/employee');
		} catch (error) {
			console.error(error);
		}
	};

	const handleOnChange = (userKey, newValue) => setSelectedEmployee({ ...selectedEmployee, [userKey]: newValue });

	const { isLoading: updateLoading, mutate: updateEmployee } = useMutation(
		async () => {
			return await EmployeeService.updateEmployee(currentEmployeeId, selectedEmployee);
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

	if (findEmployeeByIdLoading) return <div>Loading Employee ID.</div>;
	if (!selectedEmployee || !selectedEmployee.id) {
		return <div>Invalid Employee ID.</div>;
	}

	return (
		<React.Fragment>
			<div className=''>
				<form onSubmit={onSubmit}>
					<div>
						Name
						<input value={selectedEmployee.name} onChange={(e) => handleOnChange('name', e.target.value)} type='text' placeholder='Enter name' />
					</div>
					<div>
						Gender
						<input value={selectedEmployee.gender} onChange={(e) => handleOnChange('gender', e.target.value)} type='text' placeholder='Enter Gender' />
					</div>
					<div>
						Phone
						<input value={selectedEmployee.phone} onChange={(e) => handleOnChange('phone', e.target.value)} type='text' placeholder='Enter Phone' />
					</div>
					<div>
						<button type='submit'>Edit Employee</button>
					</div>
					<div className=''>
						<Link to='/employee'>Cancel</Link>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};

export default EditEmployeeForReactQuery;
