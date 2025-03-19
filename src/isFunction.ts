import { typeOf } from './typeOf';

/**************************************
 *
 * 当前数据是否为函数
 *
 * 函数可能为：
 * - 普通函数
 * - 由 async 标注的异步函数
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
 **************************************/
export function isGenerator(measuredData: unknown): measuredData is Generator {
  return typeOf(measuredData) === 'generator';
}
