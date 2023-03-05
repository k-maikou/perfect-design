import { NodePath } from '@babel/core'
import {
	StringLiteral,
	ObjectProperty,
	jsxExpressionContainer,
	callExpression,
	identifier,
	valueToNode
} from '@babel/types'
import {
	getTemplateVal,
	isIncludesZhStr,
	getMd5keyByText,
	addMainLanguage
} from '../utils'
import { CONFIG } from '../const'
import { isDisabledTransform } from './verification'

export const handleStringLiteral = (path: NodePath<StringLiteral>) => {
	if (isDisabledTransform(path)) return

	const val = getTemplateVal(path.node.value)

	if (path.parent.type === 'ImportDeclaration') return

	if (path.parent.type === 'ObjectProperty') {
		if ((path.parent as ObjectProperty).key === path.node) return
	}

	if (!isIncludesZhStr(val)) return

	const key = getMd5keyByText(val)

	const handleReplaceWith = () => {
		path.replaceWith(
			callExpression(identifier(CONFIG.funcName), [
				valueToNode(key),
				valueToNode(val)
			])
		)
	}

	if (path.parent.type === 'JSXAttribute') {
		path.replaceWith(
			jsxExpressionContainer(
				callExpression(identifier(CONFIG.funcName), [valueToNode(key)])
			)
		)
	} else if (path.parent.type === 'CallExpression') {
		setTimeout(() => handleReplaceWith())
	} else {
		handleReplaceWith()
	}
	addMainLanguage(key, val)
}
