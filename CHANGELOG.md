# a-type-of-js

[![中文 🇨🇳](<https://img.shields.io/badge/🇨🇳-自述_%20_文件-rgb(255,12,36)>)](https://github.com/earthnutDev/a-type-of-js/blob/main/README-zh.md) [![English 🌍](<https://img.shields.io/badge/🌍-README-rgb(0,0,0)>)](https://github.com/earthnutDev/a-type-of-js/blob/main/README.md) ![查看 📔 日志](<https://img.shields.io/badge/👀-日_%20_志-rgb(0,125,206)?style=social>) [![查看 📔 日志](<https://img.shields.io/badge/👀-Change_%20_log-rgb(0,125,206)>)](https://github.com/earthnutDev/a-type-of-js/blob/main/CHANGELOG-en.md)

## 0.1.4(3 月 21 日 2025 年)

- 通过 github actions 构建和发布包

## 0.1.0(3 月 21 日 2025 年)

- 修改了测试率徽章的显示方式

## 0.0.7 (3 月 19 日 2025 年)

- 维护了注释

## 0.0.6 (3 月 19 日 2025 年)

- 修复了 `isEvalError`、`isRangeError`、`isReferenceError`、`isSyntaxError`、`isTypeError`、`isURIError`、`isAggregateError` 返回值不准确的问题
- 添加了 `isType` 方法

## 0.0.5 (3 月 16 日 2025 年)

- 上一个版本意外移除了打包的依赖 `tslib` 导致打包异常而未察觉，已修复

## 0.0.4 (3 月 13 日 2025 年)

- 添加测试率的徽章

## 0.0.3 (3 月 13 日 2025 年)

- 修复了已知 bug

## 0.0.2 (3 月 7 日 2025 年)

- 使用 [shields](https://img.shields.io) 构建徽章

## 0.0.1 (3 月 7 日 2025 年)

- 移除了 `isAtomics` 方法。因为 `Atomics` 仅是一个方法集合，没有实例。同样的还有 `Math、JSON、Reflect、Intl`
- 移除了 `isWindow` 方法
- 优化了 `typeOf` 方法，检测 `asyncFunction`、`generator`、`generatorFunction` 更精准

## 0.0.0 (3 月 4 日 2025 年)

- 初始化项目
