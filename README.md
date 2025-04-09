# a-type-of-js

[![version](<https://img.shields.io/npm/v/a-type-of-js.svg?logo=npm&logoColor=rgb(0,0,0)&label=版本号&labelColor=rgb(73,73,228)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/a-type-of-js) [![Coverage Status](<https://img.shields.io/coverallsCoverage/github/earthnutDev/a-type-of-js?logo=coveralls&label=coveralls&labelColor=rgb(12, 244, 39)&color=rgb(0,0,0)>)](https://coveralls.io/github/earthnutDev/a-type-of-js?branch=main) [![codecov](<https://img.shields.io/codecov/c/github/earthnutDev/a-type-of-js/main?logo=codecov&label=codecov&labelColor=rgb(7, 245, 245)&color=rgb(0,0,0)>)](https://codecov.io/gh/earthnutDev/a-type-of-js) [![bug 🙋‍♂️ 提交](<https://img.shields.io/badge/☣️-bug_%20_提交-rgb(255,0,63)>)](https://github.com/earthnutDev/a-type-of-js/issues)

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

### 使用 `ts` 中的 is 类型判断来进行类型安全收缩

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

### 向 `as` 说 'no'

en，且当是脱裤子放屁吧

```ts
import { isType } from 'a-type-of-js';

interface Person {
    name: string;
    age: number;
}


function doSomething(value: string | number | boolean | ) {

    /// use judgment as a type judgment
    if (isType<Person>(value, () => (value && value.name === 'earthnut' && value.age === 18))) {
      console.log('value is Person');
      return;
    }

    /// as tisType
    if (isType<string>(value)) {
      value.toLocaleUpperCase();
      return;
    }

    /// use judgment

    if (isType<boolean>(value, Boolean(value) === true )) {
      console.log('value is true');
      return;
    }
}
```

### 文档提供类型检测

- `isString` 字符串、`String` 对象构建的字符串
- `isNumber` 数字、`Number` 对象构建的数字
- `isBoolean` 布尔值、`Boolean` 对象构建的布尔值
- `isNull` null
- `isUndefined` undefined
- `isNaN` `NaN`（`NaN` 是一个特殊的数值 `NaN !== NaN` 即便 `typeof NaN` 返回的是 `number`）
- `isFunction` 函数
- `isArray` 数组、`Array` 对象构建的数组
- `isEmptyString` 空字符串
- `isBusinessEmptyString` 空字符串（去除首尾空格）
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
