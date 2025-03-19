import { typeOf } from './typeOf';

/**************************************
 *
 * 当前数据是否为数组
 *
 **************************************/
export function isArray(measuredData: unknown): measuredData is Array<unknown> {
  return Array.isArray(measuredData);
}

/**************************************
 *
 * 当前数据是否为 Set
 *
 **************************************/
export function isSet<T = unknown>(
  measuredData: unknown,
): measuredData is Set<T> {
  return typeOf(measuredData) === 'set';
}
/**************************************
 *
 * 当前数据是否为 WeakSet
 *
 **************************************/

export function isWeakSet<T extends WeakKey>(
  measuredData: unknown,
): measuredData is WeakSet<T> {
  return typeOf(measuredData) === 'weakset';
}

/**************************************
 *
 * 当前数据是否为 Bigint64Array
 *
 **************************************/
export function isBigInt64Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is BigInt64Array<TArrayBuffer> {
  return typeOf(measuredData) === 'bigint64array';
}

/**************************************
 *
 * 当前数据是否为 BigUint64Array
 *
 **************************************/
export function isBigUint64Array<T extends ArrayBufferLike = ArrayBufferLike>(
  measuredData: unknown,
): measuredData is BigUint64Array<T> {
  return typeOf(measuredData) === 'biguint64array';
}

/**************************************
 *
 * 当前数据是否为 ArrayBuffer
 *
 **************************************/

export function isArrayBuffer<T extends ArrayBufferLike = ArrayBufferLike>(
  measuredData: unknown,
): measuredData is T {
  return typeOf(measuredData) === 'arraybuffer';
}

/**************************************
 *
 * 当前数据是否为 int8Array
 *
 **************************************/
export function isInt8Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Int8Array<TArrayBuffer> {
  return typeOf(measuredData) === 'int8array';
}

/**************************************
 *
 * 当前数据是否为 uint8Array
 *
 **************************************/
export function isUint8Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Uint8Array<TArrayBuffer> {
  return typeOf(measuredData) === 'uint8array';
}

/**************************************
 *
 * 当前数据是否为 int16Array
 *
 **************************************/
export function isInt16Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Int16Array<TArrayBuffer> {
  return typeOf(measuredData) === 'int16array';
}
/**************************************
 *
 * 当前数据是否为 uint16Array
 *
 **************************************/
export function isUint16Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Uint16Array<TArrayBuffer> {
  return typeOf(measuredData) === 'uint16array';
}

/**************************************
 *
 * 当前数据是否为 uint32Array
 *
 **************************************/
export function isUint32Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Uint32Array<TArrayBuffer> {
  return typeOf(measuredData) === 'uint32array';
}

/**************************************
 *
 * 当前数据是否为 float32Array
 *
 **************************************/
export function isFloat32Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Float32Array<TArrayBuffer> {
  return typeOf(measuredData) === 'float32array';
}

/**************************************
 *
 * 当前数据是否为 float64Array
 *
 **************************************/
export function isFloat64Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Float64Array<TArrayBuffer> {
  return typeOf(measuredData) === 'float64array';
}

/**************************************
 *
 * 当前数据是否为 sharedArrayBuffer
 *
 **************************************/
export function isSharedArrayBuffer(
  measuredData: unknown,
): measuredData is SharedArrayBuffer {
  return typeOf(measuredData) === 'sharedarraybuffer';
}

/**************************************
 *
 * 当前数据是否为 uint8ClampedArray
 *
 **************************************/
export function isUint8ClampedArray<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Uint8ClampedArray<TArrayBuffer> {
  return typeOf(measuredData) === 'uint8clampedarray';
}
