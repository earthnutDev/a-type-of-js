/**************************************
 *
 * 当前一个条件，判断是否为该类型
 *
 * @param {*} measureData 任意数据
 * @param {*} typeOf 判断是否为该类型
 * @return {*}  {measureData is T}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import  { isType } from 'a-type-of-js';
 *
 * console.log(isType<number>(1)); // true
 * console.log(isType<string>('1')); // true
 * ```
 **************************************/
export function isType<T = string>(measureData: unknown): measureData is T;

export function isType<T = string>(
  measureData: unknown,
  judgingConditions: boolean | (() => boolean),
): measureData is T;
/**************************************
 *
 * 当前一个条件，判断是否为该类型
 *
 * @param {*} measureData 任意数据
 * @param {*} typeOf 判断是否为该类型
 * @return {*}  {measureData is T}
 * @author: [earthnut](https://earthnut.dev)
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
 **************************************/

export function isType<T = string>(
  measureData: unknown,
  judgingConditions?: boolean | (() => boolean),
): measureData is T {
  if (judgingConditions === undefined) return true;

  if (typeof judgingConditions === 'function') {
    return judgingConditions();
  }
  return judgingConditions;
}
