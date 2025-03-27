/**
 * 检测 Javascript 数据类型工具之: array
 *
 * @packageDocumentation
 * @module @a-type-of-js/array
 * @license MIT
 */
import { typeOf } from './typeOf';

/**
 *
 * 检测 `input` 是否是  类型`Array`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `ReferenceError` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isArray } from 'a-type-of-js';
 *
 * console.log(isArray([1,2,3])) // true
 * console.log(isArray({})) // false
 * console.log(isArray(new Set())) // false
 * ```
 */
export function isArray(input: unknown): input is Array<unknown> {
  return Array.isArray(input);
}

/**
 *
 * 检测 `input` 是否是  类型`Set`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `ReferenceError` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isSet } from 'a-type-of-js';
 *
 * console.log(isSet(new Set())) // true
 * console.log(isSet({})) // false
 * console.log(isSet([])) // false
 * ```
 */
export function isSet<T = unknown>(input: unknown): input is Set<T> {
  return typeOf(input) === 'set';
}
/**
 *
 * 检测 `input` 是否是  类型`WeakSet`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `WeakSet` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isWeakSet } from 'a-type-of-js';
 *
 * console.log(isWeakSet(new WeakSet())) // true
 *
 * console.log(isWeakSet({})) // false
 * console.log(isWeakSet([])) // false
 * console.log(isWeakSet(1)) // false
 * ```
 */
export function isWeakSet<T extends WeakKey>(
  input: unknown,
): input is WeakSet<T> {
  return typeOf(input) === 'weakset';
}

/**
 *
 * 检测 `input` 是否是  类型`Bigint64Array`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `BigInt64Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isBigInt64Array } from 'a-type-of-js';
 *
 * console.log(isBigInt64Array(new BigInt64Array())) // true
 *
 * console.log(isBigInt64Array({})) // false
 * console.log(isBigInt64Array([])) // false
 *
 * ```
 *
 */
export function isBigInt64Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: unknown): input is BigInt64Array<TArrayBuffer> {
  return typeOf(input) === 'bigint64array';
}

/**
 *
 * 检测 `input` 是否是  类型`BigUint64Array`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `BigUint64Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isBigUint64Array } from 'a-type-of-js';
 *
 * console.log(isBigUint64Array(new BigUint64Array())) // true
 *
 * console.log(isBigUint64Array({})) // false
 * console.log(isBigUint64Array([])) // false
 * console.log(isBigUint64Array(1)) // false
 * ```
 *
 */
export function isBigUint64Array<T extends ArrayBufferLike = ArrayBufferLike>(
  input: unknown,
): input is BigUint64Array<T> {
  return typeOf(input) === 'biguint64array';
}

/**
 *
 * 检测 `input` 是否是  类型`ArrayBuffer`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `ArrayBuffer` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isArrayBuffer } from 'a-type-of-js';
 *
 * console.log(isArrayBuffer(new ArrayBuffer(8))) // true
 *
 * console.log(isArrayBuffer({})) // false
 * ```
 *
 */
export function isArrayBuffer(input: unknown): input is ArrayBuffer {
  return typeOf(input) === 'arraybuffer';
}
/**
 *
 * 检测 `input` 是否是  类型`int8Array`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Int8Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isInt8Array } from 'a-type-of-js';
 *
 * console.log(isInt8Array(new Int8Array())) // true
 *
 * console.log(isInt8Array({})) // false
 * console.log(isInt8Array([])) // false
 * console.log(isInt8Array(1)) // false
 * ```
 *
 */
export function isInt8Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: unknown): input is Int8Array<TArrayBuffer> {
  return typeOf(input) === 'int8array';
}

/**
 *
 * 检测 `input` 是否是  类型`uint8Array`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Uint8Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isUint8Array } from 'a-type-of-js';
 *
 * console.log(isUint8Array(new Uint8Array())) // true
 *
 * console.log(isUint8Array({})) // false
 * console.log(isUint8Array([])) // false
 * console.log(isUint8Array(1)) // false
 * ```
 *
 */
