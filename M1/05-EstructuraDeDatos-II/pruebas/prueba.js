/*

Create a linkedlist in 5 steps:

    1. Create a function for creating a new Node object
    2. Create the LinkedList class with the proper constructor
    3. Create the insert() and print() methods
    4. Create the remove() method to remove nodes
    5. Create the methods to remove and insert from the head

*/

// 1. Creating the list node with a function

function createNode(data) {
  return {
    data: data,
    next: null,
  };
}

/* 
Now to create a node object you just call createNode() and its argument
let newNode = createNode('pepe');
*/

// 1. You can also implement node with classes

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/* 
To use class Node you will make the following process
let newNode = new Node("pepe");
*/

// 2. Writing the LinkedList class

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  // 3. Creating the insert() and print() methods
  insert(data) {
    this.size++;
    let newNode = createNode(data);

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  print(data) {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedlist = new LinkedList();

linkedlist.insert(7);
linkedlist.insert(false);
linkedlist.insert('hi');

linkedlist.print();
