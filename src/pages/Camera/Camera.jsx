import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useUserMedia } from './hook/useUserMedia';

const Camera = () => {
	const videoRef = useRef();
	const canvasRef = useRef();

	const [isBackCamera, setIsBackCamera] = useState(false);
	const [isTakePic, setIsTakePic] = useState(false);

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
		<div className='camera'>
			<div>當前攝像頭：{isBackCamera ? '前置' : '後置'}</div>

			<div className='camera__btns'>
				<button className='camera__btn' onClick={changeCamera}>
					切換攝像頭
				</button>
			</div>
			<div className='camera__main'>
				<video className='camera__video' ref={videoRef} playsInline autoPlay></video>
				<canvas className='camera__canvas' ref={canvasRef}></canvas>
			</div>
			<div className='camera__btns'>
				<button className='camera__btn' onClick={changeCamera}>
					拍照
				</button>
				<button className='camera__btn' onClick={changeCamera}>
					確認照片
				</button>
				<button className='camera__btn' onClick={changeCamera}>
					取消
				</button>
			</div>
		</div>
	);
};

export default Camera;
