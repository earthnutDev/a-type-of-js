/**
 * 检测 Javascript 数据类型工具之: string
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
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `string` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isString } from 'a-type-of-js';
 *
 * console.log(isString('hello')); // true
 *
 * console.log(isString(123)); // false (number 不是 string)
 * console.log(isString(true)); // false (boolean 不是 string)
 * console.log(isString(null)); // false (null 不是 string)
 * ```
 */
export function isString(input: unknown): input is string {
  return typeOf(input) === 'string';
}

/**
 *
 * 检测 `input` 是否是  类型`RegExp`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `RegExp` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isRegExp } from 'a-type-of-js';
 *
 * console.log(isRegExp(/abc/)); // true
 * console.log(isRegExp(new RegExp('abc'))); // true
 *
 * console.log(isRegExp(123)); // false (number 不是 RegExp)
 * console.log(isRegExp('abc')); // false (string 不是 RegExp)
 * console.log(isRegExp(null)); // false (null 不是 RegExp)
 * ```
 *
 */
export function isRegExp(input: unknown): input is RegExp {
  return typeOf(input) === 'regexp';
}
