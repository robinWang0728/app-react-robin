import React from 'react';

const usePreviousValue = (value) => {
	const currValue = React.useRef(value);
	const preValue = React.useRef(value);
	console.log('render usePreviousValue');

	React.useEffect(() => {
		console.log('useEffect value' + JSON.stringify(value));
		currValue.current = value;
	}, [value]);

	console.log('render usePreviousValue2');

	if (currValue.current !== value) preValue.current = currValue.current;

	return preValue.current;
};

export default usePreviousValue;
// https://www.notes-hz.com/post/226
// https://stackoverflow.com/questions/69340168/react-hooks-child-component-useeffect-executes-first-before-parent-component
