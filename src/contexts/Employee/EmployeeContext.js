import React, { createContext, useReducer } from 'react';
import EmployeeService from 'services/EmployeeService';
import employeeReducer from './employeeReducer';

const initialState = {
	employees: [],
};

export const EmployeeContext = createContext(initialState);

export const EmployeeProvider = ({ children }) => {
	const [state, dispatch] = useReducer(employeeReducer, initialState);

	const findEmployees = (employees) => {
		// @ts-ignore
		dispatch({
			type: 'FIND_EMPLOYEES',
			payload: employees,
		});
	};
	function addEmployee(employee) {
		EmployeeService.createEmployee(employee)
			.then((response) => {
				// @ts-ignore
				dispatch({
					type: 'ADD_EMPLOYEE',
					payload: response.data,
				});
			})
			.catch((e) => {
				console.log(e);
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
		EmployeeService.deleteEmployee(id);
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
				findEmployees,
				addEmployee,
				editEmployee,
				removeEmployee,
			}}
		>
			{children}
		</EmployeeContext.Provider>
	);
};
