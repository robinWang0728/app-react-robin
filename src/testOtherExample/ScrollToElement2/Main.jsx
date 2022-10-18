import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Main = ({ mainRef, aboutRef, usageRef }) => {
	const handleScroll = (ref) => {
		window.scrollTo({
			top: ref.offsetTop,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<MainBox id='main' ref={mainRef}>
			<h2>Main</h2>
			<li>
				<Link
					to='/#about'
					onClick={() => {
						handleScroll(aboutRef.current);
					}}
				>
					About
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
		</MainBox>
	);
};

export default Main;

const MainBox = styled.div`
	height: 100vh;
	background: blue;
`;
