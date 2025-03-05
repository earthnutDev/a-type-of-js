import {
  typeOf,
  isString,
  isNumber,
  isNaN,
  isArray,
  isPromise,
} from '../index';

((a: string | number) => {
  if (isString(a)) {
    console.log(a.toUpperCase());
  } else {
    console.log(a.toExponential(1));
  }
  describe('typeOf function', () => {
    test.each([
      ['string', 'hello'],
      ['number', 42],
      ['bigint', 123n],
      ['boolean', true],
      ['null', null],
      ['undefined', undefined],
      ['symbol', Symbol('test')],
      ['function', () => {}],
      ['array', [1, 2, 3]],
    ])('should return %s for %p', (expectedType, value) => {
      expect(typeOf(value)).toBe(expectedType);
    });
  });
})(1);

describe('Type Detection Functions', () => {
  describe('typeOf function', () => {
    test.each([
      ['string', 'hello'],
      ['number', 42],
      ['bigint', 123n],
      ['boolean', true],
      ['null', null],
      ['undefined', undefined],
      ['symbol', Symbol('test')],
      ['function', () => {}],
      ['array', [1, 2, 3]],
      ['date', new Date()],
      ['set', new Set()],
      ['map', new Map()],
      ['regexp', /abc/],
      ['bigint64array', new BigInt64Array()],
      ['biguint64array', new BigUint64Array()],
      ['dataview', new DataView(new ArrayBuffer(8))],
      ['arraybuffer', new ArrayBuffer(8)],
      ['promise', Promise.resolve(true)],
    ])('should return %s for %p', (expectedType, value) => {
      expect(typeOf(value)).toBe(expectedType);
    });
  });

  describe('isString 验证为字符串', () => {
    test.each([
      ['hello', true],
      [42, false],
      [null, false],
      [undefined, false],
    ])('should return %p for %p', (value, expected) => {
      expect(isString(value)).toBe(expected);
    });
  });

  describe('isNumber function', () => {
    test.each([
      [42, true],
      ['42', false],
      [NaN, true], // Note: NaN is a special case
      [null, false],
    ])('should return %p for %p', (value, expected) => {
      expect(isNumber(value)).toBe(expected);
    });
  });

  describe('isNaN function', () => {
    test.each([
      [NaN, true],
      [42, false],
      ['NaN', false],
    ])('should return %p for %p', (value, expected) => {
      expect(isNaN(value)).toBe(expected);
    });
  });

  describe('isArray function', () => {
    test.each([
      [[1, 2, 3], true],
      [{}, false],
      [null, false],
    ])('should return %p for %p', (value, expected) => {
      expect(isArray(value)).toBe(expected);
    });
  });

  describe('isPromise function', () => {
    test.each([
      [Promise.resolve(true), true],
      [() => {}, false],
      [null, false],
    ])('should return %p for %p', (value, expected) => {
      expect(isPromise(value)).toBe(expected);
    });
  });
});
