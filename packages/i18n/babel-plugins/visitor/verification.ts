import { NodePath } from '@babel/core'

export const isDisabledTransform = (path: NodePath): boolean => {
	if (!path.hub) return true

	const { code } = path.hub.file
	if (!code) return true

	return false
}
