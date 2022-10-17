import React from 'react';
import Layout from './components/Layout/Layout';
import { CssBaseline } from '@mui/material';
import './styles/main.scss';
import { LoadingProvider } from 'contexts/LoadingContext';
import Spinner from 'components/Spinner/Spinner';
import TestCutsomHookAndState from 'testOtherExample/test1/TestCutsomHookAndState';

const App = () => {
	return (
		<>
			<TestCutsomHookAndState />
		</>
	);
};

export default App;
