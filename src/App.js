import React from 'react';
import Layout from './components/Layout/Layout';
import { CssBaseline } from '@mui/material';
import './styles/main.scss';
import { LoadingProvider } from 'contexts/LoadingContext';
import Spinner from 'components/Spinner/Spinner';

const App = () => {
	return (
		<>
			<LoadingProvider>
				<Spinner />
				<CssBaseline />
				<Layout />
			</LoadingProvider>
		</>
	);
};

export default App;
