/**************************************
 *
 * 当前数据类型是否为 boolean
 *
 * @param {*} measuredData 任意数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isBoolean } from 'a-type-of-js';
 *
 * console.log(isBoolean(true)); // true
 * console.log(isBoolean(false)); // true
 * console.log(isBoolean(1)); // false
 * console.log(isBoolean('true')); // false
 * ```
 **************************************/

import { typeOf } from './typeOf';

export function isBoolean(measuredData: unknown): measuredData is boolean {
  return typeOf(measuredData) === 'boolean';
}
