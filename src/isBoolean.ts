/**
 * 检测 Javascript 数据类型工具之: boolean
 *
 * @packageDocumentation
 * @module @a-type-of-js/boolean
 * @license MIT
 */
import { typeOf } from './typeOf';
/**
 *
 * 当前数据类型是否为 boolean
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `boolean` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isBoolean } from 'a-type-of-js';
 *
 * console.log(isBoolean(true)); // true
 * console.log(isBoolean(false)); // true
 *
 * console.log(isBoolean(1)); // false
 * console.log(isBoolean('true')); // false
 * ```
 */
export function isBoolean(input: unknown): input is boolean {
  return typeOf(input) === 'boolean';
}
