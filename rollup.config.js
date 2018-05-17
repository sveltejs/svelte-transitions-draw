import pkg from './package.json';

export default {
	entry: 'src/index.js',
	external: ['eases-jsnext'],
	targets: [
		{ dest: pkg.main, format: 'cjs' },
		{ dest: pkg.module, format: 'es' }
	]
};
