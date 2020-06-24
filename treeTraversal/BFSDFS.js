class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    this.depth = 0;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let current = this.root;
    const newNode = new Node(value);

    while (current) {
      if (current.value === value) {
        return undefined;
      }
      newNode.depth++;

      if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return this;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return this;
        }
      }
    }
  }
  findMax() {
    if (!this.root) {
      return undefined;
    }

    let current = this.root;

    while (current) {
      if (current.right) {
        current = current.right;
      }
    }

    return current;
  }

  findMin() {
    if (!this.root) {
      return undefined;
    }

    let currnet = this.root;

    while (current) {
      current = current.left;
    }

    return current;
  }

  find(value) {
    let current = this.root;

    while (current) {
      if (current.value === value) {
        return current;
      }

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return undefined;
  }

  contains(value) {
    if (!this.root) return undefined;

    let current = this.root;

    while (current) {
      if (current.value === value) return true;

      if (current.value < value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  BFS() {
    if (!this.root) {
      return undefined;
    }

    const data = [];
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      let current = queue.shift();
      data.push(current);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }

  // preOrder DFS
  // 전위 순회
  DFSPreOrder() {
    const data = [];

    let current = this.root;

    function traverse(node) {
      // helper function
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }
  /*

        10
     6     15
    3 8      20 
  
    3 8 6 20 15 10

    higher 1. depth가 있으면 계속 depth를 올리고, 2. right가 있으면 right를 push. 
  */

  DFSPostOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    }

    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}
const bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);
console.log(bst);
/*
      3
    2   7
   1   4 10
*/
console.log(bst.BFS());
console.log(bst.DFSPreOrder());
console.log(bst.DFSPostOrder());
console.log(bst.DFSInOrder());
