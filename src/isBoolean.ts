/**
 * Type-checking utilities for JavaScript native boolean types.
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
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `boolean`, narrowing the type to `boolean` in TypeScript.
 * * @example
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
