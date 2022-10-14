import { EmployeeContext } from 'contexts/Employee/EmployeeContext';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';

const EditEmployee = () => {
	const navigate = useNavigate();
	const params = useParams();
	const { employees, editEmployee } = useContext(EmployeeContext);
	const [selectedEmployee, setSelectedEmployee] = useState({
		id: null,
		name: '',
		gender: '',
		phone: '',
	});
	const currentUserId = params.id;

	useEffect(() => {
		const employeeId = currentUserId;
		const employee = employees.find((employee) => employee.id === parseInt(employeeId));
		console.log(employee);
		setSelectedEmployee(employee);
	}, [currentUserId, employees]);

	const onSubmit = (e) => {
		e.preventDefault();
		editEmployee(selectedEmployee);
		navigate('/employee');
	};

	const handleOnChange = (userKey, newValue) => setSelectedEmployee({ ...selectedEmployee, [userKey]: newValue });

	if (!selectedEmployee || !selectedEmployee.id) {
		return <div>Invalid Employee ID.</div>;
	}

	return (
		<React.Fragment>
			<div className='w-full max-w-sm container mt-20 mx-auto'>
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
					<div className='text-center mt-4 text-gray-500'>
						<Link to='/employee'>Cancel</Link>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};

export default EditEmployee;
