/**
 * 检测 Javascript 数据类型工具之: error
 *
 * @packageDocumentation
 * @module @a-type-of-js/error
 * @license MIT
 */
import { typeOf } from './typeOf';

/**
 *
 * 检测 `input` 是否是  类型`Error`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Error` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 *   import { isError } from 'a-type-of-js';
 *
 *   console.log(isError(new Error('test'))); // true
 *
 *   console.log(isError(new EvalError('test'))); // false (类型不符)
 *   console.log(isError(new RangeError('test'))); // false  (类型不符)
 *   console.log(isError(new ReferenceError('test'))); // false (类型不符)
 *
 *   console.log(isError({ message: 'test' })); // false (类型不符)
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
 * 检测 `input` 是否是  类型`EvalError`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `EvalError` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isEvalError } from 'a-type-of-js';
 *
 * console.log(isEvalError(new EvalError('test'))); // true
 *
 * console.log(isEvalError(new Error('test'))); // false (类型非 EvalError)
 * console.log(isEvalError(new TypeError('test'))); // false (类型非 EvalError)
 * console.log(isEvalError(new RangeError('test'))); // false (类型非 EvalError)
 *
 * console.log(isEvalError({ message: 'test' })); // false (类型非 EvalError)
 * ```
 *
 */
export function isEvalError(input: unknown): input is EvalError {
  return typeOf(input) === 'evalerror';
}

/**
 *
 * 检测 `input 是否是  类型`RangeError`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `RangeError` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 *   import { isRangeError } from 'a-type-of-js';
 *
 *   console.log(isRangeError(new RangeError('test'))); // true
 *
 *   console.log(isRangeError(new Error('test'))); // false (类型非 RangeError
 *   console.log(isRangeError(new TypeError('test'))); // false (类型非 RangeError)
 *   console.log(isRangeError(new SyntaxError('test'))); // false (类型非 RangeError)
 *
 *   console.log(isRangeError('test')); // false (类型非 RangeError)
 * ```
 *
 */
export function isRangeError(input: unknown): input is RangeError {
  return typeOf(input) === 'rangeerror';
}

/**
 *
 * 检测 `input` 是否是  类型`ReferenceError`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `ReferenceError` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 *   import { isReferenceError } from 'a-type-of-js';
 *
 *   console.log(isReferenceError(new ReferenceError('test'))); // true
 *
 *   console.log(isReferenceError(new Error('test'))); // false (类型非 ReferenceError)
 *   console.log(isReferenceError(new TypeError('test'))); // false (类型非 ReferenceError)
 *   console.log(isReferenceError(new SyntaxError('test'))); // false (类型非 ReferenceError)
 *
 *   console.log(isReferenceError('test'); // false (类型非 ReferenceError)
 *
 * ```
 */
export function isReferenceError(input: unknown): input is ReferenceError {
  return typeOf(input) === 'referenceerror';
}

/**
 *
 *
 * 检测 `input` 是否是  类型`SyntaxError`
 *
 *  @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `SyntaxError` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 *   import { isSyntaxError } from 'a-type-of-js';
 *
 *   console.log(isSyntaxError(new SyntaxError('test'))); // true
 *
 *   console.log(isSyntaxError(new Error('test'))); // false (类型非 SyntaxError)
 *   console.log(isSyntaxError(new TypeError('test'))); // false (类型非 SyntaxError)
 *   console.log(isSyntaxError(new ReferenceError('test'))); // false (类型非 SyntaxError)
 *
 *   console.log(isSyntaxError('test')); // false (类型非 SyntaxError)
 *
 * ```
 *
 */
export function isSyntaxError(input: unknown): input is SyntaxError {
  return typeOf(input) === 'syntaxerror';
}

/**
 *
 * 检测 `input` 是否是  类型`TypeError`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `TypeError` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 *   import { isTypeError } from 'a-type-of-js';
 *
 *   console.log(isTypeError(new TypeError('test'))); // true
 *
 *   console.log(isTypeError(new Error('test'))); // false (类型非 TypeError)
 *   console.log(isTypeError(new SyntaxError('test'))); // false (类型非 TypeError)
 *   console.log(isTypeError(new ReferenceError('test'))); // false (类型非 TypeError)
 *   console.log(isTypeError(new EvalError('test'))); // false (类型非 TypeError)
 *
 *   console.log(isTypeError('test'); // false (类型非 TypeError)
 *
 * ```
 */
export function isTypeError(input: unknown): input is TypeError {
  return typeOf(input) === 'typeerror';
}

/**
 *
 * 检测 `input` 是否是  类型`URIError`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `URIError` ，且在 Typescript 中进行类型收缩
 * @example
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
 * 检测 `input` 是否是  类型`AggregateError`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `AggregateError` ，且在 Typescript 中进行类型收缩
 * @example
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
