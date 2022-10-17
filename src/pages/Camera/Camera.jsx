import React, { useEffect, useMemo, useRef, useState } from 'react';
import { IoCameraReverseOutline } from 'react-icons/io5';
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

	const takePicture = () => {
		const context = canvasRef.current.getContext('2d');
		canvasRef.current.width = videoRef.current.videoWidth;
		canvasRef.current.height = videoRef.current.videoHeight;
		context.drawImage(videoRef.current, 0, 0);
		setIsTakePic(true);
	};

	const confrimPic = () => {
		canvasRef.current.toBlob(
			(blob) => {
				console.log(blob);
			},
			'image/jpeg',
			1,
		);
		const img = canvasRef.current.toDataURL('image/png');
		console.log(img);
	};
	const backPic = () => {
		setIsTakePic(false);
		const context = canvasRef.current.getContext('2d').clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
		canvasRef.current.width = 0;
		canvasRef.current.height = 0;
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
			<div className='camera__btns camera__btns--top'>
				<button className='camera__btn' onClick={changeCamera}>
					<IoCameraReverseOutline className='icon' />
				</button>
			</div>
			<div className='camera__main'>
				<video className='camera__video' ref={videoRef} playsInline autoPlay></video>
				<canvas className={`camera__canvas ${isTakePic ? '' : 'hide'}`} ref={canvasRef}></canvas>
			</div>
			<div className='camera__btns camera__btns--bottom'>
				<button className={`camera__btn ${!isTakePic ? '' : 'hide'}`} onClick={takePicture}>
					拍照
				</button>
				<button className={`camera__btn ${isTakePic ? '' : 'hide'} m-x-8`} onClick={confrimPic}>
					確認照片
				</button>
				<button className={`camera__btn ${isTakePic ? '' : 'hide'} m-x-8`} onClick={backPic}>
					取消
				</button>
			</div>
		</div>
	);
};

export default Camera;
