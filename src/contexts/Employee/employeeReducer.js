export default function employeeReducer(state, action) {
	switch (action.type) {
		case 'ADD_EMPLOYEE':
			return {
				...state,
				employees: [...state.employees, action.payload],
			};

		case 'EDIT_EMPLOYEE':
			// eslint-disable-next-line no-case-declarations
			const updatedEmployee = action.payload;

			// eslint-disable-next-line no-case-declarations
			const updatedEmployees = state.employees.map((employee) => {
				if (employee.id === updatedEmployee.id) {
					return updatedEmployee;
				}
				return employee;
			});

			return {
				...state,
				employees: updatedEmployees,
			};

		case 'REMOVE_EMPLOYEE':
			return {
				...state,
				employees: state.employees.filter((employee) => employee.id !== action.payload),
			};

		default:
			return state;
	}
}
