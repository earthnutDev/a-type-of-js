import { isSymbol } from './isSymbol';
import { testList } from './testData';

describe('特殊类型数据的验证', () => {
  describe('isSymbol function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isSymbol(value)).toBe(expectedType === 'symbol');
    });
  });
});
