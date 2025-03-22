/**
 * Type-checking utilities for JavaScript native string types.
 *
 * @packageDocumentation
 * @module @a-type-of-js/string
 * @license MIT
 */
import { typeOf } from './typeOf';

/**
 *
 * 当前数据类型是否为 string
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `string`, narrowing the type to `string` in TypeScript.
 * @example
 *
 * ```ts
 * import { isString } from 'a-type-of-js';
 *
 * console.log(isString('hello')); // true
 *
 * console.log(isString(123)); // false (number is not a string)
 * console.log(isString(true)); // false (boolean is not a string)
 * console.log(isString(null)); // false (null is not a string)
 * ```
 */
export function isString(input: unknown): input is string {
  return typeOf(input) === 'string';
}

/**
 *
 * Detects whether the current  `input` is an `RegExp`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `RegExp`, narrowing the type to `RegExp` in TypeScript.
 * @example
 *
 * ```ts
 * import { isRegExp } from 'a-type-of-js';
 *
 * console.log(isRegExp(/abc/)); // true
 * console.log(isRegExp(new RegExp('abc'))); // true
 *
 * console.log(isRegExp(123)); // false (number is not a RegExp)
 * console.log(isRegExp('abc')); // false (string is not a RegExp)
 * console.log(isRegExp(null)); // false (null is not a RegExp)
 * ```
 *
 */
export function isRegExp(input: unknown): input is RegExp {
  return typeOf(input) === 'regexp';
}
