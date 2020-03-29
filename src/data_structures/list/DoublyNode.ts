type nodeType = DoublyNode | null;

class DoublyNode {
  private data: any;
  private index: number=0;
  private next: nodeType;
  private prev: nodeType;

  public readonly WTS = 'node';

  constructor (Data: any, Index?: number, Next?: nodeType, Prev?: nodeType) {
    this.data = Data
    this.index = Index
    this.next = Next !== undefined ? Next : null
    this.prev = Prev !== undefined ? Prev : null
  }

  public get getData (): any {
    return this.data
  }

  public set setData (v: any) {
    this.data = v
  }

  public get getIndex (): number {
    return this.index
  }

  public set setIndex (v: number) {
    this.index = v
  }

  public get getNext (): nodeType {
    return this.next
  }

  public set setNext (v: nodeType) {
    this.next = v
  }

  public get getPrev (): nodeType {
    return this.prev
  }

  public set setPrev (v: nodeType) {
    this.prev = v
  }
}

export default DoublyNode
