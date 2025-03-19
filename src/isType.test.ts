import { isType } from './isType';
import { testList } from './testData';

describe('测试是否为某数据类型', () => {
  describe('以函数为媒', () => {
    test.each(testList)('测试值 %p 应当返回 %s', (value, expectedType) => {
      expect(isType<typeof value>(value, () => true)).toBe(true);
    });
  });
  describe('以 boolean 为媒', () => {
    test.each(testList)('测试值 %p 应当返回 %s', (value, expectedType) => {
      expect(isType<typeof value>(value, true)).toBe(true);
    });
  });
  describe('以 boolean 为媒', () => {
    test.each(testList)('测试值 %p 应当返回 %s', (value, expectedType) => {
      expect(isType<typeof value>(value)).toBe(true);
    });
  });
});
