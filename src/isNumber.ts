import { typeOf } from './typeOf';

/**************************************
 *
 * 当前数据类型是否为 number
 *
 * @param {*} measuredData 任意数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isNumber } from 'a-type-of-js';
 *
 * isNumber(123); // true
 * isNumber('123'); // false
 * ```
 **************************************/
export function isNumber(measuredData: unknown): measuredData is number {
  return typeOf(measuredData) === 'number';
}

/**************************************
 *
 * 当前数据是否为 BigInt
 *
 * @param {*} measuredData 任意数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isBigInt } from 'a-type-of-js';
 *
 * isBigInt(123n); // true
 * isBigInt('123'); // false
 * ```
 **************************************/
export function isBigInt(measuredData: unknown): measuredData is bigint {
  return typeOf(measuredData) === 'bigint';
}

/**************************************
 *
 * 当前数据是否为 NaN
 *
 * @param {*} measuredData 任意数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isNaN } from 'a-type-of-js';
 *
 * isNaN(NaN); // true
 * isNaN('123'); // false
 * ```
 **************************************/
export function isNaN(measuredData: unknown): measuredData is number {
  return Number.isNaN(measuredData);
}
