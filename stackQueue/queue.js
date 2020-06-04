class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return ++this.size;
  }
  dequeue() {
    if (!this.head) {
      return null;
    }

    if (this.size === 1) {
      this.tail = null;
    }

    const originFirst = this.head;
    this.head = this.head.next;

    this.size--;
    return originFirst;
  }
}
const queue = new Queue();
queue.enqueue(1);
console.log(queue);
queue.enqueue(2);
console.log(queue);
queue.enqueue(3);
console.log(queue);
queue.enqueue(4);
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
