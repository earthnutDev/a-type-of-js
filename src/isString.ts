import { typeOf } from './typeOf';

/**************************************
 *
 * 当前数据类型是否为 string
 *
 * @param {*} measuredData 任意数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isString } from 'a-type-of-js';
 *
 * console.log(isString('hello')); // true
 * console.log(isString(123)); // false
 * ```
 **************************************/
export function isString(measuredData: unknown): measuredData is string {
  return typeOf(measuredData) === 'string';
}

/**************************************
 *
 * 当前数据是否为 RegExp
 *
 * @param {*} measuredData 任意数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isRegExp } from 'a-type-of-js';
 *
 * console.log(isRegExp(/abc/)); // true
 * console.log(isRegExp(new RegExp('abc'))); // true
 * console.log(isRegExp(123)); // false
 * ```
 *
 **************************************/
export function isRegExp(measuredData: unknown): measuredData is RegExp {
  return typeOf(measuredData) === 'regexp';
}
