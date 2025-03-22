/**
 * Type-checking utilities for JavaScript native function types.
 *
 * @packageDocumentation
 * @module @a-type-of-js/function
 * @license MIT
 */
import { typeOf } from './typeOf';

/**
 *
 * Detects whether the current  `input` is an `function`
 *
 * Function classification:
 * - Ordinary functions
 * - An asynchronous function annotated by `async`
 * - Generator function annotated by `*`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `function`, narrowing the type to `function` in TypeScript.
 * @example
 *
 * ```ts
 * import { isFunction } from 'a-type-of-js';
 *
 * console.log(isFunction(() => {})); // true
 *
 * console.log(isFunction(async () => {})); // false
 * console.log(isFunction(function* () {})); // false
 * ```
 */
export function isFunction<T extends () => void>(input: unknown): input is T {
  return 'function' === typeOf(input);
}

/**
 *
 * Detects whether the current  `input` is an `Promise`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Promise`, narrowing the type to `Promise` in TypeScript.
 * @example
 *
 * ```ts
 * import { isPromise } from 'a-type-of-js';
 *
 * console.log(isPromise(new Promise(() => {}))); // true
 * console.log(isPromise(() => {})); // false
 * ```
 */
export function isPromise<T>(input: unknown): input is Promise<T> {
  return typeOf(input) === 'promise';
}
/**
 *
 * Detects whether the current  `input` is an `AsyncFunction`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `async function`, narrowing the type to `async function` in TypeScript.
 * @example
 *
 * ```ts
 * import { isAsyncFunction } from 'a-type-of-js';
 *
 * console.log(isAsyncFunction(async () => {})); // true
 * console.log(isAsyncFunction(() => {})); // false
 * ```
 */
export function isAsyncFunction<T extends () => void>(
  input: unknown,
): input is () => Promise<T> {
  return typeOf(input) === 'asyncfunction';
}

/**
 *
 * Detects whether the current  `input` is an `GeneratorFunction`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `generator function`, narrowing the type to `generator function` in TypeScript.
 * @example
 *
 * ```ts
 * import { isGeneratorFunction } from 'a-type-of-js';
 *
 * console.log(isGeneratorFunction(function* () {})); // true
 * console.log(isGeneratorFunction(() => {})); // false
 * ```
 *
 */
export function isGeneratorFunction(
  input: unknown,
): input is GeneratorFunction {
  return typeOf(input) === 'generatorfunction';
}

/**
 *
 * Detects whether the current  `input` is an `Generator`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Generator`, narrowing the type to `Generator` in TypeScript.
 * @example
 *
 * ```ts
 * import { isGenerator } from 'a-type-of-js';
 *
 * const log = (str) => console.log(str);
 * const foo = function* () {
 *  yield "a";
 *  yield "b";
 *  yield "c";
 * }
 *
 * const gen = foo();
 *
 * log(gen.next().value);  // a
 * log(gen.next().value);  // b
 * log(gen.next().value);  // c
 *
 * console.log(isGenerator(foo)); // false
 * console.log(isGenerator(gen)); // true
 *
 * ```
 */
export function isGenerator(input: unknown): input is Generator {
  return typeOf(input) === 'generator';
}
