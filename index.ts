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
 *  - window  全局对象 {@link Window}、{@link globalThis}
 *  - dataview 从二进制 ArrayBuffer 对象中读写多种数值类型的底层接口  {@link DataView}
 * - atomics 命名空间对象包含对 SharedArrayBuffer 和 ArrayBuffer 对象执行原子操作的静态方法 {@link Atomics}
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
 *  - internalerror 内部错误 {@link InternalError}
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
  | 'internalerror'
  | 'uint8clampedarray'
  | 'sharedarraybuffer'
  | 'promise'
  | 'asyncfunction'
  | 'window'
  | 'dataview'
  | 'atomics'
  | 'arraybuffer'
  | 'audiobuffer'
  | 'intl.collator'
  | 'intl.datetimeformat'
  | 'intl.displaynames'
  | 'intl.durationformat'
  | 'intl.listformat'
  | 'intl.locale'
  | 'intl.numberformat'
  | 'intl.pluralrules'
  | 'intl.relativetimeformat'
  | 'intl.segmenter';

/**************************************
 *
 *
 * 获取数据的类型
 *
 * @param {*} o 任意数据
 * @return {*}  返回是一个字符串 {@link String}，包含于   @see  {@link TypeOf}
 *
 **************************************/
export function typeOf(measuredData: unknown): Typeof {
  /**************************
   * 使用 typeof  判断数据类型
   **************************/
  const _t:
    | 'string'
    | 'number'
    | 'bigint'
    | 'boolean'
    | 'symbol'
    | 'undefined'
    | 'object'
    | 'function' = typeof measuredData;

  return ((_t !== 'object' && _t) ||
    (measuredData === null && 'null') ||
    Reflect.apply(Object.prototype.toString, measuredData, [])
      .replace(/^.*\s(.*)]$/, '$1')
      .toLowerCase()) as Typeof;
}

/**************************************
 *
 * 当前数据类型是否为 string
 *
 **************************************/
export function isString(measuredData: unknown): measuredData is string {
  return typeof measuredData === 'string';
}

/**************************************
 *
 * 当前数据类型是否为 number
 *
 **************************************/
export function isNumber(measuredData: unknown): measuredData is number {
  return typeof measuredData === 'number';
}

/**************************************
 *
 * 当前数据类型是否为 boolean
 *
 **************************************/

export function isBoolean(measuredData: unknown): measuredData is boolean {
  return typeof measuredData === 'boolean';
}

/**************************************
 *
 * 当前数据是否为 null
 *
 **************************************/

export function isNull(measuredData: unknown): measuredData is null {
  return measuredData === null;
}

/**************************************
 *
 * 当前数据是否为 undefined
 *
 **************************************/
export function isUndefined(measuredData: unknown): measuredData is undefined {
  return measuredData === undefined;
}

/**************************************
 *
 * 当前数据是否为 NaN
 *
 **************************************/
export function isNaN(measuredData: unknown): measuredData is number {
  return Number.isNaN(measuredData);
}

/**************************************
 *
 * 当前数据是否为函数
 *
 **************************************/
export function isFunction<T extends () => void>(
  measuredData: unknown,
): measuredData is T {
  return typeof measuredData === 'function';
}

/**************************************
 *
 * 当前数据是否为数组
 *
 **************************************/
export function isArray(measuredData: unknown): measuredData is Array<unknown> {
  return Array.isArray(measuredData);
}

/**************************************
 *
 * 当前数据是否为 Symbol
 *
 **************************************/
export function isSymbol(measuredData: unknown): measuredData is symbol {
  return typeof measuredData === 'symbol';
}

/**************************************
 *
 * 当前数据是否为 BigInt
 *
 **************************************/
export function isBigInt(measuredData: unknown): measuredData is bigint {
  return typeof measuredData === 'bigint';
}

/**************************************
 *
 * 当前数据是否为普通的对象
 *
 **************************************/
export function isPlainObject<T extends object>(
  measuredData: unknown,
): measuredData is T {
  return (
    typeOf(measuredData) === 'object' &&
    measuredData !== null &&
    !Array.isArray(measuredData)
  );
}

/**************************************
 *
 * 当前数据是否为 Promise
 *
 **************************************/
export function isPromise<T>(
  measuredData: unknown,
): measuredData is Promise<T> {
  return typeOf(measuredData) === 'promise';
}

export function isAsyncFunction<T extends () => void>(
  measuredData: unknown,
): measuredData is () => Promise<T> {
  return typeOf(measuredData) === 'asyncfunction';
}

