import React, { createContext, useReducer } from 'react';
import employeeReducer from './employeeReducer';

const initialState = {
	employees: [
		{
			id: 1,
			name: 'jim',
			gender: 'man',
			phone: '0912123456',
		},
		{
			id: 2,
			name: 'iu',
			gender: 'woman',
			phone: '0912123456',
		},
		{
			id: 3,
			name: 'irene',
			gender: 'woman',
			phone: '0923423436',
		},
		{
			id: 4,
			name: 'robin',
			gender: 'man',
			phone: '0999876678',
		},
		{
			id: 5,
			name: 'daniel',
			gender: 'man',
			phone: '0922312346',
		},
		{
			id: 6,
			name: 'kim',
			gender: 'man',
			phone: '0911123556',
		},
	],
};

export const EmployeeContext = createContext(initialState);

export const EmployeeProvider = ({ children }) => {
	const [state, dispatch] = useReducer(employeeReducer, initialState);

	function addEmployee(employee) {
		// @ts-ignore
		dispatch({
			type: 'ADD_EMPLOYEE',
			payload: employee,
		});
	}

	function editEmployee(employee) {
		// @ts-ignore
		dispatch({
			type: 'EDIT_EMPLOYEE',
			payload: employee,
		});
	}

	function removeEmployee(id) {
		// @ts-ignore
		dispatch({
			type: 'REMOVE_EMPLOYEE',
			payload: id,
		});
	}

	return (
		<EmployeeContext.Provider
			value={{
				employees: state.employees,
				addEmployee,
				editEmployee,
				removeEmployee,
			}}
		>
			{children}
		</EmployeeContext.Provider>
	);
};
