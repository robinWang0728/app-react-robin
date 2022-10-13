import React, { useEffect, useState } from 'react';

const TestUseEffect = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log('Always Did Mounted');
		return () => console.log('Always Will Unmounted');
	});

	useEffect(() => {
		console.log('Did Mounted');
		return () => console.log('Will Unmounted');
	}, []);

	useEffect(() => {
		console.log('Count Updated');
	}, [count]);

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => setCount(0)}>初始化</button>
			<button onClick={() => setCount(count + 1)}>增加</button>
			<button onClick={() => setCount(count - 1)}>減少</button>
		</div>
	);
};

export default TestUseEffect;

// const App = () => {
//     return (
//       <>
//       <TestUseEffect />
//       </>
//     );
//   };

//   export default App;
