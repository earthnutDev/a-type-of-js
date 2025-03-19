/**************************************
 * 数据类型
 *
 * {@link typeOf} 检测出来的数据类型
 *
 *  - number 数组类型 {@link Number}
 *  - function 函数（一种特殊的对象） {@link Function}
 *  - string  字符串 {@link String}
 *  - array 数组（一种有序的对象） {@link Array}
 *  - boolean  布尔值 {@link Boolean} ，仅有  true 和 false 两种能值
 *  - undefined 值未定义或未赋值 {@link undefined}
 *  - object 对象 {@link Object}、{@link Proxy}
 *  - null  指向一个特殊的空对象  null
 *  - regexp 正则 {@link RegExp}
 *  - set 值的集合 {@link Set}
 *  - map 保存键值对，且有序的  {@link Map}
 *  -  date  时间  {@link Date}
 *  - bigint 内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数 {@link BigInt}
 *  - bigint64array  64 位有符号整数组成的数组 {@link BigInt64Array}
 *  - biguint64array  64 位无符号整数组成的数组 {@link BigInt64Array}
 *  - symbol
 * - int8array 二进制补码 8 位有符号整数的数组  {@link Int8Array }
 *  - uint8array 8 位无符号整型数组  {@link Uint8Array}
 *  - int16array 二进制补码 16 位有符号整数的数组   {@link Int16Array}
 *  - uint16array 16 位无符号整数 {@link Uint16Array}
 *  - int32array二进制补码 32 位有符号整数的数组   {@link Int32Array}
 *  - uint32array 32 位无符号整型数组  {@link Uint32Array}
 *  - float32array  32 位的浮点数型数组   {@link Float32Array}
 *  - float64array  64 位的浮点数型数组   {@link Float64Array}
 *  - uint8clampedarray  8 位无符号整型固定数组 {@link Uint8ClampedArray}
 *  - sharedarraybuffer 可以用来在共享内存上创建视图的二进制数据缓冲区，目前，浏览器不支持 {@link SharedArrayBuffer}
 *  - promise 异步操作最终的完成（或失败）以及其结果值 {@link Promise}
 *  - dataview 从二进制 ArrayBuffer 对象中读写多种数值类型的底层接口  {@link DataView}
 *  - arraybuffer 通用的原始二进制数据缓冲区  {@link ArrayBuffer}
 *  - weakmap 弱映射 {@link WeakMap}
 *  - weakset 弱集合 {@link WeakSet}
 *  - generatorfunction 生成器函数 {@link GeneratorFunction}
 *  - generator 生成器 {@link Generator}
 *  - aggregateerror 聚合错误 {@link AggregateError}
 *  - intl.collator 语言环境排序对象 {@link Intl.Collator}
 *  - intl.datetimeformat 日期格式化对象 {@link Intl.DateTimeFormat}
 *  - intl.displaynames 语言环境显示名称对象 {@link Intl.DisplayNames}
 *  - intl.durationformat 语言环境持续时间格式化对象 {@link Intl.DurationFormat}
 *  - intl.listformat 语言环境列表格式化对象 {@link Intl.ListFormat}
 *  - intl.locale 语言环境对象 {@link Intl.Locale}
 *  - intl.numberformat 数字格式化对象 {@link Intl.NumberFormat}
 *  - intl.pluralrules 多数规则对象 {@link Intl.PluralRules}
 *  - intl.relativetimeformat 语言环境相对时间格式化对象 {@link Intl.RelativeTimeFormat}
 *  - intl.segmenter 语言环境分段器对象 {@link Intl.Segmenter}
 *  - error 错误类型 {@link Error}、 {@link URIError}、{@link TypeError}、{@link SyntaxError}、${@link ReferenceError}、{@link RangeError}、{@link EvalError}、{@link AggregateError}
 *  - evalerror eval 错误 {@link EvalError} ，该错误不由 javaScript 抛出
 *  - rangeerror 错误类型，表示参数超出范围 {@link RangeError}
 *  - referenceerror 引用错误 {@link ReferenceError}
 *  - syntaxerror 语法错误 {@link SyntaxError}
 *  - typeerror 类型错误 {@link TypeError}
 *  - urierror uri 错误 {@link URIError}
 *  - asyncfunction 异步函数 {@link AsyncFunction}
 *  - internalerror 内部错误 {@link InternalError} (该错误是非标准错误)
 *
 *
 *  _NaN 即便意思非数字的值，但依旧是 {@link Number} 类型_
 *
 **************************************/
export type Typeof =
  | 'number'
  | 'function'
  | 'string'
  | 'boolean'
  | 'object'
  | 'undefined'
  | 'null'
  | 'array'
  | 'date'
  | 'set'
  | 'map'
  | 'symbol'
  | 'bigint'
  | 'bigint64array'
  | 'biguint64array'
  | 'regexp'
  | 'int8array'
  | 'uint8array'
  | 'int16array'
  | 'uint16array'
  | 'float32array'
  | 'float64array'
  | 'int32array'
  | 'uint32array'
  | 'weakmap'
  | 'weakset'
  | 'generatorfunction'
  | 'generator'
  | 'error'
  | 'evalerror'
  | 'rangeerror'
  | 'referenceerror'
  | 'syntaxerror'
  | 'typeerror'
  | 'urierror'
  | 'aggregateerror'
  // 该错误非标准，且 ts 不存在
  // | 'internalerror'
  | 'uint8clampedarray'
  | 'sharedarraybuffer'
  | 'promise'
  | 'asyncfunction'
  | 'dataview'
  | 'arraybuffer'
  | 'audiobuffer'
  | 'intl.collator'
  | 'intl.datetimeformat'
  | 'intl.displaynames'
  /// 该规则较新，暂不适用
  // | 'intl.durationformat'
  | 'intl.listformat'
  | 'intl.locale'
  | 'intl.numberformat'
  | 'intl.pluralrules'
  | 'intl.relativetimeformat'
  | 'intl.segmenter';
