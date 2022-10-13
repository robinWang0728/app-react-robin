import { useState, createContext } from 'react';
const initialState = {
	sidebarToggle: null,
	toggleSidebar: () => {},
	closeSidebar: () => {},
};

const SidebarContext = createContext(initialState);

export const SidebarProvider = ({ children }) => {
	const [sidebarToggle, setSidebarToggle] = useState(false);
	const toggleSidebar = () => {
		setSidebarToggle(!sidebarToggle);
	};
	const closeSidebar = () => {
		setSidebarToggle(false);
	};

	return <SidebarContext.Provider value={{ sidebarToggle, toggleSidebar, closeSidebar }}>{children}</SidebarContext.Provider>;
};
