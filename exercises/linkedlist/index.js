// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  setNext(node) {
    this.next = node;
  }

  setData(data) {
    this.data = data;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // [Symbol.iterator]() {
  //   let current = this.head;
  //   return {
  //     next: () => {
  //       if (current) {
  //         const value = current;
  //         current = current.next;
  //         return { value, done: false };
  //       }
  //       return { done: true };
  //     },
  //   };
  // }

  // Generator solution automatically returns done:true when finished
  * [Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next || null;
  }

  removeLast() {
    // find the second-to-last element
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      // Existing nodes, append
      last.next = new Node(data);
    } else {
      // Empty chain, create anew
      this.head = new Node(data);
    }

    // if (!this.head) {
    //   this.head = new Node(data);
    //   return;
    // }

    // if (!this.head.next) {
    //   this.head.next = new Node(data);
    //   return;
    // }

    // let currentNode = this.head;
    // while (currentNode.next !== null) {
    //   currentNode = currentNode.next;
    // }

    // currentNode.next = new Node(data);
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
    // if (!this.head || index > this.size() - 1) {
    //   return null;
    // }
    // if (index === 0) {
    //   return this.head;
    // }

    // let currentNode = this.head;

    // for (let i = 0; i < index; i++) {
    //   currentNode = currentNode.next;
    // }

    // return currentNode;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }

    // previous.next so .next.next must _at_least_ be null
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}

module.exports = { Node, LinkedList };
