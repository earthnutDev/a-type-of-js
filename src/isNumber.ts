/**
 * 检测 Javascript 数据类型工具之: number
 *
 * @packageDocumentation
 * @module @a-type-of-js/number
 * @license MIT
 */

import { typeOf } from './typeOf';

/**
 *
 * 检测 `input` 是否是  类型`number`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `number` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isNumber } from 'a-type-of-js';
 *
 * isNumber(123); // true
 *
 * isNumber('123'); // false
 *
 * ```
 */
export function isNumber(input: unknown): input is number {
  return typeOf(input) === 'number';
}

/**
 *
 * 检测 `input` 是否是  类型`BigInt`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `bigint` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isBigInt } from 'a-type-of-js';
 *
 * isBigInt(123n); // true
 *
 * isBigInt('123'); // false
 * isBigInt(123); // false
 * isBigInt(true); // false
 * ```
 */
export function isBigInt(input: unknown): input is bigint {
  return typeOf(input) === 'bigint';
}

/**
 *
 * 检测 `input` 是否是  类型`NaN`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `NaN` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isNaN } from 'a-type-of-js';
 *
 * isNaN(NaN); // true
 *
 * isNaN('123'); // false
 *
 * ```
 */
export function isNaN(input: unknown): input is typeof NaN {
  return Number.isNaN(input);
}
/**
 *
 * 是否为正整数
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为正整数
 * @example
 *
 * ```ts
 * import { isPositiveInteger } from 'a-type-of-js';
 *
 * isPositiveInteger(123); // true
 * isPositiveInteger(1); // true
 *
 * isPositiveInteger(0); // false
 * isPositiveInteger(-1); // true
 * isPositiveInteger(false); // false
 * isPositiveInteger(Infinity); // false
 * isPositiveInteger('123'); // false
 * isPositiveInteger(NaN); // false
 *
 *
 * ```
 *
 *
 */
export function isPositiveInteger(input: unknown): input is number {
  return Number.isInteger(input) && isNumber(input) && input > 0;
}

/**
 *
 * 是否为负整数
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为负整数
 * @example
 *
 * ```ts
 * import { isPositiveInteger } from 'a-type-of-js';
 *
 * isPositiveInteger(-123); // true
 * isPositiveInteger(-1); // true
 *
 * isPositiveInteger(0); // false
 * isPositiveInteger(1); // true
 * isPositiveInteger(false); // false
 * isPositiveInteger(Infinity); // false
 * isPositiveInteger('123'); // false
 * isPositiveInteger(NaN); // false
 *
 *
 * ```
 *
 *
 */
export function isNegativeInteger(input: unknown): input is number {
  return Number.isInteger(input) && isNumber(input) && input < 0;
}

/**
 *
 * 是否为正整数
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 0
 * @example
 *
 * ```ts
 * import { isZero } from 'a-type-of-js';
 *
 * isZero(0); // true
 *
 *
 * isZero(123); // false
 * isZero(1); // false
 * isZero(false); // false
 * isZero(Infinity); // false
 * isZero('123'); // false
 * isZero(NaN); // false
 *
 *
 * ```
 *
 */
export function isZero(input: unknown): input is 0 {
  return input === 0;
}
