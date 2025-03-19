import { typeOf } from './typeOf';

/**************************************
 *
 * 当前数据类型是否为 string
 *
 **************************************/
export function isString(measuredData: unknown): measuredData is string {
  return typeOf(measuredData) === 'string';
}

/**************************************
 *
 * 当前数据是否为 RegExp
 *
 **************************************/
export function isRegExp(measuredData: unknown): measuredData is RegExp {
  return typeOf(measuredData) === 'regexp';
}
