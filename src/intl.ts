/**************************************
 *
 * 当前数据是否为 Intl.Collator
 *
 **************************************/

import { typeOf } from './typeOf';

export function isIntlCollator(
  measuredData: unknown,
): measuredData is Intl.Collator {
  return typeOf(measuredData) === 'intl.collator';
}

/**************************************
 *
 * 当前数据是否为 Intl.DateTimeFormat
 *
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
 **************************************/
// export function isIntlDurationFormat(
//   measuredData: unknown,
// ): measuredData is Intl.DurationFormat {
//   return typeOf(measuredData) === 'intl.durationformat';
// }
/**************************************
 *
 * 当前数据是否为 Intl.ListFormat
 *
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
 **************************************/
export function isIntlNumberFormat(
  measuredData: unknown,
): measuredData is Intl.NumberFormat {
  return typeOf(measuredData) === 'intl.numberformat';
}