export function isUint8Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: unknown): input is Uint8Array<TArrayBuffer> {
  return typeOf(input) === 'uint8array';
}

/**
 *
 * 检测 `input` 是否是  类型`int16Array`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Int16Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isInt16Array } from 'a-type-of-js';
 *
 * console.log(isInt16Array(new Int16Array())) // true
 *
 * console.log(isInt16Array({})) // false
 * console.log(isInt16Array([])) // false
 * console.log(isInt16Array(1)) // false
 * ```
 *
 */
export function isInt16Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: unknown): input is Int16Array<TArrayBuffer> {
  return typeOf(input) === 'int16array';
}
/**
 *
 * 检测 `input` 是否是  类型`uint16Array`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Uint16Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 *
 * import  { isUint16Array } from 'a-type-of-js';
 *
 * console.log(isUint16Array(new Uint16Array())) // true
 *
 * console.log(isUint16Array({})) // false
 * console.log(isUint16Array([])) // false
 * console.log(isUint16Array(1)) // false
 * ```
 *
 */
export function isUint16Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: unknown): input is Uint16Array<TArrayBuffer> {
  return typeOf(input) === 'uint16array';
}

/**
 *
 * 检测 `input` 是否是  类型`uint32Array`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Uint32Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isUint32Array } from 'a-type-of-js';
 *
 * console.log(isUint32Array(new Uint32Array())) // true
 *
 * console.log(isUint32Array({})) // false
 * console.log(isUint32Array([])) // false
 * console.log(isUint32Array(1)) // false
 * ```
 *
 */
export function isUint32Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: unknown): input is Uint32Array<TArrayBuffer> {
  return typeOf(input) === 'uint32array';
}

/**
 *
 * 检测 `input` 是否是  类型`float32Array`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Float32Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isFloat32Array } from 'a-type-of-js';
 *
 * console.log(isFloat32Array(new Float32Array())) // true
 *
 * console.log(isFloat32Array({})) // false
 * console.log(isFloat32Array([])) // false
 * console.log(isFloat32Array(1)) // false
 * ```
 */
export function isFloat32Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: unknown): input is Float32Array<TArrayBuffer> {
  return typeOf(input) === 'float32array';
}

/**
 *
 * 检测 `input` 是否是  类型`float64Array`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Float64Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isFloat64Array } from 'a-type-of-js';
 *
 * console.log(isFloat64Array(new Float64Array())) // true
 *
 * console.log(isFloat64Array({})) // false
 * console.log(isFloat64Array([])) // false
 * console.log(isFloat64Array(1)) // false
 * ```
 */
export function isFloat64Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: unknown): input is Float64Array<TArrayBuffer> {
  return typeOf(input) === 'float64array';
}

/**
 *
 * 检测 `input` 是否是  类型`sharedArrayBuffer`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `SharedArrayBuffer` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isSharedArrayBuffer } from 'a-type-of-js';
 *
 * console.log(isSharedArrayBuffer(new SharedArrayBuffer(8))) // true
 *
 * console.log(isSharedArrayBuffer({})) // false
 *
 * ```
 */
export function isSharedArrayBuffer(
  input: unknown,
): input is SharedArrayBuffer {
  return typeOf(input) === 'sharedarraybuffer';
}

/**
 *
 * 检测 `input` 是否是  类型`uint8ClampedArray`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Uint8ClampedArray` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isUint8ClampedArray } from 'a-type-of-js';
 *
 * console.log(isUint8ClampedArray(new Uint8ClampedArray())) // true
 *
 * console.log(isUint8ClampedArray({})) // false
 * console.log(isUint8ClampedArray([])) // false
 * console.log(isUint8ClampedArray(1)) // false
 * ```
 *
 */
export function isUint8ClampedArray<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: unknown): input is Uint8ClampedArray<TArrayBuffer> {
  return typeOf(input) === 'uint8clampedarray';
}
