type IFetch = (path: string, lang: string) => Promise<Record<string, string>>

export interface InitConfig {
	// 语言列表
	langList: ['zh-CN', 'en-US', 'zh-TW']
	// 默认语言（开发时的文本语言）
	lang: 'zh-CN'
	// 语言配置目录
	langDirPath: 'public/i18n'
	// 转换函数名
	funcName: 'react_tr'
	// 请求语言包数据的方法
	fetchFn?: IFetch
}

export const i18nConfig: InitConfig = {
	// 语言列表
	langList: ['zh-CN', 'en-US', 'zh-TW'],
	// 默认语言（开发时的文本语言）
	lang: 'zh-CN',
	// 语言配置目录
	langDirPath: 'public/i18n',
	// 转换函数名
	funcName: 'react_tr'
}
