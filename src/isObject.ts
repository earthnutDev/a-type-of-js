/**
 * Type-checking utilities for JavaScript native object types.
 *
 * @packageDocumentation
 * @module @a-type-of-js/object
 * @license MIT
 */
import { typeOf } from './typeOf';

/**
 *
 * Detects whether the current  `input` is an `plain object`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `object`, narrowing the type to `object` in TypeScript.
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
 * Detects whether the current data is an {@link Date}
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Date`, narrowing the type to `Date` in TypeScript.
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
 * console.log(isDate(1)); // false ( Number is not a Date )
 * console.log(isDate('1')); // false ( String is not a Date )
 * ```
 *
 *
 */
export function isDate(input: unknown): input is Date {
  return typeOf(input) === 'date';
}

/**
 *
 * Detects whether the current  `input` is an `DataView`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `DataView`, narrowing the type to `DataView` in TypeScript.
 * @example
 *
 * ```ts
 * import { isDataView } from 'a-type-of-js';
 *
 * console.log(isDataView(new DataView(new ArrayBuffer(8)))); // true
 *
 * console.log(isDataView(new ArrayBuffer(8))); // false (ArrayBuffer is not a DataView)
 * ```
 */
export function isDataView<T extends ArrayBufferLike = ArrayBufferLike>(
  input: unknown,
): input is DataView<T> {
  return typeOf(input) === 'dataview';
}

/**
 *
 * Detects whether the current  `input` is an `Map`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Map`, narrowing the type to `Map` in TypeScript.
 * @example
 *
 * ```ts
 * import { isMap } from 'a-type-of-js';
 *
 * console.log(isMap(new Map())); // true
 *
 * console.log(isMap(new WeakMap())); // false (WeakMap is not a Map)
 * console.log(isMap(new Set())); // false (Set is not a Map)
 * console.log(isMap(new WeakSet())); // false (WeakSet is not a Map)
 * console.log(isMap(new Array())); // false (Array is not a Map)
 * ```
 */
export function isMap<K extends string, V = unknown>(
  input: unknown,
): input is Map<K, V> {
  return typeOf(input) === 'map';
}

/**
 *
 * Detects whether the current  `input` is an `WeakMap`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `WeakMap`, narrowing the type to `WeakMap` in TypeScript.
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
