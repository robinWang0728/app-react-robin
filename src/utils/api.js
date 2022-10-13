import axios from 'axios';

export default axios.create({
	baseURL: 'https://6322d01a362b0d4e7dd3c918.mockapi.io',
	headers: {
		'Content-type': 'application/json',
	},
});
