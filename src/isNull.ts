import { typeOf } from './typeOf';
/**************************************
 *
 * 当前数据是否为 null
 *
 * @param {*} measuredData 任意数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isNull } from 'a-type-of-js';
 *
 * console.log(isNull(null)); // true
 * console.log(isNull(undefined)); // false
 * console.log(isNull(1)); // false
 * ```
 **************************************/

export function isNull(measuredData: unknown): measuredData is null {
  return typeOf(measuredData) === 'null';
}

/**************************************
 *
 * 当前数据是否为 undefined
 *
 * @param {*} measuredData 任意数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isUndefined } from 'a-type-of-js';
 *
 * console.log(isUndefined(undefined)); // true
 * console.log(isUndefined(null)); // false
 * console.log(isUndefined(1)); // false
 * ```
 *
 **************************************/
export function isUndefined(measuredData: unknown): measuredData is undefined {
  return typeOf(measuredData) === 'undefined';
}
