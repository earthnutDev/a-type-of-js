import { typeOf } from './typeOf';

/**************************************
 *
 * 当前数据是否为 Symbol
 *
 * @param measuredData {*}  任意数据
 * @return {*}  返回是一个布尔值 {@link Boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isSymbol } from 'a-type-of-js';
 *
 * console.log(isSymbol(Symbol('test'))); // true
 * console.log(isSymbol('test')); // false
 * ```
 **************************************/
export function isSymbol(measuredData: unknown): measuredData is symbol {
  return typeOf(measuredData) === 'symbol';
}
