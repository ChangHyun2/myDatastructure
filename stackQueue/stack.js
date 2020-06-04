class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size = 1;
      return this;
    }

    const originFirst = this.head;
    this.head = newNode;
    this.head.next = originFirst;

    return ++this.size;
  }

  pop(value) {
    if (!this.head) {
      return null;
    }

    const originFirst = this.head;
    this.head = this.head.next;

    if (this.size === 1) {
      this.tail = null;
    }

    this.size--;
    return originFirst;
  }
}

const stack = new Stack();
stack.push("head");
stack.push("2nd");
stack.push("3rd");
console.log(stack.size);
stack.pop();
console.log(stack.size);
console.log(stack);
stack.pop();
console.log(stack.size);
console.log(stack);
stack.pop();
console.log(stack.size);
console.log(stack);
