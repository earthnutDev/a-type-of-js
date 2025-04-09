import {
  isBusinessEmptyString,
  isEmptyString,
  isRegExp,
  isString,
} from './isString';
import { testList } from './testData';

describe(`字符串类型的验证`, () => {
  // isString 验证

  describe('isString 验证为字符串', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isString(value)).toBe(expectedType === 'string');
    });
  });
  describe('isRegExp 验证为正则表达式', () => {
    test.each(testList)('测试值  %p  时应返回  %p', (value, expectedType) => {
      expect(isRegExp(value)).toBe(expectedType === 'regexp');
    });
  });

  describe('isEmptyString function tests', () => {
    test('should return true for empty string literal', () => {
      // Arrange
      const emptyString = '';

      // Act
      const result = isEmptyString(emptyString);

      // Assert
      expect(result).toBe(true);
    });
    test('should return false for non-empty string', () => {
      // Arrange
      const input = 'hello';

      // Act
      const result = isEmptyString(input);

      // Assert
      expect(result).toBe(false);
    });
    test('should return true for String object with empty value', () => {
      // Arrange
      const emptyStringObject = new String('');

      // Act
      const result = isEmptyString(emptyStringObject);

      // Assert
      expect(result).toBe(true);
    });
    test('should return false for String object with non-empty value', () => {
      // Arrange
      const input = new String('hello');

      // Act
      const result = isEmptyString(input);

      // Assert
      expect(result).toBe(false);
    });
  });
  describe('isBusinessEmptyString function tests', () => {
    test('should return true for empty string literal', () => {
      // Arrange
      const emptyString = '';

      // Act
      const result = isBusinessEmptyString(emptyString);

      // Assert
      expect(result).toBe(true);
    });
    test('should return false for non-empty string', () => {
      // Arrange
      const input = 'hello';

      // Act
      const result = isBusinessEmptyString(input);

      // Assert
      expect(result).toBe(false);
    });
    test('should return true for String object with empty value', () => {
      // Arrange
      const emptyStringObject = new String('  ');

      // Act
      const result = isBusinessEmptyString(emptyStringObject);

      // Assert
      expect(result).toBe(true);
    });
    test('should return false for String object with non-empty value', () => {
      // Arrange
      const input = new String('hello');

      // Act
      const result = isBusinessEmptyString(input);

      // Assert
      expect(result).toBe(false);
    });
  });
});
