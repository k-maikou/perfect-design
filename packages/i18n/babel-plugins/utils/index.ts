import * as md5 from 'md5'
import { GlobalData, CONFIG } from '../const'
import { getI18JSON, getPackageJson, setI18JSON } from './io'

type JsonObject = {
	[key in keyof string | number]
}

export const getTemplateVal = (val: string) => {
	if (!val) return ''
	const str = val.trim()
	return str || ''
}

export const initConfig: () => void = () => {
	const config = getPackageJson().i18n || {}
	Object.assign(CONFIG, config)
}

export const isIncludesZhStr = (str: string) => !!str.match(/[\u4e00-\u9fa5]+/)

export const getMd5keyByText = (str: string) => md5(str).substr(0, 8)

export const addMainLanguage = (id: string, value: string) => {
	if (!value) return
	if (GlobalData.mainLanguage.some((item) => item.id === id)) return
	GlobalData.mainLanguage.push({ id, value })
}

const notEmptyObject = (obj: JsonObject) => {
	return !!Object.getOwnPropertyNames(obj).length
}

export const handleSaveLanguage = () => {
	const lang = GlobalData.mainLanguage
	if (!lang || !lang.length) return

	const languageJson = getI18JSON(`${CONFIG.defLang}.json`) || {}
	const allJson = {}
	const newJson = {}

	lang.forEach(({ id, value }) => {
		if (!notEmptyObject(languageJson)) {
			Object.assign(allJson, { [id]: value })
		}
		if (languageJson[id]) return
		Object.assign(newJson, { [id]: value })
	})

	if (!notEmptyObject(languageJson)) {
		setI18JSON(`${CONFIG.defLang}.json`, allJson)
	}
	if (notEmptyObject(newJson as JsonObject)) {
		setI18JSON(`newlyIncreased/${CONFIG.defLang}.json`, newJson)
	}
}

export const saveLanguage = () => {
	if (GlobalData.timeoutFn) {
		clearTimeout(GlobalData.timeoutFn)
		GlobalData.timeoutFn = null
	}
	GlobalData.timeoutFn = setTimeout(() => handleSaveLanguage(), 2000)
}
