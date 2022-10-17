import { useState, useEffect, useRef } from 'react';

export function useUserMedia(requestedMedia) {
	const [mediaStream, setMediaStream] = useRef(null);

	useEffect(() => {
		async function enableVideoStream() {
			try {
				const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
				setMediaStream(stream);
			} catch (err) {
				// Handle the error
			}
		}
		enableVideoStream();
	}, [requestedMedia]);

	useEffect(() => console.log('mount'), []);
	useEffect(() => console.log('data1 update'), [requestedMedia]);
	useEffect(() => console.log('any update'));
	useEffect(() => () => console.log('data1 update or unmount'), [requestedMedia]);
	useEffect(() => () => console.log('unmount'), []);

	useEffect(
		() => () => {
			console.log(mediaStream);
			if (mediaStream) {
				console.log('cleanup');
				mediaStream.getTracks().forEach((track) => {
					track.stop();
				});
			}
		},
		[],
	);

	return mediaStream;
}
