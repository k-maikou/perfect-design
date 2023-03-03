import { NodePath } from '@babel/core'
import { JSXText, StringLiteral, TemplateLiteral } from '@babel/types'

export default function babelPlugins() {
	console.log(111)
	return {
		visitor: {
			// 模版字符串
			TemplateLiteral: {
				// enter: (path: NodePath<TemplateLiteral>) => console.log()
			},
			// dom
			JSXText: {
				// enter: (path: NodePath<JSXText>) => console.log()
			},
			// 字符串
			StringLiteral: {
				enter: (path: NodePath<StringLiteral>) => console.log(path)
			}
		}
	}
}

// function babelPlugin() {
// 	return {
// 		plugins: [babelPlugins]
// 	}
// }

// export default babelPlugin
