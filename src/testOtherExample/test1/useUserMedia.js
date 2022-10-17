import { useState, useEffect } from 'react';

export function useUserMedia(requestedMedia) {
	console.log('useUserMedia');
	const [mediaStream, setMediaStream] = useState(null);

	useEffect(() => {
		console.log(mediaStream);
		console.log('useUserMedia useEffect');
		const tt = Math.random() * 100;
		console.log(tt);
		setMediaStream(tt);
		// eslint-disable-next-line no-constant-condition
		if (false) {
			setMediaStream(tt);
		} else {
			return () => {
				console.log('Will Unmounted' + mediaStream);
			};
		}
	}, [requestedMedia]);

	return mediaStream;
}
