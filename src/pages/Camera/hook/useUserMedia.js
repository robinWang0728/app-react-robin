import { useState, useEffect, useDebugValue } from 'react';

export function useUserMedia(constraints) {
	const [mediaStream, setMediaStream] = useState();
	const [error, setError] = useState();
	const [state, setState] = useState('pending');
	useDebugValue({ error, state, mediaStream });

	useEffect(() => {
		setState('pending');
		const userMediaError = checkUserMediaError();
		if (userMediaError) {
			setError(userMediaError);
			setState('rejected');
			return;
		}
		async function enableVideoStream() {
			try {
				const stream = await navigator.mediaDevices.getUserMedia(constraints);
				setMediaStream(stream);
				setState('resolved');
			} catch (err) {
				setError(err);
				setState('rejected');
			}
		}
		enableVideoStream();
	}, [constraints]);

	useEffect(() => {
		return () => {
			if (!mediaStream) {
				return;
			}
			mediaStream.getTracks().forEach((track) => track.stop());
		};
	}, [mediaStream]);

	return { error, state, mediaStream };
}
function checkUserMediaError() {
	if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
		return new Error('Browser API navigator.mediaDevices.getUserMedia not available');
	}
	return null;
}
