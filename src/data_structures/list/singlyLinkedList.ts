import SuperList from './superList'
import SinglyNode from './singlyNode'

interface border {
  linkTo: SinglyNode | null;
}

class SinglyLinkedList<T> extends SuperList<T> {
  private _length: number = 0;
  private head: border = {
    linkTo: null
  };

  private next: SinglyNode | null = null;
  private prev: SinglyNode | null = null;
  private current: SinglyNode | null = null;

  constructor (...elements: T[]) {
    super()
    if (elements !== undefined) {
      this.setElement(elements)
    }
  }

  public get length (): number {
    return this._length
  }

  // add element in the beginning !
  AddFirst (data: T) {
    let NewItem = new SinglyNode(data)
    if (this.head.linkTo !== null) {
      this.current = this.head.linkTo
      NewItem.setNext = this.current
      this.head.linkTo = NewItem
      this._length += 1
      this.current = this.head.linkTo
      this.updateIndexing(0, this.head.linkTo)
    } else {
      NewItem.setIndex = 0
      this.head.linkTo = NewItem
      this._length += 1
    }
    NewItem = null
    this.destroyer()
  }

  // add element to the last !
  AddLast (data: T) {
    const newSinglyNode = new SinglyNode(data)
    if (this.head.linkTo !== null) {
      this.current = this.head.linkTo

      while (this.current.getNext !== null) {
        this.current = this.current.getNext
      }

      const index = this.current.getIndex + 1

      newSinglyNode.setIndex = index
      this.current.setNext = newSinglyNode
      this._length += 1
    } else {
      newSinglyNode.setIndex = 0
      this.head.linkTo = newSinglyNode
      this._length += 1
    }
    this.destroyer()
  }

  // add element after a geving element sepecifiyed by index or value !
  AddAfter (after: T, data: T) {
    const N = new SinglyNode(data)
    if (this.head.linkTo !== null) {
      this.current = this.head.linkTo
      for (let i = 0; i < this._length; i++) {
        if (this.current.getData === after) {
          this.next = this.current.getNext
          if (this.current.getNext !== null) {
            N.setNext = this.next
            this.current.setNext = N
            this._length += 1
            this.updateIndexing(this.current.getIndex, this.current)
            break
          } else {
            this.AddLast(data)
            break
          }
        }
        this.current = this.current.getNext
      }
    }
  }

  // add element before a geving element specifiyed by index or value !
  AddBefore (before: T, data: T) {
    const N = new SinglyNode(data)
    if (this.head.linkTo !== null) {
      this.current = this.head.linkTo
      this.prev = null
      for (let i = 0; i < this._length; i++) {
        if (this.current.getData === before) {
          N.setNext = this.current
          if (this.prev !== null) {
            this.prev.setNext = N
            this._length += 1
            this.updateIndexing(this.prev.getIndex, this.prev)
          } else {
            this.AddFirst(data)
          }
          break
        }

        this.prev = this.current
        this.current = this.current.getNext
      }
    }
  }

  // clear the list !
  Clear () {
    if (this.head.linkTo !== null) {
      this.current = this.head.linkTo
      for (let i = 0; i < this._length; i++) {
        const track = this.current.getNext
        if (this.current !== null) {
          this.current.setNext = null
          this.current = null
          this.current = track
        }
      }
      this.head.linkTo = null
      this._length = 0
      this.destroyer()
    }
  }

  // searching if the list contain the geving value
  Contains (value: T): boolean {
    this.current = this.head.linkTo
    for (let i = 0; i < this._length; i++) {
      if (this.current.getData === value) {
        return true
      }
      this.current = this.current.getNext
    }
    return false
  }

  // Finds the first SinglyNode that contains the specified value.
  Find (value: T, cb: (_: SinglyNode | null) => void) {
    this.current = this.head.linkTo
    for (let i = 0; i < this._length; i++) {
      if (this.current.getData === value) {
        cb(this.current)
        break
      }
      this.current = this.current.getNext
    }
  }

  // Finds the last SinglyNode that contains the specified value.
  FindLast (value: T, cb: (_: SinglyNode | null) => void) {
    this.current = this.head.linkTo
    let v: SinglyNode | null = null
    for (let i = 0; i < this._length; i++) {
      if (this.current.getData === value) {
        v = this.current
      }
      this.current = this.current.getNext
    }
    if (v !== null) {
      cb(v)
    }
  }

  // Remove the geving value !
  Remove (value: T) {
    this.current = this.head.linkTo
    this.prev = null
    for (let i = 0; i < this._length; i++) {
      if (this.current.getData === value) {
        if (this.prev !== null) {
          this.prev.setNext = this.current.getNext
          this.current.setNext = null
          this.current = null
          this.current = this.prev
          this._length -= 1
          this.updateIndexing(this.current.getIndex, this.current)
        } else {
          this.head.linkTo = this.current.getNext
          this.current.setNext = null
          this.current = this.head.linkTo
          this._length -= 1
          this.updateIndexing(0, this.current)
        }
        break
      }
      this.prev = this.current
      this.current = this.current.getNext
    }
  }

  // Remove the first element from the list !
  RemoveFirst () {
    this.current = this.head.linkTo
    if (this.current !== null) {
      this.head.linkTo = this.current.getNext
      this.current.setNext = null
      this._length -= 1
      this.updateIndexing(0, this.head.linkTo)
    }
  }

  // Removing the last element od the list !
  RemoveLast () {
    this.current = this.head.linkTo
    if (this.current !== null) {
      for (let i = 0; i < this._length; i++) {
        if (this.current.getNext === null) {
          this.prev.setNext = null
          this._length -= 1
          this.destroyer()
          break
        }
        this.prev = this.current
        this.current = this.current.getNext
      }
    }
  }

  // Put all list elements in a array !
  toArray (): T[] {
    if (this.head.linkTo !== null) {
      this.current = this.head.linkTo
      const content: T[] = []
      for (let i = 0; i < this._length; i++) {
        content.push(this.current.getData)
        this.current = this.current.getNext
      }
      this.destroyer()
      return content
    }
    return []
  }

  // browsing into the list SinglyNodes !
  forEach (cb: (_: SinglyNode | null) => void) {
    let N: SinglyNode | null = this.head.linkTo
    while (N !== null) {
      cb(N)
      N = N.getNext
    }
  }

  // private function for pushing elements giving to the constructor on the initialisition
  private setElement (data) {
    data.forEach(element => {
      this.AddLast(element)
    })
  }

  // private func to clear the memory from the unUsed instances !
  private destroyer () {
    this.current = null
    this.next = null
    this.prev = null
  }

  // private func O(N) complexity to reset the elements index !
  private updateIndexing (index: number, Node: SinglyNode) {
    this.current = Node
    for (let i = index; i < this._length; i++) {
      this.current.setIndex = i
      this.current = this.current.getNext
    }
    this.destroyer()
  }
}

export default SinglyLinkedList
