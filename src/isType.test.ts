import { isUndefined } from 'a-type-of-js';
import { isType } from './isType';
import { testList } from './testData';

describe('测试是否为某数据类型', () => {
  describe('简单的代替 as', () => {
    expect(isType<string>('a')).toBe(true);
  });
  describe('以函数为媒', () => {
    test.each(testList)('测试值 %p 应当返回 %s', value => {
      expect(isType<typeof value>(value, () => true)).toBe(true);
    });
  });
  describe('以 boolean 为媒', () => {
    test.each(testList)('测试值 %p 应当返回 %s', value => {
      expect(isType<typeof value>(value, true)).toBe(true);
    });
  });
  describe('以 boolean 为媒', () => {
    test.each(testList)('测试值 %p 应当返回 %s', value => {
      expect(isType<typeof value>(value)).toBe(true);
    });
  });

  describe('测试参数可用', () => {
    const a: string | number = '10';

    expect(isType<string>(a, input => typeof input === 'string')).toBe(true);

    expect(isType<number>(a, input => typeof input === 'number')).toBe(true);

    /**  cn  */
    function cn(a: string | number) {
      if (a as string) {
        console.log('====================================');
        console.log(a.toString(), () => a.toString() === a);
        console.log('====================================');
      }

      if (isType<string>(a, a => !isUndefined(a.padEnd))) {
        console.log('====================================');
        console.log(a.charAt(1));
        console.log('====================================');
      }
    }

    cn(1);
    cn('1');
  });
});
