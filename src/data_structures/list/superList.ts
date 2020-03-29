abstract class SuperList<T> {
  abstract AddAfter(after: T, node: T);
  abstract AddBefore(before: T, node: T);
  abstract AddFirst(node: T);
  abstract AddLast(node: T);
  abstract Clear();
  abstract Contains(node: T): boolean;
  // Finds the first node that contains the specified value.
  abstract Find(node: T, cb: (_: any) => void);
  // Finds the last node that contains the specified value.
  abstract FindLast(node: T, cb: (_: any) => void);
  abstract Remove(node: T);
  abstract RemoveFirst();
  abstract RemoveLast();
  abstract toArray(): T[];
}

export default SuperList
