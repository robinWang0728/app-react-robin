import * as React from 'react';
import { useEffect, useState } from 'react';

export default function App() {
	console.log('render');
	const [, setFlag] = useState(true);
	const isIn = true;
	let slideInterval;
	let intervalTime;
	const intervalTime2 = Math.random() * 10;
	console.log(intervalTime2);
	const num1 = 123; // 不會進入useEffect
	const num2 = { o: 123 }; // 會進入useEffect
	useEffect(() => {
		console.log('slideInterval useEffect');
		if (isIn) {
			const auto = () => {
				intervalTime = 1000;
				// slideInterval = setInterval(() => {
				// 	console.log('auto1');
				// }, num1 * intervalTime);
				slideInterval = setInterval(() => {
					console.log('auto2');
				}, num2.o * intervalTime);
			};
			auto();
		}
		return () => {
			console.log('remove slideInterval');
			clearInterval(slideInterval);
		};
	}, [slideInterval, isIn, num1]);

	useEffect(() => {
		console.log('intervalTime useEffect');
	}, [intervalTime]);
	return (
		<div className='App'>
			<button
				onClick={() =>
					setFlag((pre) => {
						intervalTime = '123';
						return !pre;
					})
				}
			>
				add
			</button>
		</div>
	);
}
