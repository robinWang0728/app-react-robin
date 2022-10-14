import api from 'utils/api';

const getAllEmployee = () => {
	return api.get('/employee');
};

const getEmployeeById = (id) => {
	return api.get(`/employee/${id}`);
};

const createEmployee = (data) => {
	return api.post('/employee', data);
};

const updateEmployee = (id, data) => {
	return api.put(`/employee/${id}`, data);
};

const deleteEmployee = (id) => {
	return api.delete(`/employee/${id}`);
};

const EmployeeService = {
	getAllEmployee,
	getEmployeeById,
	createEmployee,
	updateEmployee,
	deleteEmployee,
};

export default EmployeeService;
