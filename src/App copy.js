// import React from 'react';
// import Layout from './components/Layout/Layout';
// import { CssBaseline } from '@mui/material';
// import './styles/main.scss';
// import { LoadingProvider } from 'contexts/LoadingContext';
// import Spinner from 'components/Spinner/Spinner';
// import WebrtcForCamera2 from 'pages/WebrtcForCamera/WebrtcForCamera2';

// const App = () => {
// 	const [isActive, setIsActive] = React.useState(true);
// 	const [isPause, setIsPause] = React.useState(false);
// 	const [cameras, setCameras] = React.useState([]);
// 	const [selectedCameraLabel, setSelectedCameraLabel] = React.useState('');
// 	const [desiredCamera, setDesiredCamera] = React.useState('founder');
// 	const [desiredResolution, setDesiredResolution] = React.useState({ width: 1280, height: 720 });
// 	const [currentResolution, setCurrentResolution] = React.useState('');
// 	const resSel = React.useRef(null);
// 	const camSel = React.useRef(null);
// 	const onOpened = (cam, camLabel) => {
// 		console.log('opened');
// 		console.log(camLabel);
// 		setCurrentResolution(cam.videoWidth + 'x' + cam.videoHeight);
// 		setSelectedCameraLabel(camLabel);
// 	};

// 	const onClosed = () => {
// 		console.log('closed');
// 	};

// 	const onDeviceListLoaded = (devices) => {
// 		console.log(devices);
// 		setCameras(devices);
// 	};

// 	const onCameraSelected = (e) => {
// 		setDesiredCamera(e.target.value);
// 		setSelectedCameraLabel(e.target.value);
// 	};

// 	const onResolutionSelected = (e) => {
// 		const width = e.target.value.split('x')[0];
// 		const height = e.target.value.split('x')[1];
// 		setDesiredResolution({ width: width, height: height });
// 	};

// 	return <WebrtcForCamera2 isActive={isActive} isPause={isPause} desiredCamera={desiredCamera} desiredResolution={desiredResolution} onOpened={onOpened} onClosed={onClosed} onDeviceListLoaded={onDeviceListLoaded}></WebrtcForCamera2>;
// };

// export default App;

import WebrtcForCamera3 from 'testOtherExample/WebrtcForCamera/WebrtcForCamera3';
import React, { useState } from 'react';

const App = () => {
	const [isCameraOpen, setIsCameraOpen] = useState(false);
	const [cardImage, setCardImage] = useState();
	return (
		<div>
			<WebrtcForCamera3 onCapture={(blob) => setCardImage(blob)} onClear={() => setCardImage(null)} />
		</div>
	);
};

export default App;
