/**
 * Type-checking utilities for JavaScript native Intl types.
 *
 * @packageDocumentation
 * @module @a-type-of-js/intl
 * @license MIT
 */
import { typeOf } from './typeOf';
/**
 *
 * Detects whether the current  `input` is an `Intl.Collator`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Intl.Collator`, narrowing the type to `Intl.Collator` in TypeScript.
 * * @example
 *
 * ```ts
 * import { isIntlCollator } from 'a-type-of-js';
 *
 * console.log(isIntlCollator(new Intl.Collator())); // true
 *
 * console.log(isIntlCollator(new Intl.DateTimeFormat())); // false
 * ```
 */
export function isIntlCollator(input: unknown): input is Intl.Collator {
  return typeOf(input) === 'intl.collator';
}

/**
 *
 * Detects whether the current  `input` is an `Intl.DateTimeFormat`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Intl.DateTimeFormat`, narrowing the type to `Intl.DateTimeFormat` in TypeScript.
 *
 * * @example
 *
 * ```ts
 * import { isIntlDateTimeFormat } from 'a-type-of-js';
 *
 * console.log(isIntlDateTimeFormat(new Intl.DateTimeFormat())); // true
 *
 * console.log(isIntlDateTimeFormat('hello')); // false
 * console.log(isIntlDateTimeFormat(1)); // false
 * console.log(isIntlDateTimeFormat(true)); // false
 * ```
 */
export function isIntlDateTimeFormat(
  input: unknown,
): input is Intl.DateTimeFormat {
  return typeOf(input) === 'intl.datetimeformat';
}

/**
 *
 * Detects whether the current  `input` is an `Intl.DisplayNames`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Intl.DisplayNames`, narrowing the type to `Intl.DisplayNames` in TypeScript.
 * * @example
 *
 * ```ts
 * import { isIntlDisplayNames } from 'a-type-of-js';
 *
 * console.log(isIntlDisplayNames(new Intl.DisplayNames())); // true
 *
 * console.log(isIntlDisplayNames(new Intl.Locale())); // false
 * ```
 *
 */
export function isIntlDisplayNames(input: unknown): input is Intl.DisplayNames {
  return typeOf(input) === 'intl.displaynames';
}
/**
 *
 * Detects whether the current  `input` is an `Intl.DurationFormat`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Intl.DurationFormat`, narrowing the type to `Intl.DurationFormat` in TypeScript.
 * * @example
 *
 * ```ts
 * import { isIntlDurationFormat } from 'a-type-of-js';
 *
 * ```
 *
 */
// export function isIntlDurationFormat(
//   input: unknown,
// ): input is Intl.DurationFormat {
//   return typeOf(input) === 'intl.durationformat';
// }
/**
 *
 * Detects whether the current  `input` is an `Intl.ListFormat`
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Intl.ListFormat`, narrowing the type to `Intl.ListFormat` in TypeScript.
 * * @example
 *
 * ```ts
 * import { isIntlListFormat } from 'a-type-of-js';
 *
 * console.log(isIntlListFormat(new Intl.ListFormat())); // true
 *
 * console.log(isIntlListFormat(new Intl.DateTimeFormat())); // false
 * console.log(isIntlListFormat(1)); // false
 * console.log(isIntlListFormat('1')); // false
 * console.log(isIntlListFormat(null)); // false
 * ```
 */
export function isIntlListFormat(input: unknown): input is Intl.ListFormat {
  return typeOf(input) === 'intl.listformat';
}

/**
 *
 * Detects whether the current  `input` is an `Intl.Locale`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Intl.Locale`, narrowing the type to `Intl.Locale` in TypeScript.
 *
 * * @example
 *
 * ```ts
 * import { isIntlLocale } from 'a-type-of-js';
 *
 * console.log(isIntlLocale(new Intl.Locale())); // true
 *
 * console.log(isIntlLocale('en')); // false
 * console.log(isIntlLocale(1)); // false
 * ```
 */
export function isIntlLocale(input: unknown): input is Intl.Locale {
  return typeOf(input) === 'intl.locale';
}
/**
 *
 * Detects whether the current  `input` is an `Intl.NumberFormat`
 *
 * @param input - The value of the type to check.
 * @returns `true` if `input` is an instance of `Intl.NumberFormat`, narrowing the type to `Intl.NumberFormat` in TypeScript.
 *
 * * @example
 *
 * ```ts
 * import { isIntlNumberFormat } from 'a-type-of-js';
 *
 * console.log(isIntlNumberFormat(new Intl.NumberFormat())); // true
 *
 * console.log(isIntlNumberFormat(123)); // false
 * console.log(isIntlNumberFormat('123')); // false
 * console.log(isIntlNumberFormat(new Date())); // false
 * console.log(isIntlNumberFormat(new Date(0))); // false
 * ```
 *
 */
export function isIntlNumberFormat(input: unknown): input is Intl.NumberFormat {
  return typeOf(input) === 'intl.numberformat';
}
