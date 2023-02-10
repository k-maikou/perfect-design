---
title: Alert
nav:
  title: Component
  path: /common
mobile: false
toc: content
---

# Alert

When displaying warning information to users, the warning prompt displays the information that needs attention.

## Basic use

Warning prompt, which shows the information that needs attention, is applicable to short warning prompts.

<code src="./demo/index.tsx"></code>

## API

| Name         | Description             | Type                               | Default |
| ------------ | ----------------------- | ---------------------------------- | ------- |
| style        | Custom styles           | `CSSProperties`                    | `--`    |
| className    | class name              | `string`                           | `--`    |
| type         | type                    | `info / success / warning / error` | `info`  |
| title        | Display title           | `string`                           | `''`    |
| content      | Warning text            | `string`                           | `''`    |
| showClear    | Show clear button       | `boolean`                          | `false` |
| showIcon     | Show warning icon       | `boolean`                          | `true`  |
| closeElement | Custom close icon       | `React.ReactNode/string`           | `--`    |
| onClose      | Close callback function | `Function`                         | `--`    |
