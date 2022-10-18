import { useEffect, useState } from 'react';

const useScrollPosition = () => {
	console.log('useScrollPosition render');
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		console.log('useScrollPosition useEffect');
		const updatePosition = () => {
			setScrollPosition(window.pageYOffset);
		};

		window.addEventListener('scroll', updatePosition);

		return () => {
			console.log('useScrollPosition remove');
			window.removeEventListener('scroll', updatePosition);
		};
	}, []);

	return scrollPosition;
};

export default useScrollPosition;
