import { isBoolean, isFalse, isTrue } from './isBoolean';
import { testList } from './testData';

describe('isNumber', () => {
  describe('isBoolean function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isBoolean(value)).toBe(expectedType === 'boolean');
    });
  });

  describe('isTrue', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isTrue(value)).toBe(expectedType === 'boolean' && value === true);
      expect(isFalse(value)).toBe(
        expectedType === 'boolean' && value === false,
      );
    });
  });
});
