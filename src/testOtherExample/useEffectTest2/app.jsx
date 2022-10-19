import * as React from 'react';
import { useEffect, useState } from 'react';

export default function App() {
	console.log('render');
	const [, setFlag] = useState(true);
	const isIn = true;
	let slideInterval;
	const intervalTime = 5;
	const intervalTime2 = Math.random() * 10;
	console.log(intervalTime2);
	const num1 = 123; // 不會進入useEffect
	const num2 = { o: 123 }; // 會進入useEffect
	useEffect(() => {
		console.log('slideInterval useEffect');
		if (isIn) {
			const auto = () => {
				// slideInterval = setInterval(() => {
				// 	console.log('auto1');
				// }, num1 * intervalTime);
				slideInterval = setInterval(() => {
					console.log('auto2');
				}, num2.o * intervalTime2);
			};
			auto();
		}
		return () => {
			console.log('remove slideInterval');
			clearInterval(slideInterval);
		};
	}, [slideInterval, isIn, num1, intervalTime2]);
	return (
		<div className='App'>
			<button onClick={() => setFlag((pre) => !pre)}>add</button>
		</div>
	);
}
