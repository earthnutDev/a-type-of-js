import { typeOf } from './typeOf';
/**************************************
 *
 * 当前数据是否为 null
 *
 **************************************/

export function isNull(measuredData: unknown): measuredData is null {
  return typeOf(measuredData) === 'null';
}

/**************************************
 *
 * 当前数据是否为 undefined
 *
 **************************************/
export function isUndefined(measuredData: unknown): measuredData is undefined {
  return typeOf(measuredData) === 'undefined';
}
