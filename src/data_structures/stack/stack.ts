import SuperStack from './SuperStack'

class Stack<T> extends SuperStack<T> {
  private stackSize: number = null;
  private top: number = -1;
  private stack: T[] = null;
  private isDynamic = null;

  public get Count (): number {
    return this.top + 1
  }

  constructor (size?: number) {
    super()
    if (size) {
      this.stackSize = size
      this.stack = new Array(size)
      this.isDynamic = false
    } else {
      this.stack = new Array()
      this.isDynamic = true
    }
  }

  // Add an element in the stack !
  public push (value: T): number {
    if (this.isDynamic) {
      this.stack.push(value)
      this.top += 1
      return 1
    } else {
      if (this.top === this.stackSize - 1) {
        throw new Error(
          "\t-Stack overflow you can't add values to this stack anymore !!\n\t-POP() a value(s) for more free space in the stack "
        )
      } else {
        this.stack.push(value)
        this.top += 1

        return 1
      }
    }
  }

  // remove the last pushed element in the stack !
  public pop (): number {
    if (this.top > -1) {
      this.stack.pop()
      this.top -= 1
      return 1
    }
    return -1
  }

  // get the last pushed element in the stack !
  public pick (): T {
    if (this.top > -1) {
      const element = this.stack[this.top]
      return element
    }
    return null
  }

  // remove all elements from the stack !
  public clear () {
    if (this.top > -1) {
      let desc = this.top
      for (let i = 0; i <= this.top; i++) {
        this.stack.pop()
        desc -= 1
      }
      this.top = desc
    }
  }

  // seraching throw the stack elements if the geving value exist
  public contains (value: T): boolean {
    let exist = false
    if (this.top > -1) {
      for (let i = 0; i <= this.top; i++) {
        if (this.stack[i] === value) {
          exist = true
          break
        }
      }
    }
    return exist
  }

  // copy the stack contents to the geving array !
  public copyToArray (array: T[], startIndex?: number) {
    if (this.top > -1) {
      for (let i = startIndex || 0; i <= this.top; i++) {
        array.push(this.stack[i])
      }
    }
  }
}

export default Stack
