import { typeOf } from './typeOf';

/**************************************
 *
 * 当前数据类型是否为 number
 *
 **************************************/
export function isNumber(measuredData: unknown): measuredData is number {
  return typeOf(measuredData) === 'number';
}

/**************************************
 *
 * 当前数据是否为 BigInt
 *
 **************************************/
export function isBigInt(measuredData: unknown): measuredData is bigint {
  return typeOf(measuredData) === 'bigint';
}

/**************************************
 *
 * 当前数据是否为 NaN
 *
 **************************************/
export function isNaN(measuredData: unknown): measuredData is number {
  return Number.isNaN(measuredData);
}
