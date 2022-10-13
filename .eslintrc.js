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
	plugins: ['react', 'import'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'no-unused-vars': 'warn',
	},
	settings: {
		'import/resolver': {
			jsconfig: {
				config: 'jsconfig.json',
				extensions: ['.js', '.jsx'],
			},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				moduleDirectory: ['node_modules', 'src/'],
			},
		},
	},
};
