/**
 * 检测 Javascript 数据类型工具之: symbol
 *
 * @packageDocumentation
 * @module @a-type-of-js/symbol
 * @license MIT
 */
import { typeOf } from './typeOf';

/**
 *
 * 检测 `input` 是否是 `Symbol` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `symbol` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isSymbol } from 'a-type-of-js';
 *
 * console.log(isSymbol(Symbol('test'))); // true
 *
 * console.log(isSymbol('test')); // false (string 非 symbol)
 * console.log(isSymbol(123)); // false (number 非 symbol)
 * console.log(isSymbol(true)); // false (boolean 非 symbol)
 * console.log(isSymbol(null)); // false (null 非 symbol)
 * console.log(isSymbol(undefined)); // false (undefined 非 symbol)
 * ```
 */
export function isSymbol(input: unknown): input is symbol {
  return typeOf(input) === 'symbol';
}
