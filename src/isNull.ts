/**
 * 检测 Javascript 数据类型工具之: null
 *
 * @packageDocumentation
 * @module @a-type-of-js/null
 * @license MIT
 */
import { typeOf } from './typeOf';
/**
 *
 * 检测 `input` 是否是  类型`null`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `null` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isNull } from 'a-type-of-js';
 *
 * console.log(isNull(null)); // true
 *
 * console.log(isNull(undefined)); // false
 * console.log(isNull(1)); // false
 * ```
 */
export function isNull(input: unknown): input is null {
  return typeOf(input) === 'null';
}

/**
 *
 * 检测 `input` 是否是  类型`undefined`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `undefined` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isUndefined } from 'a-type-of-js';
 *
 * console.log(isUndefined(undefined)); // true
 *
 * console.log(isUndefined(null)); // false
 * console.log(isUndefined(1)); // false
 * ```
 *
 */
export function isUndefined(input: unknown): input is undefined {
  return typeOf(input) === 'undefined';
}
