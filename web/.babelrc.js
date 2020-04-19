const presets = ['@babel/react', '@babel/typescript'];

const plugins = [
	'babel-plugin-styled-components',
	'@babel/plugin-proposal-object-rest-spread',
	'@babel/plugin-proposal-optional-chaining',
	'@babel/plugin-proposal-nullish-coalescing-operator',
];

module.exports = { presets, plugins };
