/**
 * Type-checking utilities for JavaScript native array types.
 *
 * @packageDocumentation
 * @module @a-type-of-js/array
 * @license MIT
 */
import { typeOf } from './typeOf';

/**
 *
 * Detects whether the current  `input` is an `Array`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `ReferenceError`, narrowing the type to `ReferenceError` in TypeScript.
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
 * Detects whether the current  `input` is an `Set`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `ReferenceError`, narrowing the type to `ReferenceError` in TypeScript.
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
 * Detects whether the current  `input` is an `WeakSet`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `WeakSet`, narrowing the type to `WeakSet` in TypeScript.
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
 * Detects whether the current  `input` is an `Bigint64Array`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `BigInt64Array`, narrowing the type to `BigInt64Array` in TypeScript.
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
 * Detects whether the current  `input` is an `BigUint64Array`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `BigUint64Array`, narrowing the type to `BigUint64Array` in TypeScript.
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
 * Detects whether the current  `input` is an `ArrayBuffer`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `ArrayBuffer`, narrowing the type to `ArrayBuffer` in TypeScript.
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
 * Detects whether the current  `input` is an `int8Array`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Int8Array`, narrowing the type to `Int8Array` in TypeScript.
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
 * Detects whether the current  `input` is an `uint8Array`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Uint8Array`, narrowing the type to `Uint8Array` in TypeScript.
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
 * Detects whether the current  `input` is an `int16Array`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Int16Array`, narrowing the type to `Int16Array` in TypeScript.
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
 * Detects whether the current  `input` is an `uint16Array`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Uint16Array`, narrowing the type to `Uint16Array` in TypeScript.
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
 * Detects whether the current  `input` is an `uint32Array`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Uint32Array`, narrowing the type to `Uint32Array` in TypeScript.
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
 * Detects whether the current  `input` is an `float32Array`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Float32Array`, narrowing the type to `Float32Array` in TypeScript.
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
 * Detects whether the current  `input` is an `float64Array`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Float64Array`, narrowing the type to `Float64Array` in TypeScript.
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
 * Detects whether the current  `input` is an `sharedArrayBuffer`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `SharedArrayBuffer`, narrowing the type to `SharedArrayBuffer` in TypeScript.
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
 * Detects whether the current  `input` is an `uint8ClampedArray`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Uint8ClampedArray`, narrowing the type to `Uint8ClampedArray` in TypeScript.
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
