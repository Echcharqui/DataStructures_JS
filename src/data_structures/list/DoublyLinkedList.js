import SuperList from './superList';
import DoublyNode from './DoublyNode';
class DoublyLinkedLIst extends SuperList {
    constructor(...elements) {
        super();
        this._length = 0;
        this.head = {
            linkTo: null
        };
        this.tail = {
            linkTo: null
        };
        this.next = null;
        this.prev = null;
        this.current = null;
        if (elements !== undefined) {
            this.setElement(elements);
        }
    }
    get length() {
        return this._length;
    }
    // add element in the beginning !
    AddFirst(data) {
        let NewItem = new DoublyNode(data);
        if (this.head.linkTo !== null) {
            this.current = this.head.linkTo;
            NewItem.setNext = this.current;
            this.current.setPrev = NewItem;
            this.head.linkTo = NewItem;
            this._length += 1;
            this.current = this.head.linkTo;
            this.updateIndexing(0, this.head.linkTo);
        }
        else {
            NewItem.setIndex = 0;
            this.head.linkTo = NewItem;
            this.tail.linkTo = NewItem;
            this._length += 1;
        }
        NewItem = null;
        this.destroyer();
    }
    // add element to the last !
    AddLast(data) {
        const newItem = new DoublyNode(data);
        if (this.tail.linkTo !== null) {
            this.current = this.tail.linkTo;
            this.current.setNext = newItem;
            newItem.setPrev = this.current;
            newItem.setIndex = this._length;
            this.tail.linkTo = newItem;
            this._length += 1;
        }
        else {
            newItem.setIndex = 0;
            this.tail.linkTo = newItem;
            this.head.linkTo = newItem;
            this._length += 1;
        }
        this.destroyer();
    }
    // add element after a geving element sepecifiyed by index or value !
    AddAfter(after, data) {
        const N = new DoublyNode(data);
        if (this.head.linkTo !== null) {
            this.current = this.head.linkTo;
            for (let i = 0; i < this._length; i++) {
                if (this.current.getData === after) {
                    this.next = this.current.getNext;
                    if (this.current.getNext !== null) {
                        N.setNext = this.next;
                        this.next.setPrev = N;
                        N.setPrev = this.current;
                        this.current.setNext = N;
                        this._length += 1;
                        this.updateIndexing(this.current.getIndex, this.current);
                        break;
                    }
                    else {
                        this.AddLast(data);
                        break;
                    }
                }
                this.current = this.current.getNext;
            }
        }
    }
    // add element before a geving element specifiyed by index or value !
    AddBefore(before, data) {
        const N = new DoublyNode(data);
        if (this.head.linkTo !== null) {
            this.current = this.head.linkTo;
            for (let i = 0; i < this._length; i++) {
                if (this.current.getData === before) {
                    this.prev = this.current.getPrev;
                    if (this.prev !== null) {
                        N.setNext = this.current;
                        N.setPrev = this.prev;
                        this.prev.setNext = N;
                        this.current.setPrev = N;
                        this._length += 1;
                        this.updateIndexing(this.prev.getIndex, this.prev);
                    }
                    else {
                        this.AddFirst(data);
                    }
                    break;
                }
                this.current = this.current.getNext;
            }
        }
    }
    // clear the list !
    Clear() {
        if (this.head.linkTo !== null) {
            this.current = this.head.linkTo;
            for (let i = 0; i < this._length; i++) {
                const track = this.current.getNext;
                if (this.current !== null) {
                    this.current.setNext = null;
                    this.current = null;
                    this.current = track;
                }
            }
            this.head.linkTo = null;
            this.tail.linkTo = null;
            this._length = 0;
            this.destroyer();
        }
    }
    // searching if the list contain the geving value
    Contains(value) {
        this.current = this.head.linkTo;
        for (let i = 0; i < this._length; i++) {
            if (this.current.getData === value) {
                return true;
            }
            this.current = this.current.getNext;
        }
        return false;
    }
    // Finds the first SinglyNode that contains the specified value.
    Find(value, cb) {
        this.current = this.head.linkTo;
        for (let i = 0; i < this._length; i++) {
            if (this.current.getData === value) {
                cb(this.current);
                break;
            }
            this.current = this.current.getNext;
        }
    }
    // Finds the last SinglyNode that contains the specified value.
    FindLast(value, cb) {
        this.current = this.head.linkTo;
        let v = null;
        for (let i = 0; i < this._length; i++) {
            if (this.current.getData === value) {
                v = this.current;
            }
            this.current = this.current.getNext;
        }
        if (v !== null) {
            cb(v);
        }
    }
    // Remove the geving value !
    Remove(value) {
        this.current = this.head.linkTo;
        for (let i = 0; i < this._length; i++) {
            if (this.current.getData === value) {
                this.prev = this.current.getPrev;
                this.next = this.current.setNext;
                if (this.prev !== null && this.next != null) {
                    this.prev.setNext = this.next;
                    this.next.setPrev = this.prev;
                    this.current.setNext = null;
                    this.current.setPrev = null;
                    this._length -= 1;
                    this.updateIndexing(this.prev.getIndex, this.prev);
                }
                else if (this.prev === null && this.next !== null) {
                    this.RemoveFirst();
                }
                else if (this.prev !== null && this.next === null) {
                    this.RemoveLast();
                }
                break;
            }
            this.current = this.current.getNext;
        }
    }
    // Remove the first element from the list !
    RemoveFirst() {
        this.current = this.head.linkTo;
        this.next = this.current.getNext;
        if (this.current !== null) {
            if (this.next !== null) {
                this.head.linkTo = this.next;
                this.next.setPrev = null;
                this._length -= 1;
                this.updateIndexing(0, this.next);
            }
            else if (this.next === null) {
                this.head.linkTo = null;
                this.tail.linkTo = null;
                this._length -= 1;
                this.destroyer();
            }
        }
    }
    // Removing the last element od the list !
    RemoveLast() {
        this.current = this.tail.linkTo;
        this.prev = this.current.getPrev;
        if (this.current !== null) {
            if (this.prev !== null) {
                this.tail.linkTo = this.prev;
                this.prev.setNext = null;
                this._length -= 1;
                this.destroyer();
            }
            else if (this.prev === null) {
                this.head.linkTo = null;
                this.tail.linkTo = null;
                this._length -= 1;
                this.destroyer();
            }
        }
    }
    // Put all list elements in a array !
    toArray() {
        if (this.head.linkTo !== null) {
            this.current = this.head.linkTo;
            const content = [];
            for (let i = 0; i < this._length; i++) {
                content.push(this.current.getData);
                this.current = this.current.getNext;
            }
            this.destroyer();
            return content;
        }
        return [];
    }
    // browsing into the list SinglyNodes !
    forEach(cb) {
        let N = this.head.linkTo;
        while (N !== null) {
            cb(N);
            N = N.getNext;
        }
    }
    forEachBW(cb) {
        let N = this.tail.linkTo;
        while (N !== null) {
            cb(N);
            N = N.getPrev;
        }
    }
    // private function for pushing elements giving to the constructor on the initialisition
    setElement(data) {
        data.forEach(element => {
            this.AddLast(element);
        });
    }
    // private func to clear the memory from the unUsed instances !
    destroyer() {
        this.current = null;
        this.next = null;
        this.prev = null;
    }
    // private func O(N) complexity to reset the elements index !
    updateIndexing(index, Node) {
        this.current = Node;
        for (let i = index; i < this._length; i++) {
            this.current.setIndex = i;
            this.current = this.current.getNext;
        }
        this.destroyer();
    }
}
export default DoublyLinkedLIst;
