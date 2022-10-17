import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useCardRatio } from './useCardRatio';
import { useUserMedia } from './useUserMedia';

const WebrtcForCamera4 = () => {
	const videoRef = useRef();
	const canvasRef = useRef();

	const [isBackCamera, setIsBackCamera] = useState(false);

	const constraints = useMemo(() => {
		return { audio: false, video: { facingMode: isBackCamera ? 'user' : 'environment' } };
	}, [isBackCamera]);

	const { error, state, mediaStream } = useUserMedia(constraints);

	useEffect(() => {
		if (state !== 'resolved' || !mediaStream) {
			return;
		}

		videoRef.current.srcObject = mediaStream;
		videoRef.current.play();
	}, [state, mediaStream]);

	const changeCamera = () => {
		setIsBackCamera(!isBackCamera);
	};

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
	if (state === 'pending') {
		return <p>{'Waiting...'}</p>;
	}

	if (state === 'rejected') {
		return (
			<p>
				{'Error: '}
				{error.message}
			</p>
		);
	}

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
