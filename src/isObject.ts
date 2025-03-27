/**
 * 检测 Javascript 数据类型工具之: object
 *
 * @packageDocumentation
 * @module @a-type-of-js/object
 * @license MIT
 */
import { typeOf } from './typeOf';

/**
 *
 * 检测 `input` 是否是  类型`plain object`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `object` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isPlainObject } from 'a-type-of-js';
 *
 * console.log(isPlainObject({})); // true
 *
 * console.log(isPlainObject([])); // false ( Array is not an plain object )
 * console.log(isPlainObject(new Date())); // false ( Date is not an plain object )
 * console.log(isPlainObject(new Map())); // false ( Map is not an plain object )
 * ```
 */
export function isPlainObject<T extends object>(input: unknown): input is T {
  return typeOf(input) === 'object';
}

/**
 *
 * 检测 data 是否是  类型{@link Date}
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Date` ，且在 Typescript 中进行类型收缩
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
 *
 * console.log(isDate(1)); // false ( Number 不是 Date )
 * console.log(isDate('1')); // false ( String 不是 Date )
 * ```
 *
 *
 */
export function isDate(input: unknown): input is Date {
  return typeOf(input) === 'date';
}

/**
 *
 * 检测 `input` 是否是  类型`DataView`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `DataView` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isDataView } from 'a-type-of-js';
 *
 * console.log(isDataView(new DataView(new ArrayBuffer(8)))); // true
 *
 * console.log(isDataView(new ArrayBuffer(8))); // false (ArrayBuffer 不是 DataView)
 * ```
 */
export function isDataView<T extends ArrayBufferLike = ArrayBufferLike>(
  input: unknown,
): input is DataView<T> {
  return typeOf(input) === 'dataview';
}

/**
 *
 * 检测 `input` 是否是  类型`Map`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Map` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isMap } from 'a-type-of-js';
 *
 * console.log(isMap(new Map())); // true
 *
 * console.log(isMap(new WeakMap())); // false (WeakMap 不是 Map)
 * console.log(isMap(new Set())); // false (Set 不是 Map)
 * console.log(isMap(new WeakSet())); // false (WeakSet 不是 Map)
 * console.log(isMap(new Array())); // false (Array 不是 Map)
 * ```
 */
export function isMap<K extends string, V = unknown>(
  input: unknown,
): input is Map<K, V> {
  return typeOf(input) === 'map';
}

/**
 *
 * 检测 `input` 是否是  类型`WeakMap`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `WeakMap` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isWeakMap } from 'a-type-of-js';
 *
 * console.log(isWeakMap(new WeakMap())); // true
 *
 * console.log(isWeakMap(new Map())); // false (Map is not WeakMap)
 * console.log(isWeakMap(new Set())); // false (Set is not WeakMap)
 * console.log(isWeakMap(new WeakSet())); // false (WeakSet is not WeakMap)
 * console.log(isWeakMap(new Array())); // false (Array is not WeakMap)
 * ```
 */
export function isWeakMap(input: unknown): input is WeakMap<object, unknown> {
  return typeOf(input) === 'weakmap';
}
