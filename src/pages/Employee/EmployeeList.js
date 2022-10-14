import { EmployeeContext } from 'contexts/Employee/EmployeeContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

export const EmployeeList = () => {
	const { employees, removeEmployee } = useContext(EmployeeContext);
	return (
		<React.Fragment>
			{employees.length > 0 ? (
				<React.Fragment>
					<div className='emplyee__list'>
						<div className='emplyee__list-title m-t-24'>
							<div className='emplyee__list-title-text'>Employee Table</div>
							<div className='emplyee__list-title-search'>
								<input className='search' placeholder='Search...' />
							</div>
						</div>
						<div className='emplyee__list-table m-t-8'>
							<div className='emplyee__list-table-row emplyee__list-table-row--heading'>
								<div className='emplyee__list-table-row-item'>Id</div>
								<div className='emplyee__list-table-row-item'>Name</div>
								<div className='emplyee__list-table-row-item'>Gender</div>
								<div className='emplyee__list-table-row-item'>Phone</div>
							</div>

							{employees.map((employee) => (
								<div className='emplyee__list-table-row' key={employee.id}>
									<div className='emplyee__list-table-row-item'>{employee.id}</div>
									<div className='emplyee__list-table-row-item'>{employee.name}</div>
									<div className='emplyee__list-table-row-item'>{employee.gender}</div>
									<div className='emplyee__list-table-row-item'>{employee.phone}</div>
								</div>
							))}

							<div className='emplyee__list-table-row emplyee__list-table-row--active'>
								<div className='emplyee__list-table-row-item'>text 1</div>
								<div className='emplyee__list-table-row-item'>text 2</div>
								<div className='emplyee__list-table-row-item'>text 3</div>
								<div className='emplyee__list-table-row-item--sub'>
									<div className='emplyee__list-table-row-item'>sub text 1</div>
									<div className='emplyee__list-table-row-item'>sub text 2</div>
								</div>
							</div>
						</div>
					</div>
				</React.Fragment>
			) : (
				<p className='text-center bg-gray-100 text-gray-500 py-5'>No data.</p>
			)}
		</React.Fragment>
	);
};
