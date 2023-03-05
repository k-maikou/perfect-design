import intl from 'react-intl-universal'
import { transform, getLanguageData } from './main'
import { InitConfig, i18nConfig } from './main/const'
import { getCacheConfig, setI18nConfig } from './main/utils'

const warn = console.warn.bind(console)

export const initI18n = async (initialization: InitConfig) => {
	const initParams = getCacheConfig('config', {
		...i18nConfig,
		...initialization
	})
	const { funcName, langDirPath, lang } = initParams

	window.console.warn = (message: string, ...args: any) => {
		if (
			message?.includes('react-intl-universal') ||
			args[1]?.includes('react-intl-universal')
		) {
			return
		}
		warn(message, ...args)
	}

	setI18nConfig(initParams)
	window[funcName] = transform
	const data = await getLanguageData(langDirPath, lang)
	await intl.init({
		currentLocale: lang,
		locales: {
			[lang]: data
		}
	})
}
