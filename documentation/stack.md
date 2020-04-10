# Stack
This is the implementation of [Stack][link1] on **JavaScript** and **TypeScript** from the library **datastructures_js**.

[link1]:https://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm

>## Table of Contents
* [**What is Stack ?**](#whatis)
* [**Importing the class**](#import)
    * [using import](#import)
    * [using require](#require)
* [**About the class**](#about)
* [**Constructors**](#Constructors)
* [**Properties**](#Properties)
* [**Methods**](#Method)
* [**All in detail**](#allind)
    * [constructors()](#const)
    * [Count](#Count)
    * [push()](#push)
    * [pop()](#pop)
    * [pick()](#pick)
    * [clear()](#clear)
    * [contains()](#conts)
    * [copyToArray()](#cptar)
* [**License**](#license)

___

>## <span id="whatis">What is a Stack ?</span>

A stack is an Abstract Data Type (ADT), commonly used in most programming languages. It is named stack as it behaves like a real-world stack, for example – a deck of cards or a pile of plates, etc.

This feature makes it LIFO data structure. LIFO stands for Last-in-first-out. Here, the element which is placed (inserted or added) last, is accessed first. In stack terminology, insertion operation is called PUSH operation and removal operation is called POP operation.

Stack demonstration:

![Stack](https://www.tutorialspoint.com/data_structures_algorithms/images/stack_representation.jpg "Stack")

___

>## <span id="import">importing the package</span>
the library support the both importation statements:  __*"import"*__  and __*"require"*__ 
* <span id="import">using the **ES6** _import{}_</span>

```javascript
//for exmple we want to import Stack !
import { Stack } from "dataStructures_js"
```
* <span id="require">using  _require()_</span>

```javascript
//for exmple we want to import Stack !
const { Stack } = require('dataStructures_js')
```
___
>## <span id="about">About the class</span> 
 ### Type Parameters
< T >

* Specifies the element type of the Stack.
    * in javascript as untyped language we dont need to specifie a element type for the Stack and all we need to do is to instantiate the class directly :
    ```javascript
    //javascript
    import { Stack } from "dataStructures_js"

    // create an instance 
    const myStack = new Stack();
    ```
    
     * in typeScript as a typed language we can if we want to specifie elements type for the linked list class that use a generic type declaration :
    ```typescript
    //typeScript
    import { Stack } from "dataStructures_js"

    // create an instance with [string] type
    // and Specifie the elements types that our stack can hold in the declaration type
    const myStack: Stack<string> = new Stack<string>();
    ```

### Inheritance
SuperStack< T > => Stack< T >
___
>## <span id="Constructors">Constructors</span> 
| javaScript                              | typeScript                                        | description                                                                                                                    |
|-----------------------------------------|---------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Stack()                      | Stack < T >()                          | Initializes a new instance of the Stack class with no constructor paramwhat mean that the we choose a dynamic Stack
| Stack(Int32) | SinglyLinkedList < T >(Int32) | Initializes a new instance of the Stack class with limited size specified with a number in the constructor param|

>## <span id="Properties">Properties</span>
| Propertie  	        | description	                                                            |
|-----------------------|---------------------------------------------------------------------------|
| [**Count**](#Count) 	| return the number of items actually in the stack. 	|


>## <span id="Method">Method</span>
| Method  	                                        | description	                                                                                        |
|----------------------------------------	        |-------------------------------------------------------------------------------------------------------|
| [**push**](#push) (item : T)                      | Adds an item in the stack                                                              	            |
| [**pop**](#pop) ()                                 | Remove the top item from the stack                                                                         |
| [**pick**](#pick)()                                 | return the top  item in the stack !                                                         |
| [**clear**](#clear) ()                               | removes all items in the stack                                                                        |
| [**contains**](#conts)(value: T)                     | Searching inside the stack if it contains the specified item and return a boolean                     |
| [**copyToArray**](#cptar)(array[], Int32)            | copies the items Stack to an existing one-dimensional Array, starting at the specified array index()second param.)|
| 
___

>### <span id="const">**constructors()**</span>
with the Stack constructor we can create a dynamic stack by let the constructor params empty or the opposite when we want to create a static Stack by passing the size as a param type number to the constructor

* creating an dynamic **Stack**.
javascript
```javascript
//javascript
import { Stack } from "dataStructures_js"

const myStack = new Stack() // myStack is a dynamic stack now
```
typescript
```typescript
//typescript
import { Stack } from "dataStructures_js"

const myStack : Stack<string> = new Stack<string>() 
// myStack is a dynamic stack now
```

* creating a static **Stack** 

javascript
```javascript
//javascript
import { Stack } from "dataStructures_js"

const myStack = new Stack(10)
// my stack now has a size of 10 and it can't be modified 
```
typescript
```typescript
//typescript
import { Stack } from "dataStructures_js"

//if we want that our list hold just numbers and strings
const myStack:Stack<string> = new Stack<string>(10) 
// my stack now has a size of 10 and it can't be modified 
```
___
>### <span id="Count">**Count**</span>
the propertie **Count** return the number of items actually in the stack. 

usage with javascript
```javascript
//javascript
import { Stack } from "dataStructures_js"

const myStack = new Stack()

myStack.push("alpha")

myStack.push("bravo")


let stack_count = myStack.Count

console.log(`the number of items in the stack is :  ${stack_count} item(s)`)
 // => the number of items in the stack is : 2 item(s)
```
usage with typescript
```typescript
//typescript
import { Stack } from "dataStructures_js"

const myStack:Stack<string>= new Stack<string>() 

myStack.push("alpha")

myStack.push("bravo")

let stack_count = myStack.Count

console.log(`the number of items in the stack is :  ${stack_count} item(s)`)
 // => the number of items in the stack is : 2 item(s)
```
data type return is :
| **Return** |   
|------------|
| _number_ 	 |
___
>### <span id="push">**push()**</span>
the func **push()** Adds an item in the stack  
this function take one param wich is the value to add as a new item to the stack

usage with javascript & typescript
```javascript
//javascript
import { Stack } from "dataStructures_js"

const myStack = new Stack()

myStack.push("alpha") // add alpha 

myStack.push("bravo") // add bravo


let stack_count = myStack.Count

console.log(`the number of items in the stack is :  ${stack_count} item(s)`)
 // => the number of items in the stack is : 2 item(s)
```
if we use a static stack and we try tu push over the static size of our stack tht's gonna throw a "_**stack overflow**_ error !"

usage with javascript & typescript
```javascript
//javascript
import { Stack } from "dataStructures_js"

const myStack = new Stack(3) // a static stack with size of 3

myStack.push("alpha") // add alpha
myStack.push("zolo") // add zolo
myStack.push("bravo") // add bravo
let stack_count = myStack.Count // return the number of items in the stack

console.log(`the number of items in the stack is :  ${stack_count} item(s)`)
 // => the number of items in the stack is : 3 item(s)

//now if we try to push another item
myStack.push("plus")
//Eroor
// -Stack overflow you can't add values to this stack anymore !!
// -POP() a value for more free space in the stack !"
```
params:
| **name**           | type |
|----------          |----- |
| _value   | any  |

data type return is :
| **Return** |   
|------------|
| _void_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(1)_ 	     |

____
>### <span id="pop">**pop()**</span>
the func **pop()** remove the top item from the stack  

usage with javascript & typescript
```javascript
//javascript
import { Stack } from "dataStructures_js"

const myStack = new Stack(3)

myStack.push("alpha")
myStack.push("zolo")
myStack.push("bravo")
let stack_count = myStack.Count

console.log(`the number of items in the stack is :  ${stack_count} item(s)`)
// => the number of items in the stack is : 3 item(s)

myStack.pop() // remove the last pushed item

stack_count = myStack.Count

console.log(`the number of items in the stack is :  ${stack_count} item(s)`)
// => the number of items in the stack is : 2 item(s)

```
params:
| **name**           | type |
|----------          |----- |
|  _null_   | null  |

data type return is :
| **Return** |   
|------------|
| _void_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(1)_ 	     |

___
>### <span id="pick">**pick()**</span>
the func **pick()** return the top item in the stack !                                                          

usage with javascript & typescript
```javascript
//javascript
import { Stack } from "dataStructures_js"

const myStack = new Stack(3)

myStack.push("alpha")
myStack.push("zolo")
myStack.push("bravo")
let theLast = myStack.pick() // get the top item

console.log(`the top item is :  ${theLast}`)
// => the top item is : bravo

myStack.pop() // remove the top item

theLast = myStack.pick() // get the top item

console.log(`the top item is :  ${theLast}`)
// => the top item is : zolo
```
params:
| **name**           | type |
|----------          |----- |
| _null_      | null  |

data type return is :
| **Return** |   
|------------|
| _void_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(1)_ 	     |
___
>### <span id="clear">**clear()**</span>
the func clear removes all items in the stack  

usage with javascript & typescript
```javascript
//javascript
import { Stack } from "dataStructures_js"

const myStack = new Stack(3)

myStack.push("alpha")
myStack.push("zolo")
myStack.push("bravo")
let stack_count = myStack.Count

console.log(`the number of items in the stack is :  ${stack_count} item(s)`)
// => the number of items in the stack is : 3 item(s)

myStack.clear() // remove all items

stack_count = myStack.Count

console.log(`the number of items in the stack is :  ${stack_count} item(s)`)
// => the number of items in the stack is : 0 item(s)
```
params:
| **name**           | type |
|----------          |----- |
| _null_      | null  |

data type return is :
| **Return** |   
|------------|
| _void_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(n)_ 	     |
___
>### <span id="conts">**contains()**</span>
the func **contains()** Searching inside the stack if it contains the specified item and return a boolean.

usage with javascript & typescript
```javascript
//javascript
import { Stack } from "dataStructures_js"

const myStack = new Stack(3)

myStack.push("alpha")
myStack.push("zolo")
myStack.push("bravo")

let exist = myStack.contains("zolo") //check if "zolo" exist in the stack

console.log(`the existence of "zolo" in our Stack is :  ${exist}`)
// => the existence of "zolo" in our Stack is : true

exist = myStack.contains("test") //check if "zolo" exist in the stack

console.log(`the existence of "test" in our Stack is :  ${exist}`)
// => the existence of "zolo" in our Stack is : false
```
params:
| **name**           | type |
|----------          |----- |
| _value_             | any |

data type return is :
| **Return** |   
|------------|
| _boolean_  |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(n)_ 	     |
___

>### <span id="cptar">**copyToArray()**</span>
the func **copyToArray()** copies the items Stack to an existing one-dimensional Array, starting at the specified array index()second param.
this function takes tow params the first is the array where we want to copie the stack and the second one is the index of the item in the stack from where we want to start coping

usage with javascript & typescript
```javascript
//javascript
import { Stack } from "dataStructures_js"

const myStack = new Stack(3)

myStack.push("alpha") // push alpha
myStack.push("zolo") // push zolo
myStack.push("bravo") // push bravo

let myArray =["whisky","romeo","hotel"] //an array with few items

myStack.copyToArray(myArray,1) //we want to copie the items stack starting from the item index 1 ("zolo") to the end

console.log(myArray)
//["whisky","romeo","hotel","zolo","bravo"]

```
params:
| **name**           | type |
|----------        |----- |
| _array_     | any |
| _index_     | number |

data type return is :
| **Return** |   
|------------|
| _void_ 	 |

Ο Notation :
| **Ο Notation** |   
|------------    |
| _O(n)_ 	     |
___



>## <span id="license">License</span>
the library is under an MIT license.

you can check the license [here !](https://github.com/Echcharqui/DataStructures_JS/blob/master/LICENSE)