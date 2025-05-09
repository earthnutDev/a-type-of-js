import {
  isDataView,
  isDate,
  isEmptyObject,
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

  describe('测试空对象', () => {
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject({ a: 1 })).toBe(false);
    expect(isEmptyObject(undefined)).toBe(false);
  });

  describe('测试使用原型继承', () => {
    const a = new Object();
    Object.setPrototypeOf(a, { a: 1 });

    expect(a['a']).toBe(1);
    delete a['a'];
    expect(a['a']).toBe(1);
    a['a'] = 10;
    expect(a['a']).toBe(10);
    expect(isEmptyObject(a)).toBe(false);
    delete a['a'];
    expect(a['a']).toBe(1);
    const b = Symbol('private');
    a[b] = 1;
    expect(isEmptyObject(a)).toBe(false);
    delete a[b];
    expect(isEmptyObject(a)).toBe(true);
    Object.defineProperties(a, {
      a: {
        value: 10,
        enumerable: false,
        writable: false,
        configurable: false,
      },
    });
    expect(Object.keys(a).length).toBe(0);
    expect(isEmptyObject(a)).toBe(false);
  });

  describe('测试类创建的实例继承属性', () => {
    /**    */
    class A {
      a: string;
      /**    */
      constructor(a: string) {
        this.a = a;
      }
    }
    /**    */
    class B extends A {
      /**    */
      constructor(a: string) {
        super(a);
      }
    }
    const a = new B('a');
    expect(isEmptyObject(a)).toBe(false);
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
