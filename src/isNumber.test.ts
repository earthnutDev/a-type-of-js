import {
  isNumber,
  isNaN,
  isBigInt,
  isPositiveInteger,
  isNegativeInteger,
  isZero,
} from './isNumber';
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
  describe('isBigInt 验证是否为 正整数', () => {
    expect(isPositiveInteger(10)).toBe(true);
    expect(isPositiveInteger(-10)).toBe(false);
    expect(isPositiveInteger('10')).toBe(false);
  });
  describe('isBigInt 验证是否为 负整数', () => {
    expect(isNegativeInteger(-10)).toBe(true);
    expect(isNegativeInteger(10)).toBe(false);
    expect(isNegativeInteger('10')).toBe(false);
  });
  describe('isBigInt 验证是否为 0️⃣', () => {
    expect(isZero(0)).toBe(true);
    expect(isZero(1)).toBe(false);
    expect(isZero(-1)).toBe(false);
    expect(isZero('1')).toBe(false);
  });
});
