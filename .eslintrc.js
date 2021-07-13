module.exports = {
	env: {
		es6: true,
		node: true,
	},
	parser: "babel-eslint",
	plugins: ["react", "prettier"],
	parserOptions: {
		version: 2018,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		"eslint:recommended",
		"prettier",
	],
	rules: {
		"prettier/prettier": "error",
	},
};
