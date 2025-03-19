import { typeOf } from './typeOf';
/**************************************
 *
 * 当前数据是否为 Intl.Collator
 *
 * @param measuredData 待测试的数据
 * @returns boolean
 * @example
 *
 * ```ts
 * import { isIntlCollator } from 'a-type-of-js';
 *
 * console.log(isIntlCollator(new Intl.Collator())); // true
 * ```
 **************************************/
export function isIntlCollator(
  measuredData: unknown,
): measuredData is Intl.Collator {
  return typeOf(measuredData) === 'intl.collator';
}

/**************************************
 *
 * 当前数据是否为 Intl.DateTimeFormat
 *
 * @param measuredData 待测试的数据
 * @returns boolean
 *
 * @example
 *
 * ```ts
 * import { isIntlDateTimeFormat } from 'a-type-of-js';
 *
 * console.log(isIntlDateTimeFormat(new Intl.DateTimeFormat())); // true
 * ```
 **************************************/
export function isIntlDateTimeFormat(
  measuredData: unknown,
): measuredData is Intl.DateTimeFormat {
  return typeOf(measuredData) === 'intl.datetimeformat';
}

/**************************************
 *
 * 当前数据是否为 Intl.DisplayNames
 *
 * @param measuredData 待测试的数据
 * @returns boolean
 * @example
 *
 * ```ts
 * import { isIntlDisplayNames } from 'a-type-of-js';
 *
 * console.log(isIntlDisplayNames(new Intl.DisplayNames())); // true
 * ```
 *
 **************************************/
export function isIntlDisplayNames(
  measuredData: unknown,
): measuredData is Intl.DisplayNames {
  return typeOf(measuredData) === 'intl.displaynames';
}
/**************************************
 *
 * 当前数据是否为 Intl.DurationFormat
 *
 * @param measuredData 待测试的数据
 * @returns boolean
 * @example
 *
 * ```ts
 * import { isIntlDurationFormat } from 'a-type-of-js';
 *
 * ```
 *
 **************************************/
// export function isIntlDurationFormat(
//   measuredData: unknown,
// ): measuredData is Intl.DurationFormat {
//   return typeOf(measuredData) === 'intl.durationformat';
// }
/**************************************
 *
 * 当前数据是否为 Intl.ListFormat
 * @param measuredData 待测试的数据
 * @returns boolean
 * @example
 *
 * ```ts
 * import { isIntlListFormat } from 'a-type-of-js';
 *
 * console.log(isIntlListFormat(new Intl.ListFormat())); // true
 * ```
 **************************************/
export function isIntlListFormat(
  measuredData: unknown,
): measuredData is Intl.ListFormat {
  return typeOf(measuredData) === 'intl.listformat';
}

/**************************************
 *
 * 当前数据是否为 Intl.Locale
 *
 * @param measuredData 待测试的数据
 * @returns boolean
 *
 * @example
 *
 * ```ts
 * import { isIntlLocale } from 'a-type-of-js';
 *
 * console.log(isIntlLocale(new Intl.Locale())); // true
 * ```
 **************************************/
export function isIntlLocale(
  measuredData: unknown,
): measuredData is Intl.Locale {
  return typeOf(measuredData) === 'intl.locale';
}
/**************************************
 *
 * 当前数据是否为 Intl.NumberFormat
 *
 * @param measuredData 待测试的数据
 * @returns boolean
 *
 * @example
 *
 * ```ts
 * import { isIntlNumberFormat } from 'a-type-of-js';
 *
 * console.log(isIntlNumberFormat(new Intl.NumberFormat())); // true
 * ```
 *
 **************************************/
export function isIntlNumberFormat(
  measuredData: unknown,
): measuredData is Intl.NumberFormat {
  return typeOf(measuredData) === 'intl.numberformat';
}
