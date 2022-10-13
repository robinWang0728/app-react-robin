module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['standard', 'eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:react-hooks/recommended'],
	overrides: [],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
	},
};
