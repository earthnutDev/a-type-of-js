import {
  isIntlCollator,
  isIntlDateTimeFormat,
  isIntlDisplayNames,
  isIntlListFormat,
  isIntlLocale,
  isIntlNumberFormat,
} from './intl';
import { testList } from './testData';

describe('intl 类型数据的判断', () => {
  describe('isIntlCollator function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isIntlCollator(value)).toBe(expectedType === 'intl.collator');
    });
  });
  describe('isIntlDateTimeFormat function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isIntlDateTimeFormat(value)).toBe(
        expectedType === 'intl.datetimeformat',
      );
    });
  });
  describe('isIntlDisplayNames function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isIntlDisplayNames(value)).toBe(
        expectedType === 'intl.displaynames',
      );
    });
  });
  describe('isIntlDisplayNames function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isIntlListFormat(value)).toBe(expectedType === 'intl.listformat');
    });
  });
  describe('isIntlLocale function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isIntlLocale(value)).toBe(expectedType === 'intl.locale');
    });
  });
  describe('isIntlNumberFormat function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isIntlNumberFormat(value)).toBe(
        expectedType === 'intl.numberformat',
      );
    });
  });
});
