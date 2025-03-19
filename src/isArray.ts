import { typeOf } from './typeOf';

/**************************************
 *
 * 当前数据是否为数组
 *
 * @param measuredData 待测试的数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import  { isArray } from 'a-type-of-js';
 *
 * console.log(isArray([1,2,3])) // true
 * console.log(isArray({})) // false
 * console.log(isArray(new Set())) // false
 * ```
 **************************************/
export function isArray(measuredData: unknown): measuredData is Array<unknown> {
  return Array.isArray(measuredData);
}

/**************************************
 *
 * 当前数据是否为 Set
 *
 * @param measuredData 待测试的数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import  { isSet } from 'a-type-of-js';
 *
 * console.log(isSet(new Set())) // true
 * console.log(isSet({})) // false
 * console.log(isSet([])) // false
 * ```
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
 * @param measuredData 待测试的数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import  { isWeakSet } from 'a-type-of-js';
 *
 * console.log(isWeakSet(new WeakSet())) // true
 * console.log(isWeakSet({})) // false
 * ```
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
 * @param measuredData 待测试的数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import  { isBigInt64Array } from 'a-type-of-js';
 *
 * console.log(isBigInt64Array(new BigInt64Array())) // true
 * console.log(isBigInt64Array({})) // false
 * ```
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
 * @param measuredData 待测试的数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import  { isBigUint64Array } from 'a-type-of-js';
 *
 * console.log(isBigUint64Array(new BigUint64Array())) // true
 * console.log(isBigUint64Array({})) // false
 * ```
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
 * @param measuredData 待测试的数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import  { isArrayBuffer } from 'a-type-of-js';
 *
 * console.log(isArrayBuffer(new ArrayBuffer(8))) // true
 * console.log(isArrayBuffer({})) // false
 * ```
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
 * @param measuredData 待测试的数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import  { isInt8Array } from 'a-type-of-js';
 *
 * console.log(isInt8Array(new Int8Array())) // true
 * console.log(isInt8Array({})) // false
 * ```
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
 * @param measuredData 待测试的数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import  { isUint8Array } from 'a-type-of-js';
 *
 * console.log(isUint8Array(new Uint8Array())) // true
 * console.log(isUint8Array({})) // false
 * ```
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
 * @param measuredData 待测试的数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import  { isInt16Array } from 'a-type-of-js';
 *
 * console.log(isInt16Array(new Int16Array())) // true
 * console.log(isInt16Array({})) // false
 * ```
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
 * @param measuredData 待测试的数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 *
 * import  { isUint16Array } from 'a-type-of-js';
 *
 * console.log(isUint16Array(new Uint16Array())) // true
 * console.log(isUint16Array({})) // false
 * ```
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
 * @param measuredData 待测试的数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import  { isUint32Array } from 'a-type-of-js';
 *
 * console.log(isUint32Array(new Uint32Array())) // true
 * console.log(isUint32Array({})) // false
 * ```
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
 * @param measuredData 待测试的数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import  { isFloat32Array } from 'a-type-of-js';
 *
 * console.log(isFloat32Array(new Float32Array())) // true
 * console.log(isFloat32Array({})) // false
 * ```
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
 * @param measuredData 待测试的数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import  { isFloat64Array } from 'a-type-of-js';
 *
 * console.log(isFloat64Array(new Float64Array())) // true
 * console.log(isFloat64Array({})) // false
 * ```
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
 * @param measuredData 待测试的数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import  { isSharedArrayBuffer } from 'a-type-of-js';
 *
 * console.log(isSharedArrayBuffer(new SharedArrayBuffer(8))) // true
 * console.log(isSharedArrayBuffer({})) // false
 *
 * ```
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
 * @param measuredData 待测试的数据
 * @return {*}  {boolean}
 * @author: [earthnut](https://earthnut.dev)
 * @example
 *
 * ```ts
 * import  { isUint8ClampedArray } from 'a-type-of-js';
 *
 * console.log(isUint8ClampedArray(new Uint8ClampedArray())) // true
 * console.log(isUint8ClampedArray({})) // false
 * ```
 *
 **************************************/
export function isUint8ClampedArray<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(measuredData: unknown): measuredData is Uint8ClampedArray<TArrayBuffer> {
  return typeOf(measuredData) === 'uint8clampedarray';
}
