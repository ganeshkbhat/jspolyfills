
// https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/

class Stack {
  constructor() {
    this.input = [];
  }

  push(element) {
    this.input.push(element);
    return this;
  }

  pop() {
    return this.input.pop();
  }
}

const stack = new Stack();

stack.push('a');
stack.push('b');
stack.push('c');

stack.pop(); // c
stack.pop(); // b
stack.pop(); // a

class Queue {
  constructor() {
    this.input = [];
  }

  add(element) {
    this.input.push(element);
  }

  remove() {
    return this.input.shift();
  }
}

class Queue {
  constructor() {
    this.input = [];
    this.output = [];
  }

  add(element) {
    this.input.push(element);
  }

  remove() {
    if(!this.output.length) {
      while(this.input.length) {
        this.output.push(this.input.pop());
      }
    }
    return this.output.pop();
  }
}

const queue = new Queue();

queue.add('a');
queue.add('b');

queue.remove() // a
queue.add('c');
queue.remove() // b
queue.remove() // c


// Queue implemented with a Doubly Linked List

const LinkedList = require('../linked-lists/linked-list');
// polyfills\linkedlist.double.js

class QueueL {
  constructor() {
    this.input = new LinkedList();
  }

  add(element) {
    this.input.addFirst(element);
  }

  remove() {
    return this.input.removeLast();
  }

  get size() {
    return this.input.size;
  }
}


// Click on the name to go to the section or click on the runtime to go to the implementation

// * = Amortized runtime

// Name	Insert	Access	Search	Delete	Comments
// Array	O(n)	O(1)	O(n)	O(n)	Insertion to the end is O(1). Details here.
// HashMap	O(1)	O(1)	O(1)	O(1)	Rehashing might affect insertion time. Details here.
// Map (using Binary Search Tree)	O(log(n))	-	O(log(n))	O(log(n))	Implemented using Binary Search Tree
// Set (using HashMap)	O(1)	-	O(1)	O(1)	Set using a HashMap implementation. Details here.
// Set (using list)	O(n)	-	O(n)	O(n)	Implemented using Binary Search Tree
// Set (using Binary Search Tree)	O(log(n))	-	O(log(n))	O(log(n))	Implemented using Binary Search Tree
// Linked List (singly)	O(n)	-	O(n)	O(n)	Adding/Removing to the start of the list is O(1). Details here.
// Linked List (doubly)	O(n)	-	O(n)	O(n)	Adding/Deleting from the beginning/end is O(1). But, deleting/adding from the middle is O(n). Details here
// Stack (array implementation)	O(1)	-	-	O(1)	Insert/delete is last-in, first-out (LIFO)
// Queue (naïve array impl.)	O(1)	-	-	O(n)	Remove (Array.shift) is O(n)
// Queue (array implementation)	O(1)	-	-	O(1)	Worst time insert is O(n). However amortized is O(1)
// Queue (list implementation)	O(1)	-	-	O(1)	Using Doubly Linked List with reference to the last element.
// Note: Binary search trees and trees, in general, will be cover in the next post. Also, graph data structures.