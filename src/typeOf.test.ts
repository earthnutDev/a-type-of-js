import { testList } from './testData';
import { typeOf } from './typeOf';

describe('测试 typeOf 函数', () => {
  // typeOf 验证
  describe('typeOf function', () => {
    test.each(testList)('测试值 %p 应当返回 %s', (value, expectedType) => {
      expect(typeOf(value)).toBe(expectedType);
    });
  });
});
