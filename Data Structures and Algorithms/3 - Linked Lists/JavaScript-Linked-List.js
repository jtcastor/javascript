// JavaScript Linked list

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  // add to end of list / tail
  append(value) {
    // if list is empty
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }

  // add to beginning of list / head
  prepend(value) {
    // if list is empty
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }

  deleteHead() {
    // if list is empty
    if (!this.head) {
      return null;
    } else {
      let removedHead = this.head;
      // if 1 node left
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return removedHead.value;
    }
  }

  deleteTail() {
    // if list is empty
    if (!this.tail) {
      return null;
    } else {
      let removedTail = this.tail;
      // If 1 node left
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return removedTail.value;
    }

  }

  search(value) {
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

}

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

list.prepend(0);
list.prepend(-1);

//console.log(list.search(999));

list.deleteHead();
list.deleteTail();

console.log(list);



// ---------------------------------------------------------

// class Node {
//   constructor(value) {
//     this.value = value,
//     this.next = null;
//   }
// }
//
// class SinglyLinkList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//
//   push(val) {
//     let newNode = new Node(val);
//     if(!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
//
//   pop() {
//     if(!this.head) return undefined;
//     let current = this.head;
//     let newTail = current;
//     while(current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     if(this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }
//
// }

// let list = new SinglyLinkList();
// list.push(1);
// list.push(2);
// list.pop();
// list.pop();
// console.log(list);
