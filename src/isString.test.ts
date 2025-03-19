import { isRegExp, isString } from './isString';
import { testList } from './testData';

describe(`字符串类型的验证`, () => {
  // isString 验证

  describe('isString 验证为字符串', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isString(value)).toBe(expectedType === 'string');
    });
  });
  describe('isRegExp 验证为正则表达式', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isRegExp(value)).toBe(expectedType === 'regexp');
    });
  });
});
