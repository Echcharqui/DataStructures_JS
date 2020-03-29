import { DoublyLinkedList } from "./data_structures/list";
let list = new DoublyLinkedList("alpha", "beta");
list.AddLast("zolo");
list.AddFirst("whisky");
list.AddFirst("whisky");
list.forEach(node => {
    console.log({ index: node.getIndex, data: node.getData });
});
console.log(list.length);
list.AddBefore("zolo", "bravo");
list.forEach(node => {
    console.log({ index: node.getIndex, data: node.getData });
});
console.log(list.length);
list.forEachBW(node => {
    console.log({ index: node.getIndex, data: node.getData });
});
console.log(list.length);
// list.Clear()
// list.forEachBW(node => {
//   console.log({ index: node.getIndex, data: node.getData });
// });
// console.log(list.length);
console.log(list.Contains("x"));
list.Find("whisky", node => {
    console.log({
        index: node.getIndex,
        data: node.getData,
        next: node.getNext != null ? node.getNext.getData : null,
        prev: node.getPrev != null ? node.getPrev.getData : null
    });
});
console.log("\t-the last ======>");
list.FindLast("whisky", node => {
    console.log({
        index: node.getIndex,
        data: node.getData,
        next: node.getNext != null ? node.getNext.getData : null,
        prev: node.getPrev != null ? node.getPrev.getData : null
    });
});
list.Clear();
console.log(list.length);
list.AddFirst('booom');
list.AddLast("romeo");
list.AddFirst("siera");
list.forEach(node => {
    console.log({ index: node.getIndex, data: node.getData });
});
console.log(list.length);
list.RemoveLast();
list.AddLast("zolo");
list.AddFirst("whisky");
list.forEach(node => {
    console.log({ index: node.getIndex, data: node.getData });
});
console.log(list.length);
const tableau = list.toArray();
console.log(tableau);
