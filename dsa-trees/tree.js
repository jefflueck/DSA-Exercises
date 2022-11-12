/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // start count at 0;
    let count = 0;
    // if there is no root, return count;
    if (!this.root) return count;
    // create a stack and push the root into it;
    let stack = [this.root];
    // while the stack is not empty;
    while (stack.length) {
      // pop the stack;
      let node = stack.pop();
      // add the value of the node to the count;
      count += node.val;
      // push the children of the node into the stack;
      stack.push(...node.children);
    }
    // return the count;
    return count;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // start count at 0;
    let count = 0;
    // if there is no root, return count;
    if (!this.root) return count;
    // create a stack and push the root into it;
    let stack = [this.root];
    // while the stack is not empty;
    while (stack.length) {
      // pop the stack;
      let node = stack.pop();
      // if the value of the node is even, add 1 to the count;
      if (node.val % 2 === 0) count++;
      // push the children of the node into the stack;
      stack.push(...node.children);
    }
    // return the count;
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // start count at 0;
    let count = 0;
    // if there is no root, return count;
    if (!this.root) return count;
    // create a stack and push the root into it;
    let stack = [this.root];
    // while the stack is not empty;
    while (stack.length) {
      // pop the stack;
      let node = stack.pop();
      // if the value of the node is greater than lowerBound, add 1 to the count;
      if (node.val > lowerBound) count++;
      // push the children of the node into the stack;
      stack.push(...node.children);
    }
    // return the count;
    return count;
  }
}

module.exports = { Tree, TreeNode };
