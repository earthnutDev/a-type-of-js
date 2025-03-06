import {
  typeOf,
  isString,
  isNumber,
  isNaN,
  isArray,
  isPromise,
  Typeof,
  isBigInt,
  isBigInt64Array,
  isBigUint64Array,
  isBoolean,
  isFloat64Array,
  isNull,
  isPlainObject,
  isSymbol,
  isUndefined,
  isInt16Array,
  isFloat32Array,
} from '../index';

/// 待测试的数据
const testData: {
  [x in Typeof]?: {
    type: Typeof;
    value: unknown;
  };
} = {
  string: {
    type: 'string',
    value: 'hello',
  },
  number: {
    type: 'number',
    value: 42,
  },
  bigint: {
    type: 'bigint',
    value: 123n,
  },
  boolean: {
    type: 'boolean',
    value: true,
  },
  null: {
    type: 'null',
    value: null,
  },
  undefined: {
    type: 'undefined',
    value: undefined,
  },
  symbol: {
    type: 'symbol',
    value: Symbol('test'),
  },
  function: {
    type: 'function',
    value: () => {},
  },
  array: {
    type: 'array',
    value: [1, 2, 3],
  },
  date: {
    type: 'date',
    value: new Date(),
  },
  set: {
    type: 'set',
    value: new Set(),
  },
  map: {
    type: 'map',
    value: new Map(),
  },
  regexp: {
    type: 'regexp',
    value: /abc/,
  },
  bigint64array: {
    type: 'bigint64array',
    value: new BigInt64Array(),
  },
  biguint64array: {
    type: 'biguint64array',
    value: new BigUint64Array(),
  },
  dataview: {
    type: 'dataview',
    value: new DataView(new ArrayBuffer(8)),
  },
  arraybuffer: {
    type: 'arraybuffer',
    value: new ArrayBuffer(8),
  },

  'intl.collator': {
    type: 'intl.collator',
    value: new Intl.Collator(),
  },
  'intl.datetimeformat': {
    type: 'intl.datetimeformat',
    value: new Intl.DateTimeFormat(),
  },
  'intl.displaynames': {
    type: 'intl.displaynames',
    value: new Intl.DisplayNames(['zh-Hans-CN'], { type: 'region' }),
  },
  'intl.listformat': {
    type: 'intl.listformat',
    value: new Intl.ListFormat(),
  },
  'intl.locale': {
    type: 'intl.locale',
    value: new Intl.Locale('zh-Hans-CN'),
  },
  'intl.numberformat': {
    type: 'intl.numberformat',
    value: new Intl.NumberFormat(),
  },
  'intl.pluralrules': {
    type: 'intl.pluralrules',
    value: new Intl.PluralRules(),
  },
  'intl.relativetimeformat': {
    type: 'intl.relativetimeformat',
    value: new Intl.RelativeTimeFormat(),
  },
  'intl.segmenter': {
    type: 'intl.segmenter',
    value: new Intl.Segmenter(),
  },
  object: {
    type: 'object',
    value: {},
  },
  int8array: {
    type: 'int8array',
    value: new Int8Array(),
  },
  uint8array: {
    type: 'uint8array',
    value: new Uint8Array(),
  },
  int16array: {
    type: 'int16array',
    value: new Int16Array(),
  },
  uint16array: {
    type: 'uint16array',
    value: new Uint16Array(),
  },
  float32array: {
    type: 'float32array',
    value: new Float32Array(),
  },
  float64array: {
    type: 'float64array',
    value: new Float64Array(),
  },
  int32array: {
    type: 'int32array',
    value: new Int32Array(),
  },
  uint32array: {
    type: 'uint32array',
    value: new Uint32Array(),
  },
  weakmap: {
    type: 'weakmap',
    value: new WeakMap(),
  },
  weakset: {
    type: 'weakset',
    value: new WeakSet(),
  },
  generatorfunction: {
    type: 'generatorfunction',
    value: function* () {},
  },
  generator: {
    type: 'generator',
    value: (function* () {
      yield 1;
      yield 2;
      yield 3;
    })(),
  },
  asyncfunction: {
    type: 'asyncfunction',
    value: async () => {},
  },
  promise: {
    type: 'promise',
    value: new Promise(() => 0),
  },
};
/// 自测是否可拦截 ts 类型安全守卫
((a: string | number | null) => {
  if (isString(a)) {
    console.log(a.toUpperCase());
  } else if (isNumber(a)) {
    console.log(a.toExponential(1));
  } else {
    console.log('data is null');
  }
})(1);

