import { typeOf } from './typeOf';

/**************************************
 *
 * 当前数据是否为 Symbol
 *
 **************************************/
export function isSymbol(measuredData: unknown): measuredData is symbol {
  return typeOf(measuredData) === 'symbol';
}
