import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const About = ({ mainRef, aboutRef, usageRef }) => {
	const handleScroll = (ref) => {
		window.scrollTo({
			top: ref.offsetTop,
			left: 0,
			behavior: 'smooth',
		});
	};
	return (
		<AboutBox id='about' ref={aboutRef}>
			<h2>About Section</h2>
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
		</AboutBox>
	);
};

export default About;

const AboutBox = styled.div`
	height: 100vh;
	background: red;
`;
