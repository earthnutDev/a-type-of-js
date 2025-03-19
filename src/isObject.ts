import { typeOf } from './typeOf';

/**************************************
 *
 * 当前数据是否为普通的对象
 *
 * @param measuredData 任意数据
 * @return {*}  返回一个布尔值
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isPlainObject } from 'a-type-of-js';
 *
 * console.log(isPlainObject({})); // true
 * console.log(isPlainObject([])); // false
 * console.log(isPlainObject(new Date())); // false
 * console.log(isPlainObject(new Map())); // false
 * ```
 **************************************/
export function isPlainObject<T extends object>(
  measuredData: unknown,
): measuredData is T {
  return typeOf(measuredData) === 'object';
}

/**************************************
 *
 * 当前数据是否为时间
 *
 * @param measuredData 任意数据
 * @return {*}  返回一个布尔值
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isDate } from 'a-type-of-js';
 *
 * console.log(isDate(new Date())); // true
 * console.log(isDate(new Date(0))); // true
 * console.log(isDate(new Date('2025-03-19'))); // true
 * console.log(isDate(new Date(NaN))); // true
 * console.log(isDate(new Date(undefined))); // true
 * console.log(isDate(new Date(null))); // true
 * ```
 *
 *
 **************************************/
export function isDate(measuredData: unknown): measuredData is Date {
  return typeOf(measuredData) === 'date';
}

/**************************************
 *
 * 当前数据是否为 DataView
 *
 * @param measuredData 任意数据
 * @return {*}  返回一个布尔值
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isDataView } from 'a-type-of-js';
 *
 * console.log(isDataView(new DataView(new ArrayBuffer(8)))); // true
 * console.log(isDataView(new ArrayBuffer(8))); // false
 * ```
 **************************************/
export function isDataView<T extends ArrayBufferLike = ArrayBufferLike>(
  measuredData: unknown,
): measuredData is DataView<T> {
  return typeOf(measuredData) === 'dataview';
}

/**************************************
 *
 * 当前数据是否为 Map
 *
 * @param measuredData 任意数据
 * @return {*}  返回一个布尔值
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isMap } from 'a-type-of-js';
 *
 * console.log(isMap(new Map())); // true
 * console.log(isMap(new WeakMap())); // false
 * console.log(isMap(new Set())); // false
 * console.log(isMap(new WeakSet())); // false
 * console.log(isMap(new Array())); // false
 * ```
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
 * @param measuredData 任意数据
 * @return {*}  返回一个布尔值
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isWeakMap } from 'a-type-of-js';
 *
 * console.log(isWeakMap(new WeakMap())); // true
 * console.log(isWeakMap(new Map())); // false
 * console.log(isWeakMap(new Set())); // false
 * console.log(isWeakMap(new WeakSet())); // false
 * console.log(isWeakMap(new Array())); // false
 * ```
 **************************************/
export function isWeakMap(
  measuredData: unknown,
): measuredData is WeakMap<object, unknown> {
  return typeOf(measuredData) === 'weakmap';
}
