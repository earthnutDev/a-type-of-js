import {
  isAsyncFunction,
  isFunction,
  isGenerator,
  isGeneratorFunction,
  isPromise,
} from './isFunction';
import { testList } from './testData';

describe('isFunction', () => {
  describe('测试 isFunction', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isFunction(value)).toBe(expectedType === 'function');
    });
  });

  describe('测试 isAsyncFunction', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isAsyncFunction(value)).toBe(expectedType === 'asyncfunction');
    });
  });

  describe('测试 isPromise', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isPromise(value)).toBe(expectedType === 'promise');
    });
  });

  describe('测试 isGeneratorFunction', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isGeneratorFunction(value)).toBe(
        expectedType === 'generatorfunction',
      );
    });
  });

  describe('测试 isGenerator', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isGenerator(value)).toBe(expectedType === 'generator');
    });
  });
});
