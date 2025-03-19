import { isNumber, isNaN, isBigInt } from './isNumber';
import { testList } from './testData';

describe('数值相关的验证', () => {
  describe('isNumber 验证是否为数字', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isNumber(value)).toBe(expectedType === 'number');
    });
  });

  describe('isNaN 验证是否为 NaN', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isNaN(value)).toBe(expectedType === 'NaN');
    });
  });

  describe('isBigInt 验证是否为 NaN', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isBigInt(value)).toBe(expectedType === 'bigint');
    });
  });
});
