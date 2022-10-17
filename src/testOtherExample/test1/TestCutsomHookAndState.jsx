import React, { useMemo, useState } from 'react';
import { useUserMedia } from './useUserMedia';

const TestCutsomHookAndState = () => {
	console.log('TestCutsomHookAndState render');
	const [isFlag, setIsFlag] = useState(false);
	const constraints = useMemo(() => {
		return { test: 123 };
	}, [isFlag]);
	const mediaStream = useUserMedia(constraints);
	console.log('TestCutsomHookAndState mediaStream' + mediaStream);
	const changeCamera = () => {
		setIsFlag(!isFlag);
	};
	return (
		<div>
			<div className='buttons'>
				<button onClick={changeCamera}>切換</button>
			</div>
		</div>
	);
};

export default TestCutsomHookAndState;
