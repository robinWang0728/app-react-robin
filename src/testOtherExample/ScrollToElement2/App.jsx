import About from './About';
import Main from './Main';
import React, { useRef } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Use from './Use';

export default function App() {
	const mainRef = useRef(null); // represents main section
	const aboutRef = useRef(null); // represents about section
	const usageRef = useRef(null); // represents how to use section
	return (
		<div className='App'>
			<Main mainRef={mainRef} aboutRef={aboutRef} usageRef={usageRef} />
			<About mainRef={mainRef} aboutRef={aboutRef} usageRef={usageRef} />
			<Use mainRef={mainRef} aboutRef={aboutRef} usageRef={usageRef} />
		</div>
	);
}
