# Singly linked list
This is the implementation of [Singly linked list][link1] on **JavaScript** and **TypeScript** from the library **datastructures_js**.

[link1]:https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm

>## Table of Contents
* [**What is Singly linked list ?**](#whatis)
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
* [**License**](#license)

___

>## <span id="whatis">What is a Singly linked list ?</span>
>A singly linked list is a sequence of links which contains items. Each link contains a connection to another link. Linked list is the second most-used data structure after array. Following are the important terms to understand the concept of Linked List.

* Link − Each link of a linked list can store a data called an element.
* Next − Each link of a linked list contains a link to the next link called Next.
* LinkedList − A Linked List contains the connection link to the first link called First.

Singly linked list demonstration:

![linked list](https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list.jpg "linked list")

___

>## <span id="import">importing the package</span>
the library support the both importation statements:  __*"import"*__  and __*"require"*__ 
* <span id="import">using the **ES6** _import{}_</span>

```javascript
//for exmple we want to import singly linked list and doubly linked list !
import { SinglyLinkedList } from "dataStructures_js"
```
* <span id="require">using  _require()_</span>

```javascript
//for exmple we want to import singly linked list and doubly linked list !
const { SinglyLinkedList } = require('dataStructures_js')
```
___
>## <span id="about">About the class</span> 
 ### Type Parameters
< T >

* Specifies the element type of the linked list.
    * in javascript as untyped language we dont need to specifie a element type for the linked list and all we need to do is to instantiate the class directly :
    ```javascript
    //javascript
    import { SinglyLinkedList } from "dataStructures_js"

    // create an instance with 2 different value types [string] and [number]!
    const my_singly_list = new SinglyLinkedList("alpha",17,"zolo");
    ```
    
     * in typeScript as a typed language we can if we want to specifie elements type for the linked list class that use a generic type declaration :
    ```typescript
    //typeScript
    import { SinglyLinkedList } from "dataStructures_js"

    // create an instance with 2 different value types [string] and [number]!
    // and Specifie the elements types that our list can hold in the declaration type
    const my_singly_list:SinglyLinkedList<string|number> = new SinglyLinkedList<string|number>("alpha",17,"zolo");
    ```

### Inheritance
SuperList< T > => SinglyLinkedList< T >
___
>## <span id="Constructors">Constructors</span> 
| javaScript                              | typeScript                                        | description                                                                                                                    |
|-----------------------------------------|---------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| SinglyLinkedList()                      | SinglyLinkedList < T >()                          | Initializes a new instance of the SinglyLinkedList class that is empty.                                                        |
| SinglyLinkedList(element1,element2,...) | SinglyLinkedList < T >(element1:T,element2:T,...) | Initializes a new instance of the SinglyLinkedList<T> class that contains elements from the same type declared on the instance |

>## <span id="Properties">Properties</span>
| Propertie  	        | description	                                                            |
|-----------------------|---------------------------------------------------------------------------|
| [**length**](#length) 	| Gets the number of nodes actually contained in the SinglyLinkedList<T>. 	|


>## <span id="Method">Method</span>
| Method  	                                        | description	                                                                                        |
|----------------------------------------	        |-------------------------------------------------------------------------------------------------------|
| [**addAfter**](#aa)(existingNode: T, newNode: T)  | Adds the specified new node after the specified existing node in the SinglyLinkedList. 	            |
| [**AddBefore**](#ab)(existingNode: T, newNode: T) | Adds the specified new node bevore the specified existing node in the SinglyLinkedList.               |
| [**AddFirst**](#af)(newNode: T)                   | Adds the specified new node in the beginning of the SinglyLinkedList.                                 |
| [**AddLast**](#al) (newNode: T)                   | Adds the specified new node in the beginning of the SinglyLinkedList.                                 |
| [**Clear**](#cl)()                                | clear all element from SinglyLinkedList.                                                              |
| [**Contains**](#co)(value: T)                     | Searching inside the SinglylinkedList if it contains the specified node                               |
| [**Find**](#fi)(value: T, callback())             | Finds the first node that contains the specified value and exploit the result with a callback         |
| [**FindLast**](#fl)(value: T, callback())         | Finds the last node that contains the specified value and exploit the result with a callback          |
| [**Remove**](#rm)(value: T)                       | Removes the first occurrence of the specified value from the SinglyLinkedList.                        |
| [**RemoveFirst**](#rf)()                          | Removes the node at the start of the SinglyLinkedList.                                                |
| [**RemoveLast**](#rl)()                           | Removes the node at the end of the SinglyLinkedList                     	                            |
| [**toArray**](#ta)()                              | Return all SinglyLinkedList nodes in an array                                                         |
| [**forEach**](#fe)(callback())                    | browse into the SinglyLinkedList node and exploit each result with a callback                         |

___

>### <span id="const">**constructors()**</span>
with the Singly Linked List constructor we can create an empty list by let the constructor params empty or the opposite when we want creating a list with some start nodes in it.
* creating a an empty SinglyLinkedList

javascript
```javascript
//javascript
import { SinglyLinkedList } from "dataStructures_js"

const myList = new SinglyLinkedList() // myList as a empty Singly Linked List
```
typescript
```typescript
//typescript
import { SinglyLinkedList } from "dataStructures_js"

//if we want that our list hold just numbers and strings
const myList : SinglyLinkedList<string | number>= new SinglyLinkedList<string | number>() 
// myList as a empty Singly Linked List
```

* creating an SinglyLinkedList with some start nodes inside

javascript
```javascript
//javascript
import { SinglyLinkedList } from "dataStructures_js"

const myList = new SinglyLinkedList("alpha",17,"bravo")
// Singly Linked List with "alpha", 17, "bravo" inside
```
typescript
```typescript
//typescript
import { SinglyLinkedList } from "dataStructures_js"

//if we want that our list hold just numbers and strings
const myList:SinglyLinkedList<string|number>= new SinglyLinkedList<string | number>("alpha",17,"bravo") 
// Singly Linked List with "alpha", 17, "bravo" inside
```
___
>### <span id="length">**length**</span>
the propertie **length** return the number of nodes inside our list

usage with javascript
```javascript
//javascript
import { SinglyLinkedList } from "dataStructures_js"

const myList = new SinglyLinkedList("alpha",17,"bravo")

let list_length = myList.length //the propertie length return an number 

console.log(`the number of nodes in the list is :  ${list_length} node(s)`)
 // => the number of nodes in the list is : 3 node(s)
```
usage with typescript
```typescript
//typescript
import { SinglyLinkedList } from "dataStructures_js"

const myList:SinglyLinkedList<string|number>= new SinglyLinkedList<string | number>("alpha",17,"bravo") 

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
the method addAfter() Adds the specified new node after the specified existing node in the SinglyLinkedList.
addAfter() take tow required params the first is the value of the node to insert after it and the second param is the new value to insert.

usage with javascript & typescript
```javascript
//javascript
import { SinglyLinkedList } from "dataStructures_js"

const myList = new SinglyLinkedList("alpha",17,"bravo")

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
the func AddBefore() Adds the specified new node before the specified existing node in the SinglyLinkedList.
addBefore() take tow required params the first is the value of the node to insert before it and the second param is the new value to insert.

usage with javascript & typescript
```javascript
//javascript
import { SinglyLinkedList } from "dataStructures_js"

const myList = new SinglyLinkedList("alpha",17,"bravo")

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
the func addFirst() Adds the a new node to the the beginning of the SinglyLinkedList.
addFirst() take one required param that is the new value to add 

usage with javascript & typescript
```javascript
//javascript
import { SinglyLinkedList } from "dataStructures_js"

const myList = new SinglyLinkedList("alpha",17,"bravo")

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
the func addLast() Adds the a new node to the end of the SinglyLinkedList.
addLast() take one required param that is the new value to add 

usage with javascript & typescript
```javascript
//javascript
import { SinglyLinkedList } from "dataStructures_js"

const myList = new SinglyLinkedList("alpha",17,"bravo")

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
import { SinglyLinkedList } from "dataStructures_js"

const myList = new SinglyLinkedList("alpha",17,"bravo")

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
import { SinglyLinkedList } from "dataStructures_js"

const myList = new SinglyLinkedList("alpha",17,"bravo")

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
import { SinglyLinkedList } from "dataStructures_js"

const myList = new SinglyLinkedList("alpha","bravo","bravo")

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
import { SinglyLinkedList } from "dataStructures_js"

const myList = new SinglyLinkedList("alpha","bravo","bravo")

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
the func Remove() delete the first occurrence of the specified value from the SinglyLinkedList.    

usage with javascript & typescript
```javascript
//javascript
import { SinglyLinkedList } from "dataStructures_js"

const myList = new SinglyLinkedList("alpha",17,"bravo")

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
the func RemoveFirst() delete the first node from the SinglyLinkedList.    

usage with javascript & typescript
```javascript
//javascript
import { SinglyLinkedList } from "dataStructures_js"

const myList = new SinglyLinkedList("alpha",17,"bravo")

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
the func RemoveLast() delete the last node from the SinglyLinkedList.    

usage with javascript & typescript
```javascript
//javascript
import { SinglyLinkedList } from "dataStructures_js"

const myList = new SinglyLinkedList("alpha",17,"bravo")

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
the func toArray() push all nodes from the SinglyLinkedList into an array and return it.    

usage with javascript & typescript
```javascript
//javascript
import { SinglyLinkedList } from "dataStructures_js"

const myList = new SinglyLinkedList("alpha",17,"bravo")



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
import { SinglyLinkedList } from "dataStructures_js"

const myList = new SinglyLinkedList("alpha",17,"bravo")

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

>## <span id="license">License</span>
the library is under an MIT license.

you can check the license [here !](https://github.com/Echcharqui/DataStructures_JS/blob/master/LICENSE)