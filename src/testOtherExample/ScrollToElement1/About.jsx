import React from 'react';
import styled from 'styled-components';
const About = () => {
	return (
		<AboutBox id='about'>
			<a href='#main'>Go to main</a>
		</AboutBox>
	);
};

export default About;

const AboutBox = styled.div`
	height: 100vh;
	background: red;
`;
