/*

BST와 아주 유사하지만 달라.

Binary Heaps는 Priority Queues를 구현하기 위해 사용됨.
priority queues는 자료 구조에서 흔히 사용됨.

binary heaps는 graph traversal algorithms와도 함께 사용됨.

*/

class BinaryHeap {
  constructor() {
    this.container = [];
  }

  heapifyUp(startIndex) {
    const swap = (index1, index2) => {
      let temp = this.container[index1];
      this.container[index1] = this.container[index2];
      this.container[index2] = temp;
    };

    let index = startIndex || this.container.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.container[parentIndex] < this.container[index]) {
        swap(parentIndex, index);
        index = parentIndex;
      } else {
        return this.container;
      }
    }

    return this.container;
  }
  heapifyDown(startIndex) {
    const swap = (index1, index2) => {
      let temp = this.container[index1];
      this.container[index1] = this.container[index2];
      this.container[index2] = temp;
    };

    let index = startIndex || 0;

    while (index < this.container.length) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;

      const biggerChildIndex =
        this.container[leftIndex] > this.container[rightIndex]
          ? leftIndex
          : rightIndex;

      if (this.container[index] === this.container[biggerChildIndex]) break;

      if (this.container[index] < this.container[biggerChildIndex]) {
        swap(biggerChildIndex, index);
      }

      index = biggerChildIndex;
    }
  }

  insert(value) {
    this.container.push(value);
    return this.heapifyUp();
  }

  extractMax() {
    const temp = this.container[0];
    this.container[0] = this.container.pop();
    this.heapifyDown();
    return temp;
  }
}

const binaryHeap = new BinaryHeap();

console.log(binaryHeap.insert(30));
console.log(binaryHeap.insert(39));
console.log(binaryHeap.insert(42));
console.log(binaryHeap.insert(3));
console.log(binaryHeap.insert(124));
console.log(binaryHeap.insert(24));
console.log(binaryHeap.insert(30));
console.log(binaryHeap.insert(41));
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap);
console.log(binaryHeap.extractMax());
console.log(binaryHeap);
console.log(binaryHeap.extractMax());
console.log(binaryHeap);
console.log(binaryHeap.extractMax());
binaryHeap.insert(39);
binaryHeap.insert(41);
binaryHeap.insert(33);
binaryHeap.insert(18);
binaryHeap.insert(27);
binaryHeap.insert(12);
binaryHeap.insert(55);
