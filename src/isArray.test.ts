import {
  isArray,
  isArrayBuffer,
  isBigInt64Array,
  isBigUint64Array,
  isFloat32Array,
  isFloat64Array,
  isInt16Array,
  isInt8Array,
  isSet,
  isSharedArrayBuffer,
  isUint16Array,
  isUint32Array,
  isUint8Array,
  isUint8ClampedArray,
  isWeakSet,
} from './isArray';
import { testList } from './testData';

describe('isNumber', () => {
  describe('isArray function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isArray(value)).toBe(expectedType === 'array');
    });
  });
  describe('isSet function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isSet(value)).toBe(expectedType === 'set');
    });
  });
  describe('isWeakSet function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isWeakSet(value)).toBe(expectedType === 'weakset');
    });
  });
  describe('isBigInt64Array function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isBigInt64Array(value)).toBe(expectedType === 'bigint64array');
    });
  });
  describe('isBigUint64Array function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isBigUint64Array(value)).toBe(expectedType === 'biguint64array');
    });
  });
  describe('isArrayBuffer function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isArrayBuffer(value)).toBe(expectedType === 'arraybuffer');
    });
  });
  describe('isFloat32Array function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isFloat32Array(value)).toBe(expectedType === 'float32array');
    });
  });
  describe('isFloat64Array function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isFloat64Array(value)).toBe(expectedType === 'float64array');
    });
  });
  describe('isInt16Array function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isInt16Array(value)).toBe(expectedType === 'int16array');
    });
  });
  describe('isInt8Array function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isInt8Array(value)).toBe(expectedType === 'int8array');
    });
  });
  describe('isUint16Array function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isUint16Array(value)).toBe(expectedType === 'uint16array');
    });
  });
  describe('isUint32Array function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isUint32Array(value)).toBe(expectedType === 'uint32array');
    });
  });
  describe('isUint8Array function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isUint8Array(value)).toBe(expectedType === 'uint8array');
    });
  });
  describe('isSharedArrayBuffer function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isSharedArrayBuffer(value)).toBe(
        expectedType === 'sharedarraybuffer',
      );
    });
  });
  describe('isUint8ClampedArray function', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isUint8ClampedArray(value)).toBe(
        expectedType === 'uint8clampedarray',
      );
    });
  });
});