/**************************************
 *
 * 当前数据是否为时间
 *
 **************************************/
export function isDate(measuredData: unknown): measuredData is Date {
  return typeOf(measuredData) === 'date';
}

/**************************************
 *
 * 当前数据是否为 Set
 *
 **************************************/
export function isSet<T = unknown>(
  measuredData: unknown,
): measuredData is Set<T> {
  return typeOf(measuredData) === 'set';
}
/**************************************
 *
 * 当前数据是否为 Map
 *
 **************************************/
export function isMap<K extends string, V = unknown>(
  measuredData: unknown,
): measuredData is Map<K, V> {
  return typeOf(measuredData) === 'map';
}

/**************************************
 *
 * 当前数据是否为 WeakMap
 *
 **************************************/
export function isWeakMap(
  measuredData: unknown,
): measuredData is WeakMap<object, unknown> {
  return typeOf(measuredData) === 'weakmap';
}
/**************************************
 *
 * 当前数据是否为 WeakSet
 *
 **************************************/

export function isWeakSet<T extends WeakKey>(
  measuredData: unknown,
): measuredData is WeakSet<T> {
  return typeOf(measuredData) === 'weakset';
}

/**************************************
 *
 * 当前数据是否为 GeneratorFunction
 *
 **************************************/
export function isGeneratorFunction(
  measuredData: unknown,
): measuredData is GeneratorFunction {
  return typeOf(measuredData) === 'generatorfunction';
}

/**************************************
 *
 * 当前数据是否为 Generator
 *
 **************************************/
export function isGenerator(measuredData: unknown): measuredData is Generator {
  return typeOf(measuredData) === 'generator';
}

/**************************************
 *
 * 当前数据是否为 Bigint64Array
 *
 **************************************/
export function isBigInt64Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is BigInt64Array<TArrayBuffer> {
  return typeOf(measuredData) === 'bigint64array';
}

/**************************************
 *
 * 当前数据是否为 BigUint64Array
 *
 **************************************/
export function isBigUint64Array<T extends ArrayBufferLike = ArrayBufferLike>(
  measuredData: unknown,
): measuredData is BigUint64Array<T> {
  return typeOf(measuredData) === 'biguint64array';
}

/**************************************
 *
 * 当前数据是否为 DataView
 *
 **************************************/
export function isDataView<T extends ArrayBufferLike = ArrayBufferLike>(
  measuredData: unknown,
): measuredData is DataView<T> {
  return typeOf(measuredData) === 'dataview';
}
/**************************************
 *
 * 当前数据是否为 ArrayBuffer
 *
 **************************************/

export function isArrayBuffer<T extends ArrayBufferLike = ArrayBufferLike>(
  measuredData: unknown,
): measuredData is T {
  return typeOf(measuredData) === 'arraybuffer';
}

/**************************************
 *
 * 当前数据是否为 RegExp
 *
 **************************************/
export function isRegExp(measuredData: unknown): measuredData is RegExp {
  return typeOf(measuredData) === 'regexp';
}
/**************************************
 *
 * 当前数据是否为 window
 *
 *
 **************************************/
export function isWindow(measuredData: unknown): measuredData is Window {
  return typeOf(measuredData) === 'window';
}

/**************************************
 *
 * 当前数据是否为 sharedArrayBuffer
 *
 **************************************/
export function isSharedArrayBuffer(
  measuredData: unknown,
): measuredData is SharedArrayBuffer {
  return typeOf(measuredData) === 'sharedarraybuffer';
}

/**************************************
 *
 * 当前数据是否为 uint8ClampedArray
 *
 **************************************/
export function isUint8ClampedArray<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Uint8ClampedArray<TArrayBuffer> {
  return typeOf(measuredData) === 'uint8clampedarray';
}

/**************************************
 *
 * 当前数据是否为 int8Array
 *
 **************************************/
export function isInt8Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Int8Array<TArrayBuffer> {
  return typeOf(measuredData) === 'int8array';
}

/**************************************
 *
 * 当前数据是否为 uint8Array
 *
 **************************************/
export function isUint8Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Uint8Array<TArrayBuffer> {
  return typeOf(measuredData) === 'uint8array';
}

/**************************************
 *
 * 当前数据是否为 int16Array
 *
 **************************************/
export function isInt16Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Int16Array<TArrayBuffer> {
  return typeOf(measuredData) === 'int16array';
}
/**************************************
 *
 * 当前数据是否为 uint16Array
 *
 **************************************/
export function isUint16Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Uint16Array<TArrayBuffer> {
  return typeOf(measuredData) === 'uint16array';
}

