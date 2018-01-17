// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.leftStack = new Stack();
    this.rightStack = new Stack();
  }

  add(record) {
    this.leftStack.push(record);
  }

  remove() {
    while (this.leftStack.peek()) {
      this.rightStack.push(this.leftStack.pop());
    }

    const nextValue = this.rightStack.pop();

    while (this.rightStack.peek()) {
      this.leftStack.push(this.rightStack.pop());
    }

    return nextValue;
  }

  peek() {
    while (this.leftStack.peek()) {
      this.rightStack.push(this.leftStack.pop());
    }

    const nextValue = this.rightStack.peek();

    while (this.rightStack.peek()) {
      this.leftStack.push(this.rightStack.pop());
    }

    return nextValue;
  }
}

module.exports = Queue;
