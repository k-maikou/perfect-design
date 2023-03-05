interface mainLanguage {
	id: string
	value: string
}

interface GlobalData {
	mainLanguage: mainLanguage[]
	timeoutFn: any
}

export interface Config {
	isDev: boolean
	langList: string[]
	defLang: string
	langDirPath: string
	funcName: string
	forceFileList: string[]
	traditionalLang: string
}

export const CONFIG: Config = {
	isDev: true,
	// 语言列表
	langList: ['zh-CN', 'en-US', 'zh-TW'],
	// 默认语言（开发时的文本语言）
	defLang: 'zh-CN',
	// 语言配置目录
	langDirPath: 'public/i18n',
	// 转换函数名
	funcName: 'react_tr',
	// 强制转换文件列表，不需要加标签，正则表达式
	forceFileList: [],
	// 繁体字语言标识
	traditionalLang: 'tw'
}

export const GlobalData: GlobalData = {
	mainLanguage: [],
	timeoutFn: null
}

export const TASK = '_task'
