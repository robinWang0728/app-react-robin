import React, { useRef, useState } from 'react';
import { useCardRatio } from './useCardRatio';
import { useOffsets } from './useOffsets';
import { useUserMedia } from './useUserMedia';

const CAPTURE_OPTIONS = {
	audio: false,
	video: { facingMode: 'environment' },
};

const WebrtcForCamera3 = ({ onCapture, onClear }) => {
	const canvasRef = useRef();
	const videoRef = useRef();

	const [container, setContainer] = useState({ width: 0, height: 0 });
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);
	const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
	const [isFlashing, setIsFlashing] = useState(false);

	const mediaStream = useUserMedia(CAPTURE_OPTIONS);
	const [aspectRatio, calculateRatio] = useCardRatio(1.586);
	const offsets = useOffsets(videoRef.current && videoRef.current.videoWidth, videoRef.current && videoRef.current.videoHeight, container.width, container.height);

	if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
		videoRef.current.srcObject = mediaStream;
	}

	function handleResize(contentRect) {
		setContainer({
			width: contentRect.bounds.width,
			height: Math.round(contentRect.bounds.width / aspectRatio),
		});
	}

	function handleCanPlay() {
		calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth);
		setIsVideoPlaying(true);
		videoRef.current.play();
	}

	function handleCapture() {
		const context = canvasRef.current.getContext('2d');

		context.drawImage(videoRef.current, offsets.x, offsets.y, container.width, container.height, 0, 0, container.width, container.height);

		canvasRef.current.toBlob((blob) => onCapture(blob), 'image/jpeg', 1);
		setIsCanvasEmpty(false);
		setIsFlashing(true);
	}

	function handleClear() {
		const context = canvasRef.current.getContext('2d');
		context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
		setIsCanvasEmpty(true);
		onClear();
	}

	if (!mediaStream) {
		return null;
	}

	return (
		<div>
			<div>
				<video ref={videoRef} hidden={!isVideoPlaying} onCanPlay={handleCanPlay} autoPlay />

				<div hidden={!isVideoPlaying} />

				<canvas ref={canvasRef} width={container.width} height={container.height} />

				<div onAnimationEnd={() => setIsFlashing(false)} />
			</div>

			{isVideoPlaying && <button onClick={isCanvasEmpty ? handleCapture : handleClear}>{isCanvasEmpty ? 'Take a picture' : 'Take another picture'}</button>}
		</div>
	);
};

export default WebrtcForCamera3;
