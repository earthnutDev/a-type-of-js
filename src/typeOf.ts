/**
 * Type-checking utilities for JavaScript.
 *
 * @packageDocumentation
 * @module @a-type-of-js/typeOf
 * @license MIT
 */
import { Typeof } from './types';

/**
 *
 *
 * The type of detection data
 *
 * @param input - The value of the type to check.
 * @returns a string value of type input.
 * @example
 *
 * ```ts
 * import  { typeOf } from 'a-type-of-js';
 *
 *  console.log(typeOf(1) === 'number'); // true
 *  console.log(typeOf('1') === 'string'); // true
 *  console.log(typeOf(null) === 'null'); // true
 *  console.log(typeOf(undefined) === 'undefined'); // true
 *  console.log(typeOf(true) === 'boolean'); // true
 *  console.log(typeOf(Symbol()) === 'symbol');
 *  console.log(typeOf(new Date()) === 'date');
 *  console.log(typeOf([]) === 'array');
 *  console.log(typeOf(new Set()) === 'set');
 *  console.log(typeOf(new Map()) === 'map');
 *  console.log(typeOf(new Error()) === 'error');
 *  console.log(typeOf(new Promise(() => {})) === 'promise');
 *  ...
 *
 * ```
 *
 */
export function typeOf(input: unknown): Typeof {
  /**************************
   * use `typeof` determine the type of data
   **************************/
  const typeofValue:
    | 'string'
    | 'number'
    | 'bigint'
    | 'boolean'
    | 'symbol'
    | 'undefined'
    | 'object'
    | 'function' = typeof input;

  // Verify the original data type
  // 检验出原始数据类型
  if ('object' !== typeofValue && 'function' !== typeofValue) {
    return typeofValue;
  }

  /**************************
   * 通过 Object.prototype.toString.call(o) 判断数据类型
   **************************/
  const toStringCallValue = Reflect.apply(Object.prototype.toString, input, [])
    .replace(/^.*\s(.*)]$/, '$1')
    .toLowerCase();

  if ('error' !== toStringCallValue) {
    return toStringCallValue as Typeof;
  }

  if (input instanceof SyntaxError) {
    return 'syntaxerror';
  }

  if (input instanceof TypeError) {
    return 'typeerror';
  }

  if (input instanceof URIError) {
    return 'urierror';
  }

  if (input instanceof ReferenceError) {
    return 'referenceerror';
  }

  // if (input instanceof InternalError) {
  //   return 'internalerror';
  // }

  if (input instanceof AggregateError) {
    return 'aggregateerror';
  }

  if (input instanceof RangeError) {
    return 'rangeerror';
  }

  if (input instanceof EvalError) {
    return 'evalerror';
  }

  return 'error';
}
