import { typeOf } from './typeOf';

/**************************************
 *
 * 当前数据是否为 Error
 *
 * @param measuredData 待测试的数据
 * @returns {true | false}
 * @example
 *
 * ```ts
 *   import { isError } from 'a-type-of-js';
 *
 *   console.log(isError(new Error('test'))); // true
 *   console.log(isError(new isEvalError('test'))); // false
 *   console.log(isError(new RangeError('test'))); // false
 *   console.log(isError(new ReferenceError('test'))); // false
 * ```
 *
 **************************************/
export function isError(measuredData: unknown): measuredData is Error {
  return typeOf(measuredData) === 'error';
}
/**************************************
 *
 * 当前数据是否为 EvalError
 *
 **************************************/
export function isEvalError(measuredData: unknown): measuredData is EvalError {
  return typeOf(measuredData) === 'evalerror';
}

/**************************************
 *
 * 当前数据是否为 RangeError
 *
 * @param measuredData 待测试的数据
 * @returns {true | false}
 * @example
 *
 * ```ts
 *   import { isRangeError } from 'a-type-of-js';
 *
 *   console.log(isRangeError(new RangeError('test'))); // true
 *   console.log(isRangeError(new Error('test'))); // false
 * ```
 *
 **************************************/
export function isRangeError(
  measuredData: unknown,
): measuredData is RangeError {
  return typeOf(measuredData) === 'rangeerror';
}

/**************************************
 *
 * 当前数据是否为 ReferenceError
 *
 * @param measuredData 待测试的数据
 * @returns {true | false}
 * @example
 *
 * ```ts
 *   import { isReferenceError } from 'a-type-of-js';
 *
 *   console.log(isReferenceError(new ReferenceError('test'))); // true
 *   console.log(isReferenceError(new Error('test'))); // false
 *
 * ```
 **************************************/
export function isReferenceError(
  measuredData: unknown,
): measuredData is ReferenceError {
  return typeOf(measuredData) === 'referenceerror';
}

/**************************************
 *
 *
 * @description 当前数据是否为 SyntaxError
 * @param measuredData 待测试的数据
 * @returns {true | false}
 * @example
 *
 * ```ts
 *   import { isSyntaxError } from 'a-type-of-js';
 *
 *   console.log(isSyntaxError(new SyntaxError('test'))); // true
 *   console.log(isSyntaxError(new Error('test'))); // false
 *
 * ```
 *
 **************************************/
export function isSyntaxError(
  measuredData: unknown,
): measuredData is SyntaxError {
  return typeOf(measuredData) === 'syntaxerror';
}

/**************************************
 *
 * 当前数据是否为 TypeError
 *
 * @param measuredData 待测试的数据
 * @returns {true | false}
 * @example
 *
 * ```ts
 *   import { isTypeError } from 'a-type-of-js';
 *
 *   console.log(isTypeError(new TypeError('test'))); // true
 *   console.log(isTypeError(new Error('test'))); // false
 *
 * ```
 **************************************/
export function isTypeError(measuredData: unknown): measuredData is TypeError {
  return typeOf(measuredData) === 'typeerror';
}

/**************************************
 *
 * 当前数据是否为 URIError
 *
 * @param measuredData 待测试的数据
 * @returns {true | false}
 * @example
 *
 * ```ts
 *   import { isURIError } from 'a-type-of-js';
 *
 *   console.log(isURIError(new URIError('test'))); // true
 *   console.log(isURIError(new Error('test'))); // false
 *
 * ```
 **************************************/
export function isURIError(measuredData: unknown): measuredData is URIError {
  return typeOf(measuredData) === 'urierror';
}

/**************************************
 *
 * 当前数据是否为 AggregateError
 *
 * @param measuredData 待测试的数据
 * @returns {true | false}
 * @example
 *
 * ```ts
 *   import { isAggregateError } from 'a-type-of-js';
 *
 *   console.log(isAggregateError(new AggregateError([]))); // true
 *   console.log(isAggregateError(new Error('test'))); // false
 *
 * ```
 **************************************/
export function isAggregateError(
  measuredData: unknown,
): measuredData is AggregateError {
  return typeOf(measuredData) === 'aggregateerror';
}
