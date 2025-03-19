/**************************************
 *
 * 当前一个条件，判断是否为该类型
 *
 **************************************/
export function isType<T = string>(measureData: unknown): measureData is T;

export function isType<T = string>(
  measureData: unknown,
  judgingConditions: boolean | (() => boolean),
): measureData is T;
/**************************************
 *
 * 当前一个条件，判断是否为该类型
 *
 **************************************/

export function isType<T = string>(
  measureData: unknown,
  judgingConditions?: boolean | (() => boolean),
): measureData is T {
  if (judgingConditions === undefined) return true;

  if (typeof judgingConditions === 'function') {
    return judgingConditions();
  }
  return judgingConditions;
}
