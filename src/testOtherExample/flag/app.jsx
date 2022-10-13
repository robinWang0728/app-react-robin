import React, { useEffect, useState } from 'react';

const App = () => {
	const [_, setUpdated] = useState(false);
	const [, setUpdated2] = useState(false);

	useEffect(() => {
		console.log('render');
	});

	return (
		<>
			<button onClick={() => setUpdated((state) => !state)}>flag1</button>
			<button onClick={() => setUpdated2((state) => !state)}>flag2</button>
		</>
	);
};

export default App;
