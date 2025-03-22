/**
 * Narrowing the type of `input`
 *
 * @packageDocumentation
 * @module @a-type-of-js/isType
 * @license MIT
 */

/**
 *
 * The current condition determines whether it is of this type
 *
 * @param input Arbitrary data
 * @returns `true` if `input` is an instance of `T`, narrowing the type to `T` in TypeScript.
 * @example
 *
 * ```ts
 * import  { isType } from 'a-type-of-js';
 *
 * console.log(isType<number>(1)); // true
 * console.log(isType<string>('1')); // true
 * ```
 */
export function isType<T = string>(input: unknown): input is T;

export function isType<T = string>(
  input: unknown,
  judgingConditions: boolean | (() => boolean),
): input is T;

/**
 *
 * The current condition determines whether it is of this type
 *
 * @param  input Arbitrary data
 * @param  judgingConditions Determine whether this type is used
 * @returns `true` if `input` is an instance of `ReferenceError`, narrowing the type to `ReferenceError` in TypeScript.
 * @example
 *
 * ```ts
 * import  { isType } from 'a-type-of-js';
 *
 * console.log(isType<number>(1)); // true
 * console.log(isType<number>(1, true)); // true
 * console.log(isType<number>(1, () => true)); // true
 * console.log(isType<string>(1, false)); // false
 * console.log(isType<string>(1, () => false)); // false
 * console.log(isType<string>('1')); // true
 * console.log(isType<string>('1', true)); // true
 * console.log(isType<string>('1', () => true)); // true
 * console.log(isType<number>('1', false)); // false
 * console.log(isType<number>('1', () => false)); // false
 * ```
 *
 */
export function isType<T = string>(
  input: unknown,
  judgingConditions?: boolean | (() => boolean),
): input is T {
  if (judgingConditions === undefined) return true;

  if (typeof judgingConditions === 'function') {
    return judgingConditions();
  }
  return judgingConditions;
}
