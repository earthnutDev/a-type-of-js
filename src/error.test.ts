import {
  isAggregateError,
  isError,
  isEvalError,
  isRangeError,
  isReferenceError,
  isSyntaxError,
  isTypeError,
  isURIError,
} from './error';
import { testList } from './testData';

describe('error 类型的判断', () => {
  // 模拟 typeOf 函数

  describe('isError function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isError(value)).toBe(expectedType === 'error');
    });
  });

  describe('isEvalError function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isEvalError(value)).toBe(expectedType === 'evalerror');
    });
  });
  describe('isRangeError function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isRangeError(value)).toBe(expectedType === 'rangeerror');
    });
  });

  describe('isSyntaxError function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isSyntaxError(value)).toBe(expectedType === 'syntaxerror');
    });
  });
  describe('isReferenceError function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isReferenceError(value)).toBe(expectedType === 'referenceerror');
    });
  });
  describe('isTypeError function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isTypeError(value)).toBe(expectedType === 'typeerror');
    });
  });
  describe('isURIError function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isURIError(value)).toBe(expectedType === 'urierror');
    });
  });
  describe('isAggregateError function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isAggregateError(value)).toBe(expectedType === 'aggregateerror');
    });
  });
});
