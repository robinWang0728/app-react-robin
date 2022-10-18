import React from 'react';
import styled from 'styled-components';
const Main = () => {
	return (
		<MainBox id='main'>
			<a href='#about'>Go to about</a>
		</MainBox>
	);
};

export default Main;

const MainBox = styled.div`
	height: 100vh;
	background: blue;
`;
