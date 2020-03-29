class DoublyNode {
    constructor(Data, Index, Next, Prev) {
        this.index = 0;
        this.WTS = 'node';
        this.data = Data;
        this.index = Index;
        this.next = Next !== undefined ? Next : null;
        this.prev = Prev !== undefined ? Prev : null;
    }
    get getData() {
        return this.data;
    }
    set setData(v) {
        this.data = v;
    }
    get getIndex() {
        return this.index;
    }
    set setIndex(v) {
        this.index = v;
    }
    get getNext() {
        return this.next;
    }
    set setNext(v) {
        this.next = v;
    }
    get getPrev() {
        return this.prev;
    }
    set setPrev(v) {
        this.prev = v;
    }
}
export default DoublyNode;
