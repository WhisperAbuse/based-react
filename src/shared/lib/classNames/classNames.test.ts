import { describe, expect, test } from '@jest/globals';
import cx from './index';

describe('merge classNames', () => {
  test('only default arg', () => {
    const testCase = cx('default');
    const result = 'default';
    expect(testCase).toBe(result);
  });

  test('remove extra spaces', () => {
    const testCase = cx('  default  ');
    const result = 'default';
    expect(testCase).toBe(result);
  });

  test('default and mods args', () => {
    const testCase = cx('default', { hovered: true });
    const result = 'default hovered';
    expect(testCase).toBe(result);
  });

  test('default, mods, additional args', () => {
    const testCase = cx('default', { hovered: true, selected: true }, [
      'add1',
      'add2',
    ]);
    const result = 'default hovered selected add1 add2';
    expect(testCase).toBe(result);
  });

  test('default, mods, additional args | with false mod', () => {
    const testCase = cx('default', { hovered: true, selected: false }, [
      'add1',
      'add2',
    ]);
    const result = 'default hovered add1 add2';
    expect(testCase).toBe(result);
  });
});
