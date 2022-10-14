import { EmployeeContext } from 'contexts/Employee/EmployeeContext';
import { LoadingContext } from 'contexts/LoadingContext';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import EmployeeService from 'services/EmployeeService';

const EditEmployee = () => {
	const { employees, editEmployee } = useContext(EmployeeContext);
	const { showLoading, hideLoading } = useContext(LoadingContext);
	const navigate = useNavigate();
	const params = useParams();

	const [selectedEmployee, setSelectedEmployee] = useState({
		id: null,
		name: '',
		gender: '',
		phone: '',
	});
	const currentEmployeeId = params.id;

	useEffect(() => {
		const employee = employees.find((employee) => employee.id === currentEmployeeId);
		setSelectedEmployee(employee);
	}, [currentEmployeeId, employees]);

	const onSubmit = async (e) => {
		try {
			e.preventDefault();
			showLoading();
			const response = await EmployeeService.updateEmployee(currentEmployeeId, selectedEmployee);
			editEmployee(selectedEmployee);
			hideLoading();
			navigate('/employee');
		} catch (error) {
			console.error(error);
		}
	};

	const handleOnChange = (userKey, newValue) => setSelectedEmployee({ ...selectedEmployee, [userKey]: newValue });

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

export default EditEmployee;
