type nodeType = SinglyNode | null;

class SinglyNode {
  private data: any;
  private index: number=0;
  private next: nodeType;

  public readonly WTS = 'node';

  constructor (Data: any, Index?: number, Next?: nodeType) {
    this.data = Data
    this.index = Index
    this.next = Next !== undefined ? Next : null
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
}

export default SinglyNode
