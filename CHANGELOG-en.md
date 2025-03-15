# a type of js

[![中文 🇨🇳](<https://img.shields.io/badge/🇨🇳-自述_%20_文件-rgb(255,12,36)>)](https://github.com/earthnutDev/a-type-of-js/blob/main/README-zh.md) [![English 🌍](<https://img.shields.io/badge/🌍-README-rgb(0,0,0)>)](https://github.com/earthnutDev/a-type-of-js/blob/main/README.md) [![查看 📔 日志](<https://img.shields.io/badge/👀-日_%20_志-rgb(0,125,206)>)](https://github.com/earthnutDev/a-type-of-js/blob/main/CHANGELOG.md) ![查看 📔 日志](<https://img.shields.io/badge/👀-Change_%20_log-rgb(0,125,206)?style=social>)

## 0.0.5 (3/16/2025)

- The previous release unexpectedly removed a packaged dependency `tslib` that resulted in a packaging exception unnoticed, fixed

## 0.0.4 (3/13/2025)

- add test coverage percentage badge

## 0.0.3 (3/13/2025)

- Fixed known bugs

## 0.0.2 (3/7/2025)

- Use [shields](https://img.shields.io) to build badges

## 0.0.1 (3/7/2025)

- Removed the `isAtomics` method. Because `Atomics` is just a collection of methods, there are no instances. The same goes for `Math, JSON, Reflect, Intl`
- Removed the `isWindow` method.
- The `typeOf` method has been optimized to detect `asyncFunction`, `generator`, and `generatorFunction` more accurately

## 0.0.0 (3/4/2025 )

- init
