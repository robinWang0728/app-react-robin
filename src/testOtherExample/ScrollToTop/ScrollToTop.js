import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	// Top: 0 takes us all the way back to the top of the page
	// Behavior: smooth keeps it smooth!
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<>
			{isVisible && (
				<ScrollToTopBox>
					<div onClick={scrollToTop}>
						<h3>Go up!</h3>
					</div>
				</ScrollToTopBox>
			)}
		</>
	);
}

const ScrollToTopBox = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	cursor: pointer;
	background: blue;
`;
