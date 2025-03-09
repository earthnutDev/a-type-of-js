# a-type-of-js

![version](<https://img.shields.io/npm/v/a-type-of-js.svg?logo=npm&logoColor=rgb(0,0,0)&label=版本号&labelColor=rgb(73,73,228)&color=rgb(0,0,0)>) ![NPM Last Update](<https://img.shields.io/npm/last-update/a-type-of-js?logo=npm&label=版本最后更新&labelColor=rgb(255,36,63)&color=rgb(0,0,0)>) ![📦 size](<https://img.shields.io/bundlephobia/minzip/a-type-of-js.svg?logo=npm&label=压缩包大小&labelColor=rgb(201,158,140)&color=rgb(0,0,0)>) ![downloads](<https://img.shields.io/npm/dm/a-type-of-js.svg?logo=npm&logoColor=rgb(0,0,0)&label=月下载量&labelColor=rgb(194,112,210)&color=rgb(0,0,0)>) ![downloads](<https://img.shields.io/npm/dt/a-type-of-js.svg?logo=npm&label=总下载量&labelColor=rgb(107,187,124)&color=rgb(0,0,0)>)

![last commit](<https://img.shields.io/github/last-commit/earthnutDev/a-type-of-js.svg?logo=github&logoColor=rgb(0,0,0)&label=最后推码&labelColor=rgb(255,165,0)&color=rgb(0,0,0)>) ![GitHub commit activity](<https://img.shields.io/github/commit-activity/y/earthnutDev/a-type-of-js.svg?logo=github&label=推码数&labelColor=rgb(128,0,128)&color=rgb(0,0,0)>)

---

![中文 🇨🇳](<https://img.shields.io/badge/🇨🇳-中_%20_文-rgb(0,0,0)?style=social>) [![English 🌍](<https://img.shields.io/badge/🌍-English-rgb(0,0,0)>)](https://github.com/earthnutDev/a-type-of-js/blob/main/README.md) [![查看 📔 日志](<https://img.shields.io/badge/👀-日_%20_志-rgb(0,125,206)>)](https://github.com/earthnutDev/a-type-of-js/blob/main/CHANGELOG.md) [![bug 🙋‍♂️ 提交](<https://img.shields.io/badge/☣️-bug_%20_提交-rgb(255,0,63)>)](https://github.com/earthnutDev/a-type-of-js/issues)

---

一个简单的类型判断工具

## 使用

```ts
import { typeOf } from 'a-type-of-js';

const num = 1;

if (typeOf(num) === 'number') {
  console.log('num is number');
} else {
  console.log('num is not number');
}
```

使用 `ts` 中的 is 类型判断来进行类型安全收缩

```ts
import { isString, isNumber } from 'a-type-of-js';

function doSomething(value: string | number) {
  if (isString(value)) {
    value.toLocaleUpperCase();
  } else if (isNumber(value)) {
    value.toFixed(2);
  }
}

doSomething('hello'); // HELLO
doSomething(1); // 1.00
```

文档提供类型检测：

- `isString` 字符串、`String` 对象构建的字符串
- `isNumber` 数字、`Number` 对象构建的数字
- `isBoolean` 布尔值、`Boolean` 对象构建的布尔值
- `isNull` null
- `isUndefined` undefined
- `isNaN` `NaN`（`NaN` 是一个特殊的数值 `NaN !== NaN` 即便 `typeof NaN` 返回的是 `number`）
- `isFunction` 函数
- `isArray` 数组、`Array` 对象构建的数组
- `isSymbol` symbol
- `isBigInt` 大整数
- `isPlainObject` 对象（普通对象，非其他内置对象类型）
- `isPromise` Promise
- `isAsyncFunction` 异步函数
- `isDate` 时间
- `isMap` Map
- `isSet` Set
- `isWeakMap` WeakMap
- `isWeakSet` WeakSet
- `isGenerator` 生成器
- `isGeneratorFunction` 生成器函数
- `isBigInt64Array` BigInt64Array
- `isBigUint64Array` BigUint64Array
- `isDataView` DataView
- `isArrayBuffer` ArrayBuffer
- `isRegExp` 正则、`RegExp` 对象构建的正则
- `isSharedArrayBuffer` SharedArrayBuffer
- `isUint8ClampedArray` Uint8ClampedArray
- `isInt8Array` Int8Array
- `isUint8Array` Uint8Array
- `isTypedArray` TypedArray
- `isInt16Array` Int16Array
- `isUint16Array` Uint16Array
- `isInt32Array` Int32Array
- `isUint32Array` Uint32Array
- `isFloat32Array` Float32Array
- `isFloat64Array` Float64Array
- `isIntlCollator` Intl.Collator
- `isIntlDateTimeFormat` Intl.DateTimeFormat
- `isIntlDisplayNames` Intl.DisplayNames
- `isIntlListFormat` Intl.ListFormat
- `isIntlLocale` Intl.Locale
- `isIntlNumberFormat` Intl.NumberFormat
- `isError` 错误
- `isEvalError` eval 错误
- `isRangeError` range 错误
- `isReferenceError` reference 错误
- `isSyntaxError` syntax 错误
- `isTypeError` type 错误
- `isURIError` uri 错误
- `isAggregateError` aggregate 错误

## 文档地址

参看 [https://earthnut.dev/a-type-of-js/](https://earthnut.dev/a-type-of-js/)
