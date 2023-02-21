import typescript from 'rollup-plugin-typescript2'
import less from 'rollup-plugin-less'
import clear from 'rollup-plugin-clear'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { uglify } from 'rollup-plugin-uglify'
import copy from 'rollup-plugin-copy'

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
	plugins: [
		typescript(), // 会自动读取 文件tsconfig.json配置
		less({ output: './dist/style/index.css' }),
		clear({
			targets: ['dist']
		}),
		resolve(),
		commonjs({
			ignoreGlobal: true,
			include: /\/node_modules\//,
			external: ['react', 'react-dom', 'styled-components'],
			namedExports: {
				react: Object.keys(require('react'))
			}
		}),
		babel({
			exclude: 'node_modules/**',
			runtimeHelpers: true
		}),
		terser(),
		uglify(),
		copy({
			targets: [
				{
					src: '../../scripts/globalStyle/compiled-colors.less',
					dest: 'distt/style'
				}
			]
		})
	],
	external: ['react', 'react-dom']
}
