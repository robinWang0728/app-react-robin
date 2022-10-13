import React, { useEffect } from 'react';

export default function App() {
	useEffect(() => {
		console.log('on Parent mount');
	}, []);

	useEffect(() => {
		console.log('on parent mount 2');
	}, []);

	console.log('rendering parent');
	return (
		<div>
			<ChildComponent />
		</div>
	);
}

function ChildComponent(props) {
	useEffect(() => {
		console.log('child component mounted');
	}, []);

	console.log('rendering child');
	return <div>child</div>;
}
