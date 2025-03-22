/**
 * Type-checking utilities for JavaScript native error types.
 *
 * @packageDocumentation
 * @module @a-type-of-js/error
 * @license MIT
 */
import { typeOf } from './typeOf';

/**
 *
 * Detects whether the current `input` is an `Error`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Error`, narrowing the type to `Error` in TypeScript.
 * * @example
 *
 * ```ts
 *   import { isError } from 'a-type-of-js';
 *
 *   console.log(isError(new Error('test'))); // true
 *
 *   console.log(isError(new EvalError('test'))); // false (specific error types)
 *   console.log(isError(new RangeError('test'))); // false  (specific error types)
 *   console.log(isError(new ReferenceError('test'))); // false (specific error types)
 *
 *   console.log(isError({ message: 'test' })); // false (not an instance of Error)
 * ```
 *
 *
 * @since 0.1.4
 */
export function isError(input: unknown): input is Error {
  return typeOf(input) === 'error';
}
/**
 *
 * Detects whether the current `input` is an `EvalError`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `EvalError`, narrowing the type to `EvalError` in TypeScript.
 * * @example
 *
 * ```ts
 * import  { isEvalError } from 'a-type-of-js';
 *
 * console.log(isEvalError(new EvalError('test'))); // true
 *
 * console.log(isEvalError(new Error('test'))); // false (specifically, not an instance of EvalError)
 * console.log(isEvalError(new TypeError('test'))); // false (specifically, not an instance of EvalError)
 * console.log(isEvalError(new RangeError('test'))); // false (specifically, not an instance of EvalError)
 *
 * console.log(isEvalError({ message: 'test' })); // false (not an instance of EvalError)
 * ```
 *
 */
export function isEvalError(input: unknown): input is EvalError {
  return typeOf(input) === 'evalerror';
}

/**
 *
 * Detects whether the current `input  is an `RangeError`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `RangeError`, narrowing the type to `RangeError` in TypeScript.
 * * @example
 *
 * ```ts
 *   import { isRangeError } from 'a-type-of-js';
 *
 *   console.log(isRangeError(new RangeError('test'))); // true
 *
 *   console.log(isRangeError(new Error('test'))); // false (not an instance of RangeError
 *   console.log(isRangeError(new TypeError('test'))); // false (not an instance of RangeError)
 *   console.log(isRangeError(new SyntaxError('test'))); // false (not an instance of RangeError)
 *
 *   console.log(isRangeError('test')); // false (not an instance of RangeError)
 * ```
 *
 */
export function isRangeError(input: unknown): input is RangeError {
  return typeOf(input) === 'rangeerror';
}

/**
 *
 * Detects whether the current  `input` is an `ReferenceError`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `ReferenceError`, narrowing the type to `ReferenceError` in TypeScript.
 * * @example
 *
 * ```ts
 *   import { isReferenceError } from 'a-type-of-js';
 *
 *   console.log(isReferenceError(new ReferenceError('test'))); // true
 *
 *   console.log(isReferenceError(new Error('test'))); // false (not an instance of ReferenceError)
 *   console.log(isReferenceError(new TypeError('test'))); // false (not an instance of ReferenceError)
 *   console.log(isReferenceError(new SyntaxError('test'))); // false (not an instance of ReferenceError)
 *
 *   console.log(isReferenceError('test'); // false (not an instance of ReferenceError)
 *
 * ```
 */
export function isReferenceError(input: unknown): input is ReferenceError {
  return typeOf(input) === 'referenceerror';
}

/**
 *
 *
 * Detects whether the current  `input` is an `SyntaxError`
 *
 *  @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `SyntaxError`, narrowing the type to `SyntaxError` in TypeScript.
 * * @example
 *
 * ```ts
 *   import { isSyntaxError } from 'a-type-of-js';
 *
 *   console.log(isSyntaxError(new SyntaxError('test'))); // true
 *
 *   console.log(isSyntaxError(new Error('test'))); // false (not an instance of SyntaxError)
 *   console.log(isSyntaxError(new TypeError('test'))); // false (not an instance of SyntaxError)
 *   console.log(isSyntaxError(new ReferenceError('test'))); // false (not an instance of SyntaxError)
 *
 *   console.log(isSyntaxError('test')); // false (not an instance of SyntaxError)
 *
 * ```
 *
 */
export function isSyntaxError(input: unknown): input is SyntaxError {
  return typeOf(input) === 'syntaxerror';
}

/**
 *
 * Detects whether the current  `input` is an `TypeError`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `TypeError`, narrowing the type to `TypeError` in TypeScript.
 * * @example
 *
 * ```ts
 *   import { isTypeError } from 'a-type-of-js';
 *
 *   console.log(isTypeError(new TypeError('test'))); // true
 *
 *   console.log(isTypeError(new Error('test'))); // false (not an instance of TypeError)
 *   console.log(isTypeError(new SyntaxError('test'))); // false (not an instance of TypeError)
 *   console.log(isTypeError(new ReferenceError('test'))); // false (not an instance of TypeError)
 *   console.log(isTypeError(new EvalError('test'))); // false (not an instance of TypeError)
 *
 *   console.log(isTypeError('test'); // false (not an instance of TypeError)
 *
 * ```
 */
export function isTypeError(input: unknown): input is TypeError {
  return typeOf(input) === 'typeerror';
}

/**
 *
 * Detects whether the current  `input` is an `URIError`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `URIError`, narrowing the type to `URIError` in TypeScript.
 * * @example
 *
 * ```ts
 *   import { isURIError } from 'a-type-of-js';
 *
 *   console.log(isURIError(new URIError('test'))); // true
 *   console.log(isURIError(new Error('test'))); // false
 *
 * ```
 */
export function isURIError(input: unknown): input is URIError {
  return typeOf(input) === 'urierror';
}

/**
 *
 * Detects whether the current  `input` is an `AggregateError`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `AggregateError`, narrowing the type to `AggregateError` in TypeScript.
 * * @example
 *
 * ```ts
 *   import { isAggregateError } from 'a-type-of-js';
 *
 *   console.log(isAggregateError(new AggregateError([]))); // true
 *   console.log(isAggregateError(new Error('test'))); // false
 *
 * ```
 */
export function isAggregateError(input: unknown): input is AggregateError {
  return typeOf(input) === 'aggregateerror';
}
