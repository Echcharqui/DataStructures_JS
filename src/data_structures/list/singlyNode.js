class SinglyNode {
    constructor(Data, Index, Next) {
        this.index = 0;
        this.WTS = 'node';
        this.data = Data;
        this.index = Index;
        this.next = Next !== undefined ? Next : null;
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
}
export default SinglyNode;
