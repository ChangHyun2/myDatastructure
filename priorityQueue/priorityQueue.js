/*
insertion : O(logn)
removal : O(logn)
search : O(n)

binary heaps는 sorting에 사용되며, priority queue와 같은 다른 자료 구조를 구현할 떄에 유용함.
*/

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  // use min heap!
  constructor() {
    this.queue = [];
  }

  heapifyDown(startIndex = 0) {
    let parentIndex = startIndex;
    let leftChildIndex = parentIndex * 2 + 1;
    let rightChildIndex = parentIndex * 2 + 2;

    while (leftChildIndex < this.queue.length) {
      // rightChild가 undefined일 경우, leftChildIndex가 할당됨.
      let minChildIndex = null;
      if (this.queue[rightChildIndex]) {
        minChildIndex =
          this.queue[leftChildIndex].priority >
          this.queue[rightChildIndex].priority
            ? rightChildIndex
            : leftChildIndex;
      } else {
        minChildIndex = leftChildIndex;
      }

      if (
        this.queue[parentIndex].priority > this.queue[minChildIndex].priority
      ) {
        this.swap(parentIndex, minChildIndex);
        parentIndex = minChildIndex;
        leftChildIndex = parentIndex * 2 + 1;
        rightChildIndex = parentIndex * 2 + 2;
      } else break;
    }
  }

  swap(index1, index2) {
    const temp = this.queue[index1];
    this.queue[index1] = this.queue[index2];
    this.queue[index2] = temp;
    return temp;
  }

  heapifyUp(startIndex = this.queue.length - 1) {
    let childIndex = startIndex;

    while (childIndex > 0) {
      let parentIndex = Math.floor((childIndex - 1) / 2);

      if (this.queue[parentIndex].priority > this.queue[childIndex].priority) {
        this.swap(parentIndex, childIndex);
        childIndex = parentIndex;
      } else {
        break;
      }
    }
    return this.queue;
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.queue.push(newNode);
    return this.heapifyUp();
  }

  dequeue() {
    if (this.queue.length === 1) {
      const temp = this.queue[0];
      this.queue = [];
      return temp;
    }
    // 0 1 2 3 4 5 6 7 8 9 10
    const temp = this.queue[0];
    this.queue[0] = this.queue.pop();
    this.heapifyDown();
    return temp;
  }
}

const PQ = new PriorityQueue();

PQ.enqueue(1, 1);
PQ.enqueue(1, 4);
PQ.enqueue(1, 2);
PQ.enqueue(1, 4);
PQ.enqueue(1, 3);
PQ.enqueue(1, 3);
PQ.enqueue(1, 12);
PQ.enqueue(1, 20);
PQ.enqueue(1, 3);
console.log(PQ.queue);
PQ.enqueue(10, 1);
console.log(PQ.queue);
PQ.enqueue(3, 8);
PQ.enqueue(4, 1);
console.log(PQ.queue);
console.log(PQ.dequeue());
console.log(PQ);
console.log(PQ.dequeue());
console.log(PQ.dequeue());
console.log(PQ.dequeue());
console.log(PQ.dequeue());
console.log(PQ.dequeue());
console.log(PQ.dequeue());
console.log(PQ.dequeue());
console.log(PQ.dequeue());
console.log(PQ);
