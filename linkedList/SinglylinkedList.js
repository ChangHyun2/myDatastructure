class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  cosntructor() {
    this.head = null;
    this.tail = null;
  }

  size() {
    if (!this.head) {
      return 0;
    }

    let current = this.head;
    let size = 1;

    while (current.next) {
      size++;
      current = current.next;
    }

    return size;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);

    if (!this.head) {
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;

    return this;
  }

  deleteTail() {
    if (!this.head) {
      // 빈 nodelist일 떄
      return null;
    }

    const originTail = this.tail;

    if (this.head === this.tail) {
      // node가 1개일 떄
      this.head = null;
      this.tail = null;
      return originTail;
    }

    let current = this.head;
    while (current.next.next) {
      //tail 바로 앞 node를 current로
      current = current.next;
    }

    current.next = null;
    this.tail = current;

    return originTail;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const originHead = this.head;

    if (this.head === this.tail) {
      // node가 1개일 때
      this.tail = null;
    }

    this.head = originHead.next;

    return originHead;
  }

  toNodes() {
    const nodes = [];

    let current = this.head;

    while (current) {
      nodes.push(current);
      current = current.next;
    }

    return nodes;
  }

  toValues() {
    const values = [];

    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

  fromValues(values) {
    values.forEach((value) => this.append(value));
    return this;
  }

  getNode(index) {
    if (index < 0 || index > this.size() - 1) {
      return null;
    }
    let currentIndex = 0;
    let current = this.head;

    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }

    return current;
  }
  setNode(index, value) {
    const node = this.getNode(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    let listSize = this.size();

    if (index > listSize || index < 0) {
      return false;
    }

    if (0 < index && index < listSize) {
      const prevNode = this.getNode(index - 1);
      const newNode = new Node(value);

      newNode.next = prevNode.next;
      prevNode.next = newNode;

      return this;
    }

    if (index === 0) {
      return this.prepend(value);
    } else {
      // if index == listSize
      return this.append(value);
    }
  }

  delete(index) {
    let listSize = this.size();
    if (index > listSize || index < 0) {
      return undefined;
    }
    if (0 < index && index < listSize - 1) {
      const prevNode = this.getNode(index - 1);
      prevNode.next = prevNode.next.next;
    }
    if (index === 0) {
      this.shift();
    } else {
      //index == listSize-1
      this.delete();
    }
  }

  reverse() {
    //https://www.geeksforgeeks.org/reverse-a-linked-list/ 참조
    this.tail = this.head;
    let current = this.head;
    let prev = null;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;

    return this;
  }
}
const linkedList = new SinglyLinkedList();
console.log(linkedList.append(1));
console.log(linkedList.append(2));
console.log(linkedList.append(3));
console.log(linkedList.append(4));
console.log(linkedList.append(5));
console.log(linkedList.append(6));
console.log(linkedList.toNodes());
linkedList.toNodes();
console.log(linkedList.toValues());
console.log(linkedList.size());
console.log(linkedList);
console.log(linkedList.deleteHead());
console.log(linkedList.size());
console.log(linkedList);
console.log(linkedList.deleteHead());
console.log(linkedList.size());
console.log(linkedList);
console.log(linkedList.deleteHead());
console.log(linkedList.size());
console.log(linkedList);
console.log(linkedList.deleteHead());
console.log(linkedList.size());
console.log(linkedList);
console.log(linkedList.deleteHead());
console.log(linkedList.size());
console.log(linkedList);
console.log(linkedList.deleteHead());
console.log(linkedList.size());
console.log(linkedList);
console.log(linkedList.append(1));
console.log(linkedList.insert(1, 3));
console.log(linkedList.insert(0, 4));
console.log(linkedList.insert(1, 5));
console.log(linkedList.setNode(1, 8));
console.log(linkedList);
console.log(linkedList.setNode(0, 0));
console.log(linkedList);
console.log(linkedList.setNode(linkedList.size() - 1, 8));
console.log(linkedList);

let arr = [];
for (let i = 0; i < linkedList.size(); i++) {
  arr.push(linkedList.getNode(i));
}
console.log(arr);
console.log(linkedList.size());
console.log("his");
console.log(linkedList.toNodes());
linkedList.reverse();
console.log(linkedList.toNodes());
