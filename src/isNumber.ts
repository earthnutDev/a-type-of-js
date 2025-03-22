/**
 * Type-checking utilities for JavaScript native number types.
 *
 * @packageDocumentation
 * @module @a-type-of-js/number
 * @license MIT
 */

import { typeOf } from './typeOf';

/**
 *
 * Detects whether the current  `input` is an `number`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `number`, narrowing the type to `number` in TypeScript.
 * @example
 *
 * ```ts
 * import { isNumber } from 'a-type-of-js';
 *
 * isNumber(123); // true
 *
 * isNumber('123'); // false
 *
 * ```
 */
export function isNumber(input: unknown): input is number {
  return typeOf(input) === 'number';
}

/**
 *
 * Detects whether the current  `input` is an `BigInt`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `bigint`, narrowing the type to `bigint` in TypeScript.
 * @example
 *
 * ```ts
 * import { isBigInt } from 'a-type-of-js';
 *
 * isBigInt(123n); // true
 *
 * isBigInt('123'); // false
 * isBigInt(123); // false
 * isBigInt(true); // false
 * ```
 */
export function isBigInt(input: unknown): input is bigint {
  return typeOf(input) === 'bigint';
}

/**
 *
 * Detects whether the current  `input` is an `NaN`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `NaN`, narrowing the type to `NaN` in TypeScript.
 * @example
 *
 * ```ts
 * import { isNaN } from 'a-type-of-js';
 *
 * isNaN(NaN); // true
 *
 * isNaN('123'); // false
 *
 * ```
 */
export function isNaN(input: unknown): input is typeof NaN {
  return Number.isNaN(input);
}
