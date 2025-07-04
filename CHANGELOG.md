# 版本日志

## v1.0.3 (2025-7-4)

- `isEmptyArray` 添加了范性，在数组为空数组时依旧保持原类型

## v1.0.2 (2025-6-16)

- 文档维护

## v1.0.1 (2025-5-29)

- `isType` 的第二参数现可接受一个参数，该参数可被用于判断后的该值类型来使用（见函数注释）

## v1.0.0 （5 🈷️ 24 日 2025 年）

由于版本号长期处于 1 一下，导致同一个项目多个版本

- 添加了 `isZero`
- 添加了 `isNegativeInteger`
- 添加了 `isPositiveInteger`

这三个看似有用实则没用的东西

## v0.3.1-beta.0 （5 🈷️ 10 日 2025 年）

- 好想一不小心就

## v0.3.0 （5 🈷️ 9 日 2025 年）

### ✨ 新增函数

- 添加了 `isTrue` 函数，用于判断值是否是 `true`
- 添加了 `isFalse` 函数，用于判断值是否是 `false`
- 添加了 `isEmptyArray` 函数，用于判断值是否是空数组
- 添加了 `isEmptyObject` 函数，用于判断值是否是空对象

## v0.2.1 （5 🈷️ 9 日 20

- 文档修复

## 0.2.0(4 月 9 日 2025 年)

### 功能添加 ✨

- 添加了 `isEmptyString` 函数，用于判断字符串是否为空字符串，且不包含空格
- 添加了 `isBusinessEmptyString`，用于判断字符串是否为空字符串，且包含空格

## 0.1.5(3 月 27 日 2025 年)

- 多次折腾，回归中文注释

## 0.1.4(3 月 21 日 2025 年)

- 通过 github actions 构建和发布包

## 0.1.0(3 月 21 日 2025 年)

- 修改了测试率徽章的显示方式

## 0.0.7 (3 月 19 日 2025 年)

- 维护了注释

## 0.0.6 (3 月 19 日 2025 年)

- 修复了 `isEvalError`、`isRangeError`、`isReferenceError`、`isSyntaxError`、`isTypeError`、`isURIError`、`isAggregateError` 返回值不准确的问题
- 添加了 `isType` 函数

## 0.0.5 (3 月 16 日 2025 年)

- 上一个版本意外移除了打包的依赖 `tslib` 导致打包异常而未察觉，已修复

## 0.0.4 (3 月 13 日 2025 年)

- 添加测试率的徽章

## 0.0.3 (3 月 13 日 2025 年)

- 修复了已知 bug

## 0.0.2 (3 月 7 日 2025 年)

- 使用 [shields](https://img.shields.io) 构建徽章

## 0.0.1 (3 月 7 日 2025 年)

- 移除了 `isAtomics` 函数。因为 `Atomics` 仅是一个函数集合，没有实例。同样的还有 `Math、JSON、Reflect、Intl`
- 移除了 `isWindow` 函数
- 优化了 `typeOf` 函数，检测 `asyncFunction`、`generator`、`generatorFunction` 更精准

## 0.0.0 (3 月 4 日 2025 年)

- 初始化项目
