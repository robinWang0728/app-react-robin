import { useState, useEffect } from 'react';

export function useUserMedia(constraints) {
	const [mediaStream, setMediaStream] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		const userMediaError = checkUserMediaError();
		if (userMediaError) {
			// @ts-ignore
			setError(userMediaError);
			return;
		}
		async function enableVideoStream() {
			try {
				const stream = await navigator.mediaDevices.getUserMedia(constraints);
				setMediaStream(stream);
			} catch (err) {
				setError(err);
			}
		}
		enableVideoStream();
	}, [constraints]);

	// useEffect(() => console.log('mount'), []);
	// useEffect(() => console.log('data1 update'), [mediaStream]);
	// useEffect(() => console.log('any update'));
	// useEffect(() => () => console.log('data1 update or unmount'), [mediaStream]);
	// useEffect(() => () => console.log('unmount'), []);

	useEffect(() => {
		return () => {
			if (!mediaStream) {
				return;
			}
			mediaStream.getTracks().forEach((track) => track.stop());
		};
	}, [mediaStream]);

	return [error, mediaStream];
}
function checkUserMediaError() {
	if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
		return new Error('Browser API navigator.mediaDevices.getUserMedia not available');
	}
	return null;
}
