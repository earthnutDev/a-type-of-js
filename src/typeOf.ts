import { Typeof } from './types';

/**************************************
 *
 *
 * 获取数据的类型
 *
 * @param {*} o 任意数据
 * @return {*}  返回是一个字符串 {@link String}，包含于   @see  {@link TypeOf}
 * @author: [earthnut](https://earthnut.dev)
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
 **************************************/
export function typeOf(measuredData: unknown): Typeof {
  /**************************
   * 使用 typeof  判断数据类型
   **************************/
  const typeofValue:
    | 'string'
    | 'number'
    | 'bigint'
    | 'boolean'
    | 'symbol'
    | 'undefined'
    | 'object'
    | 'function' = typeof measuredData;

  // 检验出原始数据类型
  if ('object' !== typeofValue && 'function' !== typeofValue) {
    return typeofValue;
  }

  /**************************
   * 通过 Object.prototype.toString.call(o) 判断数据类型
   **************************/
  const toStringCallValue = Reflect.apply(
    Object.prototype.toString,
    measuredData,
    [],
  )
    .replace(/^.*\s(.*)]$/, '$1')
    .toLowerCase();

  if ('error' !== toStringCallValue) {
    return toStringCallValue as Typeof;
  }

  if (measuredData instanceof SyntaxError) {
    return 'syntaxerror';
  }

  if (measuredData instanceof TypeError) {
    return 'typeerror';
  }

  if (measuredData instanceof URIError) {
    return 'urierror';
  }

  if (measuredData instanceof ReferenceError) {
    return 'referenceerror';
  }

  // if (measuredData instanceof InternalError) {
  //   return 'internalerror';
  // }

  if (measuredData instanceof AggregateError) {
    return 'aggregateerror';
  }

  if (measuredData instanceof RangeError) {
    return 'rangeerror';
  }

  if (measuredData instanceof EvalError) {
    return 'evalerror';
  }

  return 'error';
}
