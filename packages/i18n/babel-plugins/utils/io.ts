import * as path from 'path'
import * as fs from 'fs'
import * as mkdirp from 'mkdirp'
import { CONFIG } from '../const'

const absolutePath: string = fs.realpathSync(process.cwd())

const handleResolve = (filePath: string) => path.resolve(absolutePath, filePath)

const readFile = (path: string) => {
	try {
		return fs.readFileSync(path, 'utf-8')
	} catch (error) {
		return null
	}
}

const mkdir = (filePath: string) => {
	mkdirp.sync(path.dirname(filePath))
}

const write = (
	path: string,
	text: string | NodeJS.ArrayBufferView,
	options?: fs.WriteFileOptions | undefined
) => {
	mkdir(path)

	try {
		fs.writeFileSync(path, text, options)
	} catch (error) {
		console.warn(error)
	}
}

const getI18nPath = (filePath: string): string => {
	return handleResolve(`${CONFIG.langDirPath}/${filePath}`)
}

const readI18n = (filePath: string) => {
	return readFile(getI18nPath(filePath))
}

const writeI18n = (filePath: string, data: string, options = {}) => {
	if (!filePath) return
	write(getI18nPath(filePath), data, options)
}

export const getPackageJson = () => {
	return require(`${handleResolve('package.json')}`) || {}
}

export const getI18JSON = (filePath: string, source = {}) => {
	const json = readI18n(filePath)

	if (!json) {
		return source
	}

	return JSON.parse(json)
}

export const setI18JSON = (filePath: string, data = {}) => {
	if (!data) return
	const res = JSON.stringify(data, null, 2)
	console.log('res', res)
	writeI18n(filePath, res)
}
