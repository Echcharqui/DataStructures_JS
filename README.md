# DataStructures_js

**Datastructures_js** is a library which provide easy access and usage of data structures in a **Javascript** and **Typescript** codes.

>## Table of Contents
* [**Instalation**](#instalation)
* [**importing the package**](#usage)
    * [using import](#import)
    * [using require](#require)
* [**Quick usage example**](#quick)
* [**Data structures & algorithme**](#ds)
* [**License**](#license)
___
>## <span id="instalation">Installation</span>

<!-- Take me to [pookie](#pookie) -->

Using [NPM](#) to install dataStructures_js

```bash
> npm install --save datastructures_js
```
___
>## <span id="Importing">Importing the package</span>
the library support the both importation statements:  __*"import"*__  and __*"require"*__ 
* <span id="import">using the **ES6** _import{}_</span>

```javascript
//for exmple we want to import singly linked list and doubly linked list !
import { SinglyLinkedList, DoublyLinkedList } from "dataStructures_js"
```
* <span id="require">using  _require()_</span>

```javascript
//for exmple we want to import singly linked list and doubly linked list !
const { SinglyLinkedList, DoublyLinkedList } = require('DataStructures_js')
```
___
>## <span id="quick">Quick usage example</span>

the library encapsul each DS in a class, what suggest the instantiation of the imported class.
    
so in this quick exemple we demonstrat the import and usage of a doubly linked list:

```javascript
//first importion the "DoublyLinkedList" class from DataStructures_js package !
import { DoublyLinkedList } from "dataStructures_js"

// create the object my_doubly_list !
const my_doubly_list = new DoublyLinkedList();

//insert items in the top of the list :
my_doubly_list.addFirst("alpha");
my_doubly_list.addFirst("bravo");

//insert one item in the end of the list :
my_doubly_list.addLast("zolo");

//loging the length of the list
console.log(my_doubly_list.length):
// that's log :
// 3 

//display the list :
my_doubly_list.forEach( item =>{
    console.log( `item index : ${item.getIndex} and the value is ${item.getData}`)
})

// that's log :
// item index : 0 and the value is : bravo
// item index : 1 and the value is : alpha
// item index : 2 and the value is : zolo
```
___
>## <span id="ds">Data structures & Algorithms</span>
in this table you gonna find all data structures and algorithms in the library with a link to the wiki detailed documentation 

| data structures and algorithms| class name       | type | dev state | usage documentation            |
|------------------------------:|------------------|------|-----------|--------------------------------|
| [singly linked list][sl]      | SinglyLinkedList |  DS  | complete  | [Click here !](https://#)      |
| [doubly linked list ][dl]     | DoublyLinkedList |  DS  | complete  | [Click here !](https://#)      |
| [stack][slak]                 | Stack            |  DS  | complete  | [Click here !](https://#)      |


[sl]: https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm
[dl]: https://www.tutorialspoint.com/data_structures_algorithms/doubly_linked_list_algorithm.htm
[slak]: https://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm

>## <span id="license">License</span>