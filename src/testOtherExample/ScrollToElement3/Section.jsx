// @ts-nocheck
// Section.jsx

import React, { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const ScrollToButton = forwardRef(({ id, title, children }, ref) => (
	<section ref={ref} id={id}>
		<h2>{title}</h2>
		{children}
	</section>
));

export default ScrollToButton;
