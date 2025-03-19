import { typeOf } from './typeOf';

/**************************************
 *
 * 当前数据是否为函数
 *
 * 函数可能为：
 * - 普通函数
 * - 由 async 标注的异步函数
 *
 * @param {*} measuredData 任意数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isFunction } from 'a-type-of-js';
 *
 * console.log(isFunction(() => {})); // true
 * console.log(isFunction(async () => {})); // false
 * console.log(isFunction(function* () {})); // false
 * ```
 **************************************/
export function isFunction<T extends () => void>(
  measuredData: unknown,
): measuredData is T {
  return 'function' === typeOf(measuredData);
}

/**************************************
 *
 * 当前数据是否为 Promise
 *
 * @param {*} measuredData 任意数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isPromise } from 'a-type-of-js';
 *
 * console.log(isPromise(new Promise(() => {}))); // true
 * console.log(isPromise(() => {})); // false
 * ```
 **************************************/
export function isPromise<T>(
  measuredData: unknown,
): measuredData is Promise<T> {
  return typeOf(measuredData) === 'promise';
}
/**************************************
 *
 * 当前数据是否为 AsyncFunction
 *
 * @param {*} measuredData 任意数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isAsyncFunction } from 'a-type-of-js';
 *
 * console.log(isAsyncFunction(async () => {})); // true
 * console.log(isAsyncFunction(() => {})); // false
 * ```
 **************************************/
export function isAsyncFunction<T extends () => void>(
  measuredData: unknown,
): measuredData is () => Promise<T> {
  return typeOf(measuredData) === 'asyncfunction';
}

/**************************************
 *
 * 当前数据是否为 GeneratorFunction
 *
 * @param measuredData 任意数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isGeneratorFunction } from 'a-type-of-js';
 *
 * console.log(isGeneratorFunction(function* () {})); // true
 * console.log(isGeneratorFunction(() => {})); // false
 * ```
 *
 **************************************/
export function isGeneratorFunction(
  measuredData: unknown,
): measuredData is GeneratorFunction {
  return typeOf(measuredData) === 'generatorfunction';
}

/**************************************
 *
 * 当前数据是否为 Generator
 *
 * @param measuredData 任意数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import { isGenerator } from 'a-type-of-js';
 *
 * const log = (str) => console.log(str);
 * const foo = function* () {
 *  yield "a";
 *  yield "b";
 *  yield "c";
 * }
 *
 * const gen = foo();
 *
 * log(gen.next().value);  // a
 * log(gen.next().value);  // b
 * log(gen.next().value);  // c
 *
 * console.log(isGenerator(foo)); // false
 * console.log(isGenerator(gen)); // true
 *
 * ```
 **************************************/
export function isGenerator(measuredData: unknown): measuredData is Generator {
  return typeOf(measuredData) === 'generator';
}
