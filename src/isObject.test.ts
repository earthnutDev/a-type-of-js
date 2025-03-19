import {
  isDataView,
  isDate,
  isMap,
  isPlainObject,
  isWeakMap,
} from './isObject';
import { testList } from './testData';

describe('普通对象的验证', () => {
  describe('isPlainObject 验证是否为普通对象', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isPlainObject(value)).toBe(expectedType === 'object');
    });
  });
  describe('isDate 验证是否为日期', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isDate(value)).toBe(expectedType === 'date');
    });
  });
  describe('isDataView 验证是否为视图', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isDataView(value)).toBe(expectedType === 'dataview');
    });
  });
  describe('isMap 验证是否为 Map', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isMap(value)).toBe(expectedType === 'map');
    });
  });
  describe('isWeakMap 验证是否为弱引用 Map', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isWeakMap(value)).toBe(expectedType === 'weakmap');
    });
  });
});
