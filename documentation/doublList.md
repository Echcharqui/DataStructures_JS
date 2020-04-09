# DoublyLinkedList
This is the implementation of [Doubly Linked Listt][link1] on **JavaScript** and **TypeScript** from the library **datastructures_js**.

[link1]:https://www.tutorialspoint.com/data_structures_algorithms/doubly_linked_list_algorithm.htm

>## Table of Contents
* [**What is Doubly Linked Listt ?**](#whatis)
* [**Importing the class**](#import)
    * [using import](#import)
    * [using require](#require)
* [**About the class**](#about)
* [**Constructors**](#Constructors)
* [**Properties**](#Properties)
* [**Methods**](#Method)
* [**All in deall in detail**](#allind)
    * [constructors()](#const)
    * [length](#length)
    * [addAfter()](#aa)
    * [AddBefore()](#ab)
    * [AddFirst()](#af)
    * [AddLast()](#al)
    * [Clear()](#cl)
    * [Contains()](#co)
    * [Find()](#fi)
    * [FindLast()](#fl)
    * [Remove()](#rm)
    * [RemoveFirst()](#rf)
    * [RemoveLast()](#rl)
    * [toArray(()](#ta)
    * [forEach()](#fe)
    * [forEachBW()](#fB)
* [**License**](#license)

___

>## <span id="whatis">What is Doubly Linked Listt ?</span>
>Doubly Linked List is a variation of Linked list in which navigation is possible in both ways, either forward and backward easily as compared to Single Linked List. Following are the important terms to understand the concept of doubly linked list.

* Link − Each link of a linked list can store a data called an element.

* Next − Each link of a linked list contains a link to the next link called Next.

* Prev − Each link of a linked list contains a link to the previous link called Prev.

* LinkedList − A Linked List contains the connection link to the first link called First and to the last link called Last.

Singly linked list demonstration:

![linked list](https://www.tutorialspoint.com/data_structures_algorithms/images/doubly_linked_list.jpg "Doubly linked list")

___

>## <span id="import">importing the package</span>
the library support the both importation statements:  __*"import"*__  and __*"require"*__ 
* <span id="import">using the **ES6** _import{}_</span>

```javascript
//for exmple we want to import doubly linked list !
import { DoublyLinkedLIst } from "dataStructures_js"
```
* <span id="require">using  _require()_</span>

```javascript
//for exmple we want to import doubly linked list !
const { DoublyLinkedLIst } = require('dataStructures_js')
```
___
>## <span id="about">About the class</span> 
 ### Type Parameters
< T >

* Specifies the element type of the linked list.
    * in javascript as untyped language we dont need to specifie a element type for the linked list and all we need to do is to instantiate the class directly :
    ```javascript
    //javascript
    import { DoublyLinkedLIst } from "dataStructures_js"

    // create an instance with 2 different value types [string] and [number]!
    const my_singly_list = new DoublyLinkedLIst("alpha",17,"zolo");
    ```
    
     * in typeScript as a typed language we can if we want to specifie elements type for the linked list class that use a generic type declaration :
    ```typescript
    //typeScript
    import { DoublyLinkedLIst } from "dataStructures_js"

    // create an instance with 2 different value types [string] and [number]!
    // and Specifie the elements types that our list can hold in the declaration type
    const my_singly_list:DoublyLinkedLIst<string|number> = new DoublyLinkedLIst<string|number>("alpha",17,"zolo");
    ```

### Inheritance
SuperList< T > => DoublyLinkedLIst< T >
___
>## <span id="Constructors">Constructors</span> 
| javaScript                              | typeScript                                        | description                                                                                                                    |
|-----------------------------------------|---------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| DoublyLinkedLIst()                      | DoublyLinkedLIst < T >()                          | Initializes a new instance of the DoublyLinkedLIst class that is empty.                                                        |
| DoublyLinkedLIst(element1,element2,...) | DoublyLinkedLIst < T >(element1:T,element2:T,...) | Initializes a new instance of the DoublyLinkedLIst<T> class that contains elements from the same type declared on the instance |

>## <span id="Properties">Properties</span>
| Propertie  	        | description	                                                            |
|-----------------------|---------------------------------------------------------------------------|
| [**length**](#length) 	| Gets the number of nodes actually contained in the DoublyLinkedLIst<T>. 	|


>## <span id="Method">Method</span>
| Method  	                                        | description	                                                                                        |
|----------------------------------------	        |-------------------------------------------------------------------------------------------------------|
| [**addAfter**](#aa)(existingNode: T, newNode: T)  | Adds the specified new node after the specified existing node in the DoublyLinkedLIst. 	            |
| [**AddBefore**](#ab)(existingNode: T, newNode: T) | Adds the specified new node bevore the specified existing node in the DoublyLinkedLIst.               |
| [**AddFirst**](#af)(newNode: T)                   | Adds the specified new node in the beginning of the DoublyLinkedLIst.                                 |
| [**AddLast**](#al) (newNode: T)                   | Adds the specified new node in the beginning of the DoublyLinkedLIst.                                 |
| [**Clear**](#cl)()                                | clear all element from DoublyLinkedLIst.                                                              |
| [**Contains**](#co)(value: T)                     | Searching inside the DoublyLinkedLIst if it contains the specified node                               |
| [**Find**](#fi)(value: T, callback())             | Finds the first node that contains the specified value and exploit the result with a callback         |
| [**FindLast**](#fl)(value: T, callback())         | Finds the last node that contains the specified value and exploit the result with a callback          |
| [**Remove**](#rm)(value: T)                       | Removes the first occurrence of the specified value from the DoublyLinkedLIst.                        |
| [**RemoveFirst**](#rf)()                          | Removes the node at the start of the DoublyLinkedLIst.                                                |
| [**RemoveLast**](#rl)()                           | Removes the node at the end of the DoublyLinkedLIst                     	                            |
| [**toArray**](#ta)()                              | Return all DoublyLinkedLIst nodes in an array                                                         |
| [**forEach**](#fe)(callback())                    | browse into the DoublyLinkedLIst nodes and exploit each result with a callback                        |
| [**forEachBW**](#fB)(callback())                  | browse into the DoublyLinkedLIst nodes from the end to the start and exploit each result with a callback |

___

>### <span id="const">**constructors()**</span>
with the Doubly Linked LIst constructor we can create an empty list by let the constructor params empty or the opposite when we want creating a list with some start nodes in it.
* creating a an empty DoublyLinkedLIst

javascript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst() // myList as a empty DoublyLinkedLIst
```
typescript
```typescript
//typescript
import { DoublyLinkedLIst } from "dataStructures_js"

//if we want that our list hold just numbers and strings
const myList : DoublyLinkedLIst<string | number>= new DoublyLinkedLIst<string | number>() 
// myList as a empty DoublyLinkedLIst
```

* creating an DoublyLinkedLIst with some start nodes inside

javascript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst("alpha",17,"bravo")
// DoublyLinkedLIst with "alpha", 17, "bravo" inside
```
typescript
```typescript
//typescript
import { DoublyLinkedLIst } from "dataStructures_js"

//if we want that our list hold just numbers and strings
const myList:DoublyLinkedLIst<string|number>= new DoublyLinkedLIst<string | number>("alpha",17,"bravo") 
// DoublyLinkedLIst with "alpha", 17, "bravo" inside
```
___
>### <span id="length">**length**</span>
the propertie **length** return the number of nodes inside our list

usage with javascript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst("alpha",17,"bravo")

let list_length = myList.length //the propertie length return an number 

console.log(`the number of nodes in the list is :  ${list_length} node(s)`)
 // => the number of nodes in the list is : 3 node(s)
```
usage with typescript
```typescript
//typescript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList:DoublyLinkedLIst<string|number>= new DoublyLinkedLIst<string | number>("alpha",17,"bravo") 

let list_length:number = myList.length //the propertie length return an number 

console.log(`the number of nodes in the list is :  ${list_length} node(s)`)
 // => the number of nodes in the list is : 3 node(s)
```
data type return is :
| **Return** |   
|------------|
| _number_ 	 |
___
>### <span id="aa">**addAfter()**</span>
the method addAfter() Adds the specified new node after the specified existing node in the DoublyLinkedLIst.
addAfter() take tow required params the first is the value of the node to insert after it and the second param is the new value to insert.

usage with javascript & typescript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst("alpha",17,"bravo")

//display the list
myList.forEach(node=>{
    console.log(node.getData) 
    /// .getData is a propertie of the class node that's return the value store in the node
})
//>alpha
//>17
//>bravo

myList.addAfter('alpha','whisky') 
// adding a new node with value "whisky" after the node "alpha" 

//display the list after the add of "whisky"
myList.forEach(node=>{
    console.log(node.getData) 
})
//>alpha
//>whisky
//>17
//>bravo
```
params:
| **name**           | type |
|----------          |----- |
| _sebled element_   | any  |
| _new element_      | any  |

data type return is :
| **Return** |   
|------------|
| _void_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(n)_ 	     |

____
>### <span id="ab">**AddBefore()**</span>
the func AddBefore() Adds the specified new node before the specified existing node in the DoublyLinkedLIst.
addBefore() take tow required params the first is the value of the node to insert before it and the second param is the new value to insert.

usage with javascript & typescript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst("alpha",17,"bravo")

//display the list
myList.forEach(node=>{
    console.log(node.getData) 
    // .getData is a propertie of the class node that's return the value store in the node
})
//>alpha
//>17
//>bravo

myList.addBefore('alpha','whisky') 
// adding a new node with value "whisky" before the node "alpha" 

//display the list after the add of "whisky"
myList.forEach(node=>{
    console.log(node.getData) 
})
//>whisky
//>alpha
//>17
//>bravo
```
params:
| **name**           | type |
|----------          |----- |
| _sebled element_   | any  |
| _new element_      | any  |

data type return is :
| **Return** |   
|------------|
| _void_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(n)_ 	     |

___
>### <span id="af">**AddFirst()**</span>
the func addFirst() Adds the a new node to the the beginning of the DoublyLinkedLIst.
addFirst() take one required param that is the new value to add 

usage with javascript & typescript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst("alpha",17,"bravo")

//display the list
myList.forEach(node=>{
    console.log(node.getData) 
    // .getData is a propertie of the class node that's return the value store in the node
})
//>alpha
//>17
//>bravo

myList.addFirst('whisky') 
// adding a new node with value "whisky" in the beginning

//display the list after the add of "whisky"
myList.forEach(node=>{
    console.log(node.getData) 
})
//>whisky
//>alpha
//>17
//>bravo
```
params:
| **name**           | type |
|----------          |----- |
| _new element_      | any  |

data type return is :
| **Return** |   
|------------|
| _void_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(1)_ 	     |
___
>### <span id="al">**AddLast()**</span>
the func addLast() Adds the a new node to the end of the DoublyLinkedLIst.
addLast() take one required param that is the new value to add 

usage with javascript & typescript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst("alpha",17,"bravo")

//display the list
myList.forEach(node=>{
    console.log(node.getData) 
    // .getData is a propertie of the class node that's return the value store in the node
})
//>alpha
//>17
//>bravo

myList.addLast('whisky') 
// adding a new node with value "whisky" in the end 

//display the list after the add of "whisky"
myList.forEach(node=>{
    console.log(node.getData) 
})
//>alpha
//>17
//>bravo
//>whisky
```
params:
| **name**           | type |
|----------          |----- |
| _new element_      | any  |

data type return is :
| **Return** |   
|------------|
| _void_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(1)_ 	     |
___
>### <span id="cl">**Clear()**</span>
the func clear() clear the list from all nodes to become empty

usage with javascript & typescript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst("alpha",17,"bravo")

//display the list
myList.forEach(node=>{
    console.log(node.getData) 
    // .getData is a propertie of the class node that's return the value store in the node
})
//>alpha
//>17
//>bravo

myList.Clear()
// clear the list

//display the list after clearing
console.log(`the number of nodes in the list is :  ${list_length} node(s)`)
 // => the number of nodes in the list is : 0 node(s)
```
params:
| **name**           | type |
|----------          |----- |
| _null_             | null |

data type return is :
| **Return** |   
|------------|
| _void_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(n)_ 	     |
___
>### <span id="co">**Contains()**</span>
the func contains() search for a specific node with a giving value in param and return a boolean value

usage with javascript & typescript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst("alpha",17,"bravo")

//display the list
myList.forEach(node=>{
    console.log(node.getData) 
    // .getData is a propertie of the class node that's return the value store in the node
})
//>alpha
//>17
//>bravo

let list_contain = myList.Contains("bravo")
// check if the list contain "bravo"

//display the list after clearing
console.log(`the existence of "barvo" in our list is :  ${list_contain}`)
 // => the existence of Barvo in our list is : true

 let list_contain = myList.Contains("test")
// check if the list contain "bravo"

//display the list after clearing
console.log(`the existence of "test" in our list is :  ${list_contain}`)
 // => the existence of Barvo in our list is : false
```
params:
| **name**           | type |
|----------        |----- |
| _node_value_     | any |

data type return is :
| **Return** |   
|------------|
| _boolean_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(n)_ 	     |
___

>### <span id="fi">**Find()**</span>
the func Find() search for the first node that contains the specified value and exploit the result with a callback

usage with javascript & typescript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst("alpha","bravo","bravo")

myList.Find("bravo",node=>{
    console.log(`node ${node.getData} found at index : ${node.getIndex}`)
    // .getData is a propertie of the class node that's return the value store in the node
    // .getIndex is a propertie of the class node that's return the index of the node
})
// node bravo found at index : 1

```
params:
| **name**           | type |
|----------        |----- |
| _node_value_     | any |
| _callback_     | function |

data type return is :
| **Return** |   
|------------|
| _void_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(n)_ 	     |
___

>### <span id="fl">**FindLast()**</span>
the func FindLast() search for the last node that contains the specified value and exploit the result with a callback

usage with javascript & typescript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst("alpha","bravo","bravo")

myList.Find("bravo",node=>{
    console.log(`node ${node.getData} found at index : ${node.getIndex}`)
    // .getData is a propertie of the class node that's return the value store in the node
    // .getIndex is a propertie of the class node that's return the index of the node
})
// node bravo found at index : 2

```
params:
| **name**           | type |
|----------        |----- |
| _node_value_     | any |
| _callback_     | function |

data type return is :
| **Return** |   
|------------|
| _void_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(n)_ 	     |
___


>### <span id="rm">**Remove()**</span>
the func Remove() delete the first occurrence of the specified value from the DoublyLinkedLIst.    

usage with javascript & typescript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst("alpha",17,"bravo")

//display the list
myList.forEach(node=>{
    console.log(node.getData) 
    // .getData is a propertie of the class node that's return the value store in the node
})
//>alpha
//>17
//>bravo

lmyList.Remove(17)
// remove the node that has the value 17

//display the list
myList.forEach(node=>{
    console.log(node.getData) 
    // .getData is a propertie of the class node that's return the value store in the node
})
//>alpha
//>bravo

```
params:
| **name**           | type |
|----------        |----- |
| _node_value_     | any |

data type return is :
| **Return** |   
|------------|
| _void_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(n)_ 	     |
___

>### <span id="rf">**RemoveFirst()**</span>
the func RemoveFirst() delete the first node from the DoublyLinkedLIst.    

usage with javascript & typescript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst("alpha",17,"bravo")

//display the list
myList.forEach(node=>{
    console.log(node.getData) 
    // .getData is a propertie of the class node that's return the value store in the node
})
//>alpha
//>17
//>bravo

lmyList.RemoveFirst()
// remove the first value that mean "alpha"

//display the list
myList.forEach(node=>{
    console.log(node.getData) 
    // .getData is a propertie of the class node that's return the value store in the node
})
//>17
//>bravo

```
params:
| **name**           | type |
|----------        |----- |
| _null_     | null |

data type return is :
| **Return** |   
|------------|
| _void_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(1)_ 	     |
___

>### <span id="rl">**RemoveLast()**</span>
the func RemoveLast() delete the last node from the DoublyLinkedLIst.    

usage with javascript & typescript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst("alpha",17,"bravo")

//display the list
myList.forEach(node=>{
    console.log(node.getData) 
    // .getData is a propertie of the class node that's return the value store in the node
})
//>alpha
//>17
//>bravo

lmyList.last()
// remove the last value that mean "alpha"

//display the list
myList.forEach(node=>{
    console.log(node.getData) 
    // .getData is a propertie of the class node that's return the value store in the node
})
//>alpha
//>17

```
params:
| **name**           | type |
|----------        |----- |
| _null_     | null |

data type return is :
| **Return** |   
|------------|
| _void_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(n)_ 	     |
___

>### <span id="ta">**toArray(()**</span>
the func toArray() push all nodes from the DoublyLinkedLIst into an array and return it.    

usage with javascript & typescript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst("alpha",17,"bravo")



const array = lmyList.toArray()
// remove the last value that mean "alpha"

console.log(array)
//["alpha", 17, "bravo"]

```
params:
| **name**           | type |
|----------        |----- |
| _null_     | null |

data type return is :
| **Return** |   
|------------|
| _array_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(n)_ 	     |
___

>### <span id="fe">**forEach()**</span>

the func forEach() traversing the list until the last node   

usage with javascript & typescript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst("alpha",17,"bravo")

//adding some nodes
myList.addLast("india")
myList.addLast("siera")
myList.addLast("zolo")
myList.addLast("romeo")

//display the list
myList.forEach(node=>{
    console.log(node.getData) 
    // .getData is a propertie of the class node that's return the value store in the node
})
//>alpha
//>17
//>bravo
//>india
//>siera
//>zolo
//>romeo

```
params:
| **name**           | type |
|----------        |----- |
| _null_     | null |

data type return is :
| **Return** |   
|------------|
| _array_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(n)_ 	     |
___

>### <span id="fB">**forEachBW()**</span>

the func forEachBW() traversing the list from the end node to the start node  

usage with javascript & typescript
```javascript
//javascript
import { DoublyLinkedLIst } from "dataStructures_js"

const myList = new DoublyLinkedLIst("alpha",17,"bravo")

//adding some nodes
myList.addLast("india")
myList.addLast("siera")
myList.addLast("zolo")
myList.addLast("romeo")

//display forwarding 
myList.forEach(node=>{
    console.log(node.getData) 
    // .getData is a propertie of the class node that's return the value store in the node
})
//>alpha
//>17
//>bravo
//>india
//>siera
//>zolo
//>romeo

//display backward
myList.forEachBW(node=>{
    console.log(node.getData) 
    // .getData is a propertie of the class node that's return the value store in the node
})
//>romeo
//>zolo
//>siera
//>india
//>bravo
//>17
//>alpha
```
params:
| **name**           | type |
|----------        |----- |
| _null_     | null |

data type return is :
| **Return** |   
|------------|
| _array_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(n)_ 	     |
___


>## <span id="license">License</span>
the library is under an MIT license.

you can check the license [here !](https://github.com/Echcharqui/DataStructures_JS/blob/master/LICENSE)