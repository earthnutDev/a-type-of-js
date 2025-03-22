import { Typeof } from './types';

/// Arbitrary data
export const testData: {
  [x in Typeof]: {
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
  /// Intl.DurationFormat 规则较新，暂不适用
  // 'intl.durationformat': {
  //   type: 'intl.durationformat',
  //   value: new Intl.DurationFormat(),
  // },
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
  error: {
    type: 'error',
    value: new Error('test'),
  },
  aggregateerror: {
    type: 'aggregateerror',
    value: new AggregateError([new Error('test')]),
  },
  referenceerror: {
    type: 'referenceerror',
    value: new ReferenceError('test'),
  },
  syntaxerror: {
    type: 'syntaxerror',
    value: new SyntaxError('test'),
  },
  typeerror: {
    type: 'typeerror',
    value: new TypeError('test'),
  },
  urierror: {
    type: 'urierror',
    value: new URIError('test'),
  },
  evalerror: {
    type: 'evalerror',
    value: new EvalError('test'),
  },
  sharedarraybuffer: {
    type: 'sharedarraybuffer',
    value: new SharedArrayBuffer(8),
  },
  audiobuffer: {
    type: 'string',
    value: '',
    // value: new AudioBuffer({
    //   numberOfChannels: 1,
    //   length: 1,
    //   sampleRate: 5000,
    // }),
  },
  uint8clampedarray: {
    type: 'uint8clampedarray',
    value: new Uint8ClampedArray(),
  },
  rangeerror: {
    type: 'rangeerror',
    value: new RangeError('test'),
  },
};

/**
 *
 * 测试对象
 *
 */
export const testList = Object.values(testData).map(e => [e.value, e.type]);
