// @ts-nocheck
import React from 'react';
import './styles.css';
import ScrollToButton from './ScrollToButton';
import Section from './Section';

const sections = ['intro', 'description', 'contact', 'footer'];
const App = () => {
	const descriptionRef = React.useRef(null);
	return (
		<div className='App'>
			<h1>Hello World.</h1>
			<h2>Click on the button to see some magic happen!</h2>
			<ScrollToButton toId='contact'>Scroll To Contact!</ScrollToButton>

			<Section title={sections[0]} />
			<Section ref={descriptionRef} title={sections[1]} />

			<Section id={sections[2]} title={sections[2]}>
				<ScrollToButton duration={1500} toRef={descriptionRef}>
					Scroll To Description!
				</ScrollToButton>
			</Section>

			<Section title={sections[3]} />
		</div>
	);
};

export default App;
