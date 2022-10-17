import React, { useEffect, useRef, useState } from 'react';

const WebrtcForCamera4 = () => {
	const videoRef = useRef();
	const canvasRef = useRef();

	const [isBackCamera, setIsBackCamera] = useState(false);

	const getUserMediaStream = () => {
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: isBackCamera ? 'user' : 'environment' } }).then((stream) => {
				if ('srcObject' in videoRef.current) {
					videoRef.current.srcObject = stream;
					videoRef.current.play();
				} else {
					videoRef.current.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
					console.log('第二種');
				}
			});
		}
	};

	useEffect(() => {
		getUserMediaStream();
	}, [isBackCamera]);

	const onClickzp = () => {
		const context = canvasRef.current.getContext('2d');
		canvasRef.current.width = videoRef.current.videoWidth;
		canvasRef.current.height = videoRef.current.videoHeight;
		context.drawImage(videoRef.current, 0, 0);

		canvasRef.current.toBlob(
			(blob) => {
				console.log(blob);
			},
			'image/jpeg',
			1,
		);
	};

	const changeCamera = () => {
		stopCapture();
		setIsBackCamera(!isBackCamera);
	};

	const stopCapture = () => {
		if (!videoRef.current.srcObject) return;
		const stream = videoRef.current.srcObject;
		const tracks = stream.getTracks();
		tracks.forEach((track) => {
			track.stop();
		});
	};

	return (
		<div className='webrtc'>
			<div>當前攝像頭：{isBackCamera ? '前置' : '後置'}</div>

			<div className='buttons'>
				<button onClick={onClickzp}>點擊抓拍</button>
				<button onClick={changeCamera}>切換攝像頭</button>
			</div>
			<div className='tops'>
				<video id='viodes' ref={videoRef} playsInline autoPlay></video>
				<canvas id='canvas' ref={canvasRef}></canvas>
			</div>
		</div>
	);
};

export default WebrtcForCamera4;
