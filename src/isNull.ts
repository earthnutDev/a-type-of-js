/**
 * Type-checking utilities for JavaScript native null types.
 *
 * @packageDocumentation
 * @module @a-type-of-js/null
 * @license MIT
 */
import { typeOf } from './typeOf';
/**
 *
 * Detects whether the current  `input` is an `null`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `null`, narrowing the type to `null` in TypeScript.
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
 * Detects whether the current  `input` is an `undefined`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `undefined`, narrowing the type to `undefined` in TypeScript.
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
