import axios from 'axios'
import { i18nConfig, InitConfig } from './const'

export const handleFetchJson = async (
	path: string,
	lang: string,
	fetchFn?: (path: string) => Promise<Record<string, string>>
) => {
	let data
	const filePath = `${path}/${lang}`.replace('public', '')

	try {
		if (fetchFn) {
			data = await fetchFn(`${filePath}`)
		} else {
			const res = await axios.get(`${filePath}.json`)
			data = res.data
		}

		if (data) {
			setCache(lang, data)
		}

		return data
	} catch (error) {
		return null
	}
}

const setCache = (key: string, value: any) => {
	localStorage.removeItem(key)
	localStorage.setItem(key, JSON.stringify(value))
}

export const getCache = (key: string) => localStorage.getItem(key) || null

export const getCacheConfig = (key: string, params: InitConfig): InitConfig => {
	const cacheParams = getCache(key)
	if (cacheParams) {
		if (cacheParams !== JSON.stringify(params)) {
			return params
		}
		return JSON.parse(cacheParams)
	}
	return params
}

export const setI18nConfig = (config: InitConfig) => {
	Object.assign(i18nConfig, config)
	const cacheParams = getCache('config')
	if (cacheParams && cacheParams === JSON.stringify(config)) {
		return
	}
	setCache('config', i18nConfig)
}
