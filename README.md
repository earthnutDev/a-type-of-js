# a-type-of-js

[![🇨🇳 中文](<https://img.shields.io/badge/🇨🇳-中_%20_文-rgb(36,36,36)>)](https://github.com/earthnutDev/a-type-of-js/blob/main/README-zh.md) ![🌍 English](<https://img.shields.io/badge/🌍-English-rgb(125, 255, 125)>) [![👀 change log](<https://img.shields.io/badge/👀-change_%20_log-rgb(0,125,206)>)](https://github.com/earthnutDev/a-type-of-js/blob/main/CHANGELOG-en.md) [![submit 🙋‍♂️ issue](<https://img.shields.io/badge/☣️-submit_%20_issue-rgb(255,0,63)>)](https://github.com/earthnutDev/a-type-of-js/issues)

A simple type determination tool

## use

```ts
import { typeOf } from 'a-type-of-js';

const num = 1;

if (typeOf(num) === 'number') {
  console.log('num is number');
} else {
  console.log('num is not number');
}
```

Use the is type judgment in 'ts' for type-safe contraction

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

Documents provide type detection:

- `isString` strings, `String` objects
- `isNumber` number, `Number` object
- `isBoolean` boolean, `Boolean` object constructed
- `isNull` null
- `isUndefined` undefined
- `isNaN` `NaN` (`NaN` is a special value `NaN !== NaN` even if `typeof NaN` returns `number`)
- `isFunction` function
- `isArray` array, `Array` object
- `isSymbol` symbol
- `isBigInt` is a large integer
- `isPlainObject` object (normal object, not other built-in object types)
- `isPromise` Promise
- `isAsyncFunction` is an asynchronous function
- `isDate` time
- `isMap` Map
- `isSet` Set
- `isWeakMap` WeakMap
- `isWeakSet` WeakSet
- `isGenerator` generator
- `isGeneratorFunction` generator function
- `isBigInt64Array` BigInt64Array
- `isBigUint64Array` BigUint64Array
- `isDataView` DataView
- `isArrayBuffer` ArrayBuffer
- `isRegExp` regex, `RegExp` object-built regex
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
- `isError` error
- `isEvalError` eval error
- `isRangeError` range error
- `isReferenceError` reference error
- `isSyntaxError` syntax error
- `isTypeError` type error
- `isURIError` uri error
- `isAggregateError` aggregate error

## Documentation

see [https://earthnut.dev/a-type-of-js/](https://earthnut.dev/a-type-of-js/)
