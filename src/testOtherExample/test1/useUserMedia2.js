import { useState, useEffect } from 'react';

export function useUserMedia(requestedMedia) {
	console.log('useUserMedia');
	const [mediaStream, setMediaStream] = useState(null);

	useEffect(() => {
		let canceled = false;
		console.log('useUserMedia useEffect');
		console.log('useUserMedia canceled' + canceled);

		const tt = Math.random() * 100;
		console.log(tt);
		setMediaStream(tt);
		// eslint-disable-next-line no-constant-condition
		return () => {
			canceled = true;
			console.log('useUserMedia canceled end' + canceled);
		};
	}, [requestedMedia]);

	useEffect(() => {
		console.log('effect mediaStream' + mediaStream);
		return () => {
			if (!mediaStream) {
				return;
			}
			console.log('effect mediaStream end' + mediaStream);
		};
	}, [mediaStream]);

	return mediaStream;
}
