export default {
	input: ['./src/index.ts'],
	output: [
		{
			file: 'dist/cjs/index.js',
			format: 'cjs',
			name: 'cjs.js'
		},
		{
			file: 'dist/umd/index.js',
			format: 'umd',
			name: 'umd.js'
		},
		{
			file: 'dist/es/index.js',
			format: 'es',
			name: 'index.js'
		}
	],
	external: ['react', 'react-dom']
}
