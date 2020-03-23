import node from "./data_structures/list/node";

let my_node = new node("me", 0);

console.log(`the next ${my_node.getNext}`);
console.log(`the prev ${my_node.getPrev}`);

my_node.setPrev = new node("hamza", 1);

console.log(`the next ${my_node.getNext}`);
console.log(`the prev ${my_node.getPrev.getData}`);

my_node.setPrev = null;

console.log(`the prev ${my_node.getPrev}`);
