import { EmployeeProvider } from 'contexts/Employee/EmployeeContext';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Employee = () => {
	return (
		<EmployeeProvider>
			<div className='employee'>
				<Outlet />
			</div>
		</EmployeeProvider>
	);
};

export default Employee;
