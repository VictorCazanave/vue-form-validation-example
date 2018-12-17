module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'indent': ['error', 'tab'],
		'no-tabs': 'off',
		'prefer-destructuring': ['error', {
			'AssignmentExpression': {
				'array': false,
				'object': false
			}
		}],
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
