import React from 'react';
import { Outlet } from 'react-router-dom';

const Employee = () => {
	return (
		<div className='employee'>
			<Outlet />
		</div>
	);
};

export default Employee;
