import { typeOf } from './typeOf';

/**************************************
 *
 * 当前数据是否为普通的对象
 *
 **************************************/
export function isPlainObject<T extends object>(
  measuredData: unknown,
): measuredData is T {
  return typeOf(measuredData) === 'object';
}

/**************************************
 *
 * 当前数据是否为时间
 *
 **************************************/
export function isDate(measuredData: unknown): measuredData is Date {
  return typeOf(measuredData) === 'date';
}

/**************************************
 *
 * 当前数据是否为 DataView
 *
 **************************************/
export function isDataView<T extends ArrayBufferLike = ArrayBufferLike>(
  measuredData: unknown,
): measuredData is DataView<T> {
  return typeOf(measuredData) === 'dataview';
}

/**************************************
 *
 * 当前数据是否为 Map
 *
 **************************************/
export function isMap<K extends string, V = unknown>(
  measuredData: unknown,
): measuredData is Map<K, V> {
  return typeOf(measuredData) === 'map';
}

/**************************************
 *
 * 当前数据是否为 WeakMap
 *
 **************************************/
export function isWeakMap(
  measuredData: unknown,
): measuredData is WeakMap<object, unknown> {
  return typeOf(measuredData) === 'weakmap';
}