/**************************************
 *
 * 当前数据是否为 uint32Array
 *
 **************************************/
export function isUint32Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Uint32Array<TArrayBuffer> {
  return typeOf(measuredData) === 'uint32array';
}

/**************************************
 *
 * 当前数据是否为 float32Array
 *
 **************************************/
export function isFloat32Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Float32Array<TArrayBuffer> {
  return typeOf(measuredData) === 'float32array';
}

/**************************************
 *
 * 当前数据是否为 float64Array
 *
 **************************************/
export function isFloat64Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Float64Array<TArrayBuffer> {
  return typeOf(measuredData) === 'float64array';
}

/**************************************
 *
 * 当前数据是否为 atomics
 *
 **************************************/
export function isAtomics(measuredData: unknown): measuredData is Atomics {
  return typeOf(measuredData) === 'atomics';
}

/**************************************
 *
 * 当前数据是否为 Intl.Collator
 *
 **************************************/

export function isIntlCollator(
  measuredData: unknown,
): measuredData is Intl.Collator {
  return typeOf(measuredData) === 'intl.collator';
}

/**************************************
 *
 * 当前数据是否为 Intl.DateTimeFormat
 *
 **************************************/
export function isIntlDateTimeFormat(
  measuredData: unknown,
): measuredData is Intl.DateTimeFormat {
  return typeOf(measuredData) === 'intl.datetimeformat';
}

/**************************************
 *
 * 当前数据是否为 Intl.DisplayNames
 *
 **************************************/
export function isIntlDisplayNames(
  measuredData: unknown,
): measuredData is Intl.DisplayNames {
  return typeOf(measuredData) === 'intl.displaynames';
}
/**************************************
 *
 * 当前数据是否为 Intl.DurationFormat
 *
 **************************************/
// export function isIntlDurationFormat(
//   measuredData: unknown,
// ): measuredData is Intl.DurationFormat {
//   return typeOf(measuredData) === 'intl.durationformat';
// }
/**************************************
 *
 * 当前数据是否为 Intl.ListFormat
 *
 **************************************/
export function isIntlListFormat(
  measuredData: unknown,
): measuredData is Intl.ListFormat {
  return typeOf(measuredData) === 'intl.listformat';
}

/**************************************
 *
 * 当前数据是否为 Intl.Locale
 *
 **************************************/
export function isIntlLocale(
  measuredData: unknown,
): measuredData is Intl.Locale {
  return typeOf(measuredData) === 'intl.locale';
}
/**************************************
 *
 * 当前数据是否为 Intl.NumberFormat
 *
 **************************************/
export function isIntlNumberFormat(
  measuredData: unknown,
): measuredData is Intl.NumberFormat {
  return typeOf(measuredData) === 'intl.numberformat';
}
/**************************************
 *
 * 当前数据是否为 Error
 *
 **************************************/
export function isError(measuredData: unknown): measuredData is Error {
  return typeOf(measuredData) === 'error';
}
/**************************************
 *
 * 当前数据是否为 EvalError
 *
 **************************************/
export function isEvalError(measuredData: unknown): measuredData is EvalError {
  return typeOf(measuredData) === 'evalerror';
}

/**************************************
 *
 * 当前数据是否为 RangeError
 *
 **************************************/
export function isRangeError(
  measuredData: unknown,
): measuredData is RangeError {
  return typeOf(measuredData) === 'rangeerror';
}

/**************************************
 *
 * 当前数据是否为 ReferenceError
 *
 **************************************/
export function isReferenceError(
  measuredData: unknown,
): measuredData is ReferenceError {
  return typeOf(measuredData) === 'referenceerror';
}

/**************************************
 *
 * 当前数据是否为 SyntaxError
 *
 **************************************/
export function isSyntaxError(
  measuredData: unknown,
): measuredData is SyntaxError {
  return typeOf(measuredData) === 'syntaxerror';
}

/**************************************
 *
 * 当前数据是否为 TypeError
 *
 **************************************/
export function isTypeError(measuredData: unknown): measuredData is TypeError {
  return typeOf(measuredData) === 'typeerror';
}

/**************************************
 *
 * 当前数据是否为 URIError
 *
 **************************************/
export function isURIError(measuredData: unknown): measuredData is URIError {
  return typeOf(measuredData) === 'urierror';
}

/**************************************
 *
 * 当前数据是否为 AggregateError
 *
 **************************************/
export function isAggregateError(
  measuredData: unknown,
): measuredData is AggregateError {
  return typeOf(measuredData) === 'aggregateerror';
}
