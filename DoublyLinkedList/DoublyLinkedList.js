class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;

    this.tail = newNode;

    return this;
  }

  deleteTail() {
    if (!this.head) {
      return null;
    }

    const originTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return originTail;
    }

    this.tail = originTail.prev;
    this.tail.next = null;

    originTail.prev = null;
    return originTail;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.head.prev = newNode;
    newNode.next = this.head;

    this.head = newNode;

    return this;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return null;
    }

    const originHead = this.head;

    this.head = originHead.next;
    this.head.prev = null;

    originHead.next = null;
    return originHead;
  }

  values() {
    const values = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }

  nodes() {
    const values = [];
    let current = this.head;

    while (current) {
      values.push(current);
      current = current.next;
    }

    return values;
  }

  getNode(index) {
    if (index >= 0) {
      let count = 0;

      let current = this.head;

      while (current) {
        if (count !== index) {
          count++;
        } else {
          return current ? current : undefined;
        }
        current = current.next;
      }

      return current;
    } else {
      let count = -1;
      let current = this.tail;

      while (current) {
        if (count !== index) {
          count--;
        } else {
          return current ? current : undefined;
        }

        current = current.prev;
      }

      return undefined;
    }
  }

  set(index, value) {
    const node = this.getNode(index);

    if (node) {
      node.value = value;
      return node;
    }

    return undefined;
  }

  fromArray(arr) {
    arr.forEach((item) => this.append(item));
  }

  insertBefore(index, newNode) {
    const node = this.getNode(index);
    if (!node || !node.prev) return undefined;

    const prevNode = node.prev;

    node.prev = newNode;
    newNode.next = node;

    if (prevNode.prev) {
      prevNode.prev.next = newNode;
    } else {
      this.head = newNode;
    }

    return this.values();
  }

  insertAfter(index, newNode) {
    const node = this.getNode(index);
    if (!node || !node.next) return undefined;

    const nextNode = node.next;

    node.next = newNode;
    newNode.prev = node;

    if (nextNode.next) {
      nextNode.next.prev = newNode;
    } else {
      this.tail = newNode;
    }

    return this.values();
  }

  remove(value) {
    const removed = [];
    if (!this.head) return undefined;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        removed.push(current.value);

        if (current === this.head) {
          removed.push(this.deleteHead().value);
        } else if (current === this.tail) {
          removed.push(this.deleteTail().value);
        } else if (current.next) {
          const prevNode = current.prev;
          const nextNode = current.next;
          nextNode.prev = prevNode;
          prevNode.next = nextNode;
        }
      }

      current = current.next;
    }

    return removed ? removed : undefined;
  }

  reverse() {
    // from https://github.com/trekhleb/javascript-algorithms
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      prevNode = currNode.previous;

      currNode.next = prevNode;
      currNode.previous = nextNode;

      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}

const DLL = new DoublyLinkedList();
DLL.append("hello");
DLL.prepend("world");
DLL.deleteHead();
DLL.deleteTail();
DLL.append("hello");
DLL.append("hello");
DLL.append("hello");
DLL.append("hello");
DLL.append("sldkf");
DLL.prepend("world");
console.log(DLL);

console.log(DLL.getNode(0));
console.log(DLL.getNode(1));
console.log(DLL.getNode(-1));
console.log(DLL.values());
console.log(DLL.set(0, 1));
console.log(DLL.set(0, "firshead"));
console.log(DLL.set(3, 1));
console.log(DLL.set(3, 1));
DLL.fromArray([1, 2, 3, 4]);
console.log(DLL.getNode(-1));
console.log(DLL.getNode(-2));
console.log(DLL.getNode(-3));
console.log(DLL.getNode(-4));
console.log(DLL.getNode(-5));
console.log(DLL.values());
console.log(DLL.insertBefore(1, new Node("value")));
console.log(DLL.values());
console.log(DLL.append("hello"));
console.log(DLL.remove("hello"));
console.log(DLL.values());
