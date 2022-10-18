import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Use = ({ mainRef, aboutRef, usageRef }) => {
	const handleScroll = (ref) => {
		window.scrollTo({
			top: ref.offsetTop,
			left: 0,
			behavior: 'smooth',
		});
	};
	return (
		<div style={{ backgroundColor: 'coral', minHeight: '100vh' }} ref={usageRef}>
			<h2>How to Use Section</h2>
			<li>
				<Link
					to='/#main'
					onClick={() => {
						handleScroll(mainRef.current);
					}}
				>
					Scroll To Main
				</Link>
			</li>
			<li>
				<Link
					to='/#how-to-use'
					onClick={() => {
						handleScroll(usageRef.current);
					}}
				>
					How To Use
				</Link>
			</li>
		</div>
	);
};

export default Use;
