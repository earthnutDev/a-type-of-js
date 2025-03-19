import { isNull, isUndefined } from './isNull';
import { testList } from './testData';

describe('isNull', () => {
  describe('isNull function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isNull(value)).toBe(expectedType === 'null');
    });
  });

  describe('isUndefined function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isUndefined(value)).toBe(expectedType === 'undefined');
    });
  });
});
