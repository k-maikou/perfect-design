---
title: Alert 警告提示
nav:
  title: 组件
  path: /common
group:
  title: 反馈
mobile: false
toc: content
---

# Alert 警告提示

向用户显示警告的信息时，通过警告提示，展现需要关注的信息。

## 基本使用

警告提示，展现需要关注的信息，适用于简短的警告提示。

<code src="./demo/index.tsx"></code>

## API

| Name         | Description      | Type                               | Default |
| ------------ | ---------------- | ---------------------------------- | ------- |
| style        | 自定义样式       | `CSSProperties`                    | `--`    |
| className    | 类名             | `string`                           | `--`    |
| type         | 类型             | `info / success / warning / error` | `info`  |
| title        | 显示标题         | `string`                           | `''`    |
| content      | 警告文字         | `string`                           | `''`    |
| showClear    | 显示清除按钮     | `boolean`                          | `false` |
| showIcon     | 显示警告提示图标 | `boolean`                          | `true`  |
| closeElement | 自定义关闭图标   | `React.ReactNode / string`         | `--`    |
| onClose      | 关闭回调函数     | `Function`                         | `--`    |
