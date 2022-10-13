import * as React from 'react';
import usePreviousValue from './usePreviousValue';

export default function App() {
	console.log('render app');
	const [count, setCount] = React.useState({ count: 0 });
	const [, setCount2] = React.useState(0);
	const previousCount = usePreviousValue(count);
	React.useEffect(() => {
		console.log('always useEffect app');
	});
	React.useEffect(() => {
		console.log('useEffect app');
	}, []);

	React.useEffect(() => {
		console.log('useEffect app2');
	}, []);
	const add = React.useCallback(() => {
		setCount((count) => ({ count: count.count + 1 }));
	}, []);

	return (
		<div className='App'>
			<h1>current：{count.count}</h1>
			<h1>
				previous：
				{previousCount?.count}
			</h1>

			<button onClick={add}>add</button>
			<button onClick={() => setCount2((count) => count + 1)}>add</button>
		</div>
	);
}
