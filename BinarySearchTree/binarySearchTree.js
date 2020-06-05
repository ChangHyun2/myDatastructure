class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null; // child
    this.right = null; // child
    this.depth = 0;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BSTNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    /*
    current = root
    compare current.value, value> left or right
    check left or right
    if current.child, renew current
    compare current.value, ...
    if no current.child, current.child = newNode;
    */
    while (true) {
      if (current.value === value) return undefined;

      newNode.depth++;

      if (current.value < value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return this;
        }
      } else {
        // current.value > value
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return this;
        }
      }
    }
  }

  contains(value) {
    if (!this.root) return false;

    let current = this.root;

    while (current) {
      if (current.value === value) return true;

      current.value < value
        ? (current = current.right)
        : (current = current.left);
    }

    return false;
  }

  find(value) {
    if (!this.root) return undefined;

    let current = this.root;

    while (current) {
      if (current.value === value) return current;

      current.value < value
        ? (current = current.right)
        : (current = current.left);
    }

    return undefined;
  }

  findMax() {
    if (!this.root) return undefined;

    let current = this.root;

    while (current.right) {
      current = current.right;
    }

    return current;
  }

  findMin() {
    if (!this.root) return undefined;

    let current = this.root;

    while (current.left) {
      current = current.left;
    }

    return current;
  }
}

const bst = new BST();
bst.insert(41);
bst.insert(20);
bst.insert(30);
bst.insert(65);
bst.insert(10);
bst.insert(1);
bst.insert(80);
bst.insert(50);
console.log(bst.find(50));
console.log(bst.find(41));
console.log(bst.findMax());
console.log(bst.findMin());
console.log(bst.find(10));
