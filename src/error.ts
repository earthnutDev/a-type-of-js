import { typeOf } from './typeOf';

/**************************************
 *
 * 当前数据是否为 Error
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
 **************************************/
export function isReferenceError(
  measuredData: unknown,
): measuredData is ReferenceError {
  return typeOf(measuredData) === 'referenceerror';
}

/**************************************
 *
 * 当前数据是否为 SyntaxError
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
 **************************************/
export function isTypeError(measuredData: unknown): measuredData is TypeError {
  return typeOf(measuredData) === 'typeerror';
}

/**************************************
 *
 * 当前数据是否为 URIError
 *
 **************************************/
export function isURIError(measuredData: unknown): measuredData is URIError {
  return typeOf(measuredData) === 'urierror';
}

/**************************************
 *
 * 当前数据是否为 AggregateError
 *
 **************************************/
export function isAggregateError(
  measuredData: unknown,
): measuredData is AggregateError {
  return typeOf(measuredData) === 'aggregateerror';
}
