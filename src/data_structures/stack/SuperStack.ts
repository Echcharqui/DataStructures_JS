abstract class SuperStack<T> {
  abstract push(value: T): number;
  abstract pop(): number;
  abstract pick(): T;
  abstract clear();
  abstract contains(value: T): boolean;
  abstract copyToArray(array: T[], startIndex?: number);
}
export default SuperStack