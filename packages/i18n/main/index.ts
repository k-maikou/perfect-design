import intl from 'react-intl-universal'
import { handleFetchJson, getCache } from './utils'

export const getLanguageData = (path: string, lang: string) => {
	const cacheData = getCache(lang)
	let data = cacheData ? JSON.parse(cacheData) : ''
	if (!data) {
		data = handleFetchJson(path, lang)
	}

	return data
}

export const transform = (id: string, value: string, options = {}) => {
	return intl.get(id, options).defaultMessage(value)
}
