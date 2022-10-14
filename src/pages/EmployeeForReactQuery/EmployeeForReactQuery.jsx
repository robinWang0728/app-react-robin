import React from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false, // 禁用當用戶離開您的應用程序並返回陳舊的數據,React Query自動在後台為您請求新的數據
			refetchOnReconnect: false, // 網絡重新連接
			retry: false, // 設置再次查詢間隔時間
			staleTime: 5 * 60 * 1000, // staleTime 過期時間
		},
	},
});
const EmployeeForReactQuery = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<div className='employee'>
				<Outlet />
			</div>
		</QueryClientProvider>
	);
};

export default EmployeeForReactQuery;
// https://blog.csdn.net/qq_56303170/article/details/125201207
