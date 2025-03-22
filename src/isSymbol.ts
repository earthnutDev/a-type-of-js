/**
 * Type-checking utilities for JavaScript native symbol types.
 *
 * @packageDocumentation
 * @module @a-type-of-js/symbol
 * @license MIT
 */
import { typeOf } from './typeOf';

/**
 *
 * Detects whether the current  `input` is an `Symbol`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `symbol`, narrowing the type to `symbol` in TypeScript.
 * @example
 *
 * ```ts
 * import { isSymbol } from 'a-type-of-js';
 *
 * console.log(isSymbol(Symbol('test'))); // true
 *
 * console.log(isSymbol('test')); // false (string is not a symbol)
 * console.log(isSymbol(123)); // false (number is not a symbol)
 * console.log(isSymbol(true)); // false (boolean is not a symbol)
 * console.log(isSymbol(null)); // false (null is not a symbol)
 * console.log(isSymbol(undefined)); // false (undefined is not a symbol)
 * ```
 */
export function isSymbol(input: unknown): input is symbol {
  return typeOf(input) === 'symbol';
}
