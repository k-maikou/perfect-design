import { defineConfig } from 'dumi'

export default defineConfig({
	title: 'Perfect Design', // 站点名称
	outputPath: 'docs-dist', // 输出文件夹
	resolve: {
		docDirs: ['docs'],
		atomDirs: [{ type: 'component', dir: '/packages/perfect-design/src' }],
		codeBlockMode: 'passive'
	},
	themeConfig: {
		name: 'Perfect D',
		carrier: 'dumi', // 设备状态栏左侧的文本内容
		hd: true,
		rtl: true,
		footer:
			'Copyright © 2022-2022 Perfect Design. All Rights Reserved. Perfect Design 版权所有. 苏ICP备2022018060号',
		nav: [
			{
				title: '指南',
				link: '/guide'
			},
			{
				title: '组件',
				link: '/components/alert'
			}
		]
	}
})
