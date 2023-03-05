import { NodePath } from '@babel/core'
import { StringLiteral } from '@babel/types'
import { handleStringLiteral } from './visitor'
import { saveLanguage, initConfig } from './utils'

export default function () {
	return {
		pre() {
			initConfig()
		},
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
				enter: (path: NodePath<StringLiteral>) => handleStringLiteral(path)
			}
		},
		post() {
			saveLanguage()
		}
	}
}
