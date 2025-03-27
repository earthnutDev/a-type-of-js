/**
 *  `input` 类型收缩
 *
 * @packageDocumentation
 * @module @a-type-of-js/isType
 * @license MIT
 */

/**
 *
 * 给出一个类型 `T` ，以返回值真假来判断 `input` 是否为 `T` 类型
 *
 * @param input 待检测的数据
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `T` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isType } from 'a-type-of-js';
 *
 * console.log(isType<number>(1)); // true
 * console.log(isType<string>('1')); // true
 * ```
 */
export function isType<T = string>(input: unknown): input is T;

export function isType<T = string>(
  input: unknown,
  judgingConditions: boolean | (() => boolean),
): input is T;

/**
 *
 * 给出一个类型 `T` ，以返回值真假来判断 `input` 是否为 `T` 类型
 *
 * @param  input 待检测的数据
 * @param  judgingConditions Determine whether this type is used
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `ReferenceError` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isType } from 'a-type-of-js';
 *
 * console.log(isType<number>(1)); // true
 * console.log(isType<number>(1, true)); // true
 * console.log(isType<number>(1, () => true)); // true
 * console.log(isType<string>(1, false)); // false
 * console.log(isType<string>(1, () => false)); // false
 * console.log(isType<string>('1')); // true
 * console.log(isType<string>('1', true)); // true
 * console.log(isType<string>('1', () => true)); // true
 * console.log(isType<number>('1', false)); // false
 * console.log(isType<number>('1', () => false)); // false
 * ```
 *
 */
export function isType<T = string>(
  input: unknown,
  judgingConditions?: boolean | (() => boolean),
): input is T {
  if (judgingConditions === undefined) return true;

  if (typeof judgingConditions === 'function') {
    return judgingConditions();
  }
  return judgingConditions;
}
