import { EmployeeContext } from 'contexts/Employee/EmployeeContext';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { LoadingContext } from 'contexts/LoadingContext';
import EmployeeService from 'services/EmployeeService';
import { useMutation, useQuery } from 'react-query';

/*
useQuery的响应返回非常重要。它具有以下属性。

data,
error,
failureCount,
isError,
isFetchedAfterMount,
isFetching,
isIdle,
isLoading,
isPreviousData,
isStale,
isSuccess,
refetch,
remove,
status,

 */
export const EmployeeListForReactQuery = () => {
	const navigate = useNavigate();
	const [employees, setEmployees] = useState([]);

	const {
		isLoading,
		isFetching,
		refetch: getAllEmployee,
		status,
		data: queryData,
	} = useQuery(
		'findEmployees',
		async () => {
			return await EmployeeService.getAllEmployee();
		},
		{
			enabled: true,
			onSuccess: (res) => {
				setEmployees(res.data);
				console.log(res);
			},
			onError: (err) => {
				console.log(err);
			},
		},
	);

	const { isLoading: deleteLoading, mutate: deleteByEmployeeId } = useMutation(
		async (id) => {
			return await EmployeeService.deleteEmployee(id);
		},
		{
			onSuccess: (res) => {
				getAllEmployee();
			},
			onError: (err) => {
				console.log(err);
			},
		},
	);

	return (
		<React.Fragment>
			{JSON.stringify(queryData.data)}
			{isLoading && 'Loading中...'}
			{isFetching && 'Fetching中...'}
			{status === 'error' && <p>Error fetching data</p>}
			{status === 'loading' && <p>Fetching data...</p>}
			{status === 'success' && employees.length > 0 ? (
				<React.Fragment>
					<div className='emplyee__list'>
						<div className='emplyee__list-btn' onClick={() => navigate(`addEmployeeForReactQuery`)}>
							add employee
						</div>
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
								<div className='emplyee__list-table-row-item'></div>
							</div>

							{employees.map((employee) => (
								<div className='emplyee__list-table-row' key={employee.id}>
									<div className='emplyee__list-table-row-item'>{employee.id}</div>
									<div className='emplyee__list-table-row-item'>{employee.name}</div>
									<div className='emplyee__list-table-row-item'>{employee.gender}</div>
									<div className='emplyee__list-table-row-item'>{employee.phone}</div>
									<div className='emplyee__list-table-row-item'>
										<div className='emplyee__list-btn' onClick={() => navigate(`editEmployeeForReactQuery/${employee.id}`)}>
											<FiEdit className='icon font-size-16' />
										</div>
										<div className='emplyee__list-btn' onClick={() => deleteByEmployeeId(employee.id)}>
											<MdOutlineDeleteForever className='icon font-size-20' />
										</div>
									</div>
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
								<div className='emplyee__list-table-row-item'>text 4</div>
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
