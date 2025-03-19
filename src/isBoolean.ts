/**************************************
 *
 * 当前数据类型是否为 boolean
 *
 **************************************/

import { typeOf } from './typeOf';

export function isBoolean(measuredData: unknown): measuredData is boolean {
  return typeOf(measuredData) === 'boolean';
}