// 测试
describe('Type Detection Functions', () => {
  /**************************************
   *
   * 测试对象
   *
   **************************************/
  const testList = Object.values(testData).map(e => [e.type, e.value]);
  // typeOf 验证
  describe('typeOf function', () => {
    test.each(testList)('should return %s for %p', (expectedType, value) => {
      expect(typeOf(value)).toBe(expectedType);
    });
  });

  // isString 验证
  describe('isString 验证为字符串', () => {
    test.each(testList)('should return %p for %p', (expectedType, value) => {
      expect(isString(value)).toBe(expectedType === 'string');
    });
  });

  describe('isNumber 验证是否为数字', () => {
    test.each(testList)('should return %p for %p', (expectedType, value) => {
      expect(isNumber(value)).toBe(expectedType === 'number');
    });
  });

  describe('isNaN 验证是否为 NaN', () => {
    test.each(testList)('should return %p for %p', (expectedType, value) => {
      expect(isNaN(value)).toBe(expectedType === 'NaN');
    });
  });

  describe('isArray 验证是否为数组', () => {
    test.each(testList)('should return %p for %p', (expectedType, value) => {
      expect(isArray(value)).toBe(expectedType === 'array');
    });
  });

  describe('isPromise function', () => {
    test.each(testList)('should return %p for %p', (expectedType, value) => {
      expect(isPromise(value)).toBe(expectedType === 'promise');
    });
  });
  describe('isPlainObject function', () => {
    test.each(testList)('should return %p for %p', (expectedType, value) => {
      expect(isPlainObject(value)).toBe(expectedType === 'object');
    });
  });

  describe('isBoolean function', () => {
    test.each(testList)('should return %p for %p', (expectedType, value) => {
      expect(isBoolean(value)).toBe(expectedType === 'boolean');
    });
  });

  describe('isNull function', () => {
    test.each(testList)('should return %p for %p', (expectedType, value) => {
      expect(isNull(value)).toBe(expectedType === 'null');
    });
  });
  describe('isUndefined function', () => {
    test.each(testList)('should return %p for %p', (expectedType, value) => {
      expect(isUndefined(value)).toBe(expectedType === 'undefined');
    });
  });
  describe('isSymbol function', () => {
    test.each(testList)('should return %p for %p', (expectedType, value) => {
      expect(isSymbol(value)).toBe(expectedType === 'symbol');
    });
  });
  describe('isBigInt function', () => {
    test.each(testList)('should return %p for %p', (expectedType, value) => {
      expect(isBigInt(value)).toBe(expectedType === 'bigint');
    });
  });
  describe('isBigInt64Array function', () => {
    test.each(testList)('should return %p for %p', (expectedType, value) => {
      expect(isBigInt64Array(value)).toBe(expectedType === 'bigint64array');
    });
  });
  describe('isBigUint64Array function', () => {
    test.each(testList)('should return %p for %p', (expectedType, value) => {
      expect(isBigUint64Array(value)).toBe(expectedType === 'biguint64array');
    });
  });
  describe('isFloat64Array function', () => {
    test.each(testList)('should return %p for %p', (expectedType, value) => {
      expect(isFloat64Array(value)).toBe(expectedType === 'float64array');
    });
  });
  describe('isFloat32Array function', () => {
    test.each(testList)('should return %p for %p', (expectedType, value) => {
      expect(isFloat32Array(value)).toBe(expectedType === 'float32array');
    });
  });
  describe('isInt16Array function', () => {
    test.each(testList)('should return %p for %p', (expectedType, value) => {
      expect(isInt16Array(value)).toBe(expectedType === 'int16array');
    });
  });
});
