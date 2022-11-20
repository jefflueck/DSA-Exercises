class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val > val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    const insertNode = (node) => {
      if (node.val > val) {
        if (!node.left) {
          node.left = newNode;
          return this;
        }
        insertNode(node.left);
      } else {
        if (!node.right) {
          node.right = newNode;
          return this;
        }
        insertNode(node.right);
      }
    };
    insertNode(this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) return currentNode;
      if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    let currentNode = this.root;
    const findNode = (node) => {
      if (node.val === val) return node;
      if (node.val > val) {
        if (!node.left) return undefined;
        return findNode(node.left);
      } else {
        if (!node.right) return undefined;
        return findNode(node.right);
      }
    };
    return findNode(currentNode);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];
    const traverse = (node) => {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    };
    traverse(this.root);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visited = [];
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      visited.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (currentNode.val === val) {
        if (!currentNode.left && !currentNode.right) {
          if (parentNode.left === currentNode) {
            parentNode.left = null;
          } else {
            parentNode.right = null;
          }
          return currentNode;
        } else if (!currentNode.left || !currentNode.right) {
          if (parentNode.left === currentNode) {
            parentNode.left = currentNode.left || currentNode.right;
          } else {
            parentNode.right = currentNode.left || currentNode.right;
          }
          return currentNode;
        } else {
          let successor = currentNode.right;
          while (successor.left) successor = successor.left;
          currentNode.val = successor.val;
          if (successor.right) {
            successor.val = successor.right.val;
            successor.right = null;
          } else {
            successor = null;
          }
          return currentNode;
        }
      }
      parentNode = currentNode;
      if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {
    const traverse = (node) => {
      if (!node) return 0;
      const left = traverse(node.left);
      const right = traverse(node.right);
      if (left === -1 || right === -1) return -1;
      if (Math.abs(left - right) > 1) return -1;
      return Math.max(left, right) + 1;
    };
    return traverse(this.root) !== -1;
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    let currentNode = this.root;
    while (currentNode) {
      if (!currentNode.right && currentNode.left) {
        currentNode = currentNode.left;
        while (currentNode.right) currentNode = currentNode.right;
        return currentNode.val;
      }
      if (
        currentNode.right &&
        !currentNode.right.left &&
        !currentNode.right.right
      ) {
        return currentNode.val;
      }
      currentNode = currentNode.right;
    }
  }
}

module.exports = BinarySearchTree;
