import React, { useEffect, useRef } from 'react';

const WebrtcForCamera2 = (props) => {
	const devices = useRef(null);
	const localStream = useRef(null);
	const camera = useRef(null);
	const mounted = useRef(false);
	useEffect(() => {
		const init = async () => {
			if (!devices.current) {
				await loadDevices(); // load the camera devices list when the component is mounted
			}
			if (props.isActive === true) {
				playWithDesired();
			}
			mounted.current = true;
		};
		init();
	}, []);

	useEffect(() => {
		if (mounted.current === true) {
			if (props.isActive === true) {
				playWithDesired();
			} else {
				stop();
			}
		}
	}, [props.isActive]);

	useEffect(() => {
		if (mounted.current === true) {
			if (camera.current && props.isActive === true) {
				if (props.isPause === true) {
					camera.current.pause();
				} else {
					camera.current.play();
				}
			}
		}
	}, [props.isPause]);

	useEffect(() => {
		if (props.isActive === true && localStream.current && mounted.current === true) {
			playWithDesired();
		}
	}, [props.desiredCamera, props.desiredResolution, props.facingMode]);

	const playWithDesired = async () => {
		if (!devices.current) {
			await loadDevices(); // load the camera devices list if it hasn't been loaded
		}
		const desiredDevice = getDesiredDevice(devices.current);

		if (desiredDevice) {
			const options = {};
			options.deviceId = desiredDevice;
			if (props.desiredResolution) {
				options.desiredResolution = props.desiredResolution;
			}
			if (props.facingMode) {
				options.facingMode = props.facingMode;
			}
			play(options);
		} else {
			throw new Error('No camera detected');
		}
	};

	const getDesiredDevice = (devices) => {
		let count = 0;
		let desiredIndex = 0;
		for (let i = 0; i < devices.length; i++) {
			const device = devices[i];
			const label = device.label || `Camera ${count++}`;
			if (props.desiredCamera) {
				if (label.toLowerCase().indexOf(props.desiredCamera.toLowerCase()) !== -1) {
					desiredIndex = i;
					break;
				}
			}
		}

		if (devices.length > 0) {
			return devices[desiredIndex].deviceId; // return the device id
		} else {
			return null;
		}
	};

	const play = (options) => {
		stop(); // close before play
		let constraints = {};

		if (options.deviceId) {
			constraints = {
				video: { deviceId: options.deviceId },
				audio: false,
			};
		} else {
			constraints = {
				video: { width: 1280, height: 720 },
				audio: false,
			};
		}

		if (options.facingMode) {
			delete constraints.video.deviceId;
			constraints.video.facingMode = { exact: options.facingMode };
		}

		if (options.desiredResolution) {
			constraints.video.width = options.desiredResolution.width;
			constraints.video.height = options.desiredResolution.height;
		}
		navigator.mediaDevices
			.getUserMedia(constraints)
			.then(function (stream) {
				localStream.current = stream;
				// Attach local stream to video element
				camera.current.srcObject = stream;
			})
			.catch(function (err) {
				if (options.facingMode) {
					// facing mode not supported on desktop Chrome
					delete options.facingMode;
					play(options);
				} else {
					console.error('getUserMediaError', err, err.stack);
				}
			});
	};

	const stop = () => {
		try {
			if (localStream.current) {
				const stream = localStream.current;
				const tracks = stream.getTracks();
				for (let index = 0; index < tracks.length; index++) {
					const track = tracks[index];
					track.stop();
				}
				if (props.onClosed) {
					props.onClosed();
				}
			}
		} catch (e) {
			console.log(e);
		}
	};

	const loadDevices = async () => {
		const constraints = { video: true, audio: false };
		const stream = await navigator.mediaDevices.getUserMedia(constraints); // ask for permission
		const mediaDevices = await navigator.mediaDevices.enumerateDevices();
		const cameraDevices = [];
		for (let i = 0; i < mediaDevices.length; i++) {
			const device = mediaDevices[i];
			if (device.kind === 'videoinput') {
				// filter out audio devices
				cameraDevices.push(device);
			}
		}
		devices.current = cameraDevices;
		const tracks = stream.getTracks();
		for (let i = 0; i < tracks.length; i++) {
			const track = tracks[i];
			track.stop(); // stop the opened camera
		}
		if (props.onDeviceListLoaded) {
			props.onDeviceListLoaded(cameraDevices);
		}
	};

	const onCameraOpened = () => {
		console.log('onCameraOpened');
		if (props.onOpened) {
			props.onOpened(camera.current, getCurrentCameraLabel());
		}
	};

	const getCurrentCameraLabel = () => {
		try {
			if (localStream.current) {
				const stream = localStream.current;
				return stream.getTracks()[0].label;
			}
		} catch (error) {
			return '';
		}
	};

	return (
		<div style={{ position: 'relative', width: '100%', height: '100%', left: 0, top: 0 }}>
			<video style={{ position: 'absolute', objectFit: 'cover', width: '100%', height: '100%', left: 0, top: 0 }} ref={camera} muted autoPlay={true} playsInline={true} onLoadedData={onCameraOpened}></video>
			{props.children}
		</div>
	);
};

export default WebrtcForCamera2;
