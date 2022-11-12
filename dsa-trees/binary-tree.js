/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    // ? My solution doesn't work, not sure why.
    // // if there is no root, return 0;
    // if (!this.root) return 0;
    // // create a stack and push the root into it;
    // let stack = [this.root];
    // // create a count variable and set it to 1;
    // let count = 0;
    // // while the stack is not empty;
    // while (stack.length) {
    //   // pop the stack;
    //   let node = stack.pop();
    //   // if the node has no children, return the count;
    //   if (!node.left && !node.right) return count;
    //   // if the node has a left child, push it into the stack;
    //   if (node.left) stack.push(node.left);
    //   // if the node has a right child, push it into the stack;
    //   if (node.right) stack.push(node.right);
    //   // increment the count;
    //   count++;
    // }

    // ? Solution from the solution file
    if (!this.root) return 0;

    function minDepthHelper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return minDepthHelper(node.right) + 1;
      if (node.right === null) return minDepthHelper(node.left) + 1;
      return (
        Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1
      );
    }

    return minDepthHelper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    // if the tree is empty, return 0;
    if (!this.root) return 0;

    function maxDepthHelper(node) {
      // if the node has no children, return 1;
      if (!node.left && !node.right) return 1;
      // if the node has a left child, call the function on the left child;
      if (node.left === null) return maxDepthHelper(node.left) + 1;
      // if the node has a right child, call the function on the right child;
      if (node.right === null) return maxDepthHelper(node.right) + 1;
      // return the max of the left and right child + 1;
      return (
        Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1
      );
    }
    return maxDepthHelper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // if the tree is empty, return 0;
    if (!this.root) return 0;
    // create a result variable and set it to 0;
    let result = 0;

    function maxSumHelper(node) {
      // if the node is null, return 0;
      if (node === null) return 0;
      // create a leftSum variable and set it to the function call on the left child;
      const leftSum = maxSumHelper(node.left);
      // create a rightSum variable and set it to the function call on the right child;
      const rightSum = maxSumHelper(node.right);
      // if the leftSum + rightSum + node.val is greater than the result, set the result to that;
      if (leftSum + rightSum + node.val > result) {
        result = leftSum + rightSum + node.val;
      }
      // return the max of the leftSum and rightSum + node.val;
      return Math.max(leftSum, rightSum) + node.val;
    }
    maxSumHelper(this.root);
    // return the result;
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    // if the tree is empty, return null;
    if (!this.root) return null;
    // create a result variable and set it to null;
    let result = null;

    function nextLargerHelper(node) {
      // if the node is null, return;
      if (node === null) return;
      // if the node.val is greater than the lowerBound;
      if (node.val > lowerBound) {
        // if the result is null or the node.val is less than the result, set the result to the node.val;
        if (result === null || node.val < result) {
          result = node.val;
        }
      }
      // call the function on the left child;
      nextLargerHelper(node.left);
      // call the function on the right child;
      nextLargerHelper(node.right);
    }
    nextLargerHelper(this.root);
    // return the result;
    return result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    // ? One case fails not sure why
    // // if the tree is empty, return false;
    // if (!this.root) return false;
    // // create a queue and push the root into it;
    // let queue = [this.root];
    // // while the queue is not empty;
    // while (queue.length) {
    //   // create a length variable and set it to the length of the queue;
    //   let length = queue.length;
    //   // create a found variable and set it to false;
    //   let found = false;
    //   // loop through the queue;
    //   for (let i = 0; i < length; i++) {
    //     // create a node variable and set it to the first element in the queue;
    //     let node = queue.shift();
    //     // if the node is equal to node1 or node2, set found to true;
    //     if (node === node1 || node === node2) {
    //       found = true;
    //     }
    //     // if the node has a left child, push it into the queue;
    //     if (node.left) queue.push(node.left);
    //     // if the node has a right child, push it into the queue;
    //     if (node.right) queue.push(node.right);
    //   }
    //   // if found is true, return true;
    //   if (found) return true;
    // }
    // // return false;
    // return false;
    // * Solution from the solution file
    if (node1 === this.root || node2 === this.root) return false;

    function findLevelAndParent(
      nodeToFind,
      currentNode,
      level = 0,
      data = { level: 0, parent: null }
    ) {
      if (data.parent) return data;
      if (currentNode.left === nodeToFind || currentNode.right === nodeToFind) {
        data.level = level + 1;
        data.parent = currentNode;
      }
      if (currentNode.left) {
        findLevelAndParent(nodeToFind, currentNode.left, level + 1, data);
      }
      if (currentNode.right) {
        findLevelAndParent(nodeToFind, currentNode.right, level + 1, data);
      }
      return data;
    }

    let node1Info = findLevelAndParent(node1, this.root);
    let node2Info = findLevelAndParent(node2, this.root);

    let sameLevel =
      node1Info && node2Info && node1Info.level === node2Info.level;
    let differentParents =
      node1Info && node2Info && node1Info.parent !== node2Info.parent;
    return sameLevel && differentParents;
  }
  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    // ? Not sure why mine fails
    // // if the tree is empty, return an empty string;
    // if (!tree.root) return '';
    // // create a result variable and set it to an empty string;
    // let result = '';
    // // create a queue and push the root into it;
    // let queue = [tree.root];
    // // while the queue is not empty;
    // while (queue.length) {
    //   // create a length variable and set it to the length of the queue;
    //   let length = queue.length;
    //   // loop through the queue;
    //   for (let i = 0; i < length; i++) {
    //     // create a node variable and set it to the first element in the queue;
    //     let node = queue.shift();
    //     // if the node is null, push null into the result;
    //     if (node === null) {
    //       result += 'null,';
    //       continue;
    //     }
    //     // push the node.val into the result;
    //     result += `${node.val},`;
    //     // if the node has a left child, push it into the queue;
    //     if (node.left) queue.push(node.left);
    //     // if the node has a right child, push it into the queue;
    //     if (node.right) queue.push(node.right);
    //   }
    // }
    // // return the result;
    // return result;

    const values = [];

    function traverse(node) {
      if (node) {
        values.push(node.val);
        traverse(node.left);
        traverse(node.right);
      } else {
        values.push('#');
      }
    }

    traverse(tree.root);
    return values.join(' ');
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
    // ? Not sure why mine fails
    // // if the stringTree is an empty string, return null;
    // if (stringTree === '') return null;
    // // create a tree variable and set it to a new BinaryTree;
    // let tree = new BinaryTree();
    // // create a queue and push the root into it;
    // let queue = [tree.root];
    // // create a stringTreeArr variable and set it to the stringTree split by commas;
    // let stringTreeArr = stringTree.split(',');
    // // while the queue is not empty;
    // while (queue.length) {
    //   // create a length variable and set it to the length of the queue;
    //   let length = queue.length;
    //   // loop through the queue;
    //   for (let i = 0; i < length; i++) {
    //     // create a node variable and set it to the first element in the queue;
    //     let node = queue.shift();
    //     // create a left variable and set it to the first element in the stringTreeArr;
    //     let left = stringTreeArr.shift();
    //     // create a right variable and set it to the first element in the stringTreeArr;
    //     let right = stringTreeArr.shift();
    //     // if the left is not null, set the node.left to a new Node with the left as the value;
    //     if (left !== 'null') {
    //       node.left = new Node(left);
    //       // push the node.left into the queue;
    //       queue.push(node.left);
    //     }
    //     // if the right is not null, set the node.right to a new Node with the right as the value;
    //     if (right !== 'null') {
    //       node.right = new Node(right);
    //       // push the node.right into the queue;
    //       queue.push(node.right);
    //     }
    //   }
    // }
    // // return the tree;
    // return tree;
    if (!stringTree) return null;

    const values = stringTree.split(' ');

    function buildTree() {
      // building a tree starting from the beginning of the array
      if (values.length) {
        const currentVal = values.shift();

        if (currentVal === '#') return null;

        // remember to convert values back into numbers
        let currentNode = new BinaryTreeNode(+currentVal);
        currentNode.left = buildTree();
        currentNode.right = buildTree();

        return currentNode;
      }
    }

    const root = buildTree();
    return new BinaryTree(root);
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2, currentNode = this.root) {
    // ? Not sure why mine fails
    //   // if the node1 or node2 is the root, return null;
    //   if (node1 === this.root || node2 === this.root) return null;
    //   // create a node1Info variable and set it to the result of the findLevelAndParent function with node1 and the root;
    //   let node1Info = this.findLevelAndParent(node1, this.root);
    //   // create a node2Info variable and set it to the result of the findLevelAndParent function with node2 and the root;
    //   let node2Info = this.findLevelAndParent(node2, this.root);
    //   // create a sameLevel variable and set it to the result of the sameLevel function with node1Info and node2Info;
    //   let sameLevel = this.sameLevel(node1Info, node2Info);
    //   // create a differentParents variable and set it to the result of the differentParents function with node1Info and node2Info;
    //   let differentParents = this.differentParents(node1Info, node2Info);
    //   // if sameLevel and differentParents are both true, return node1Info.parent;
    //   if (sameLevel && differentParents) return node1Info.parent;
    //   // return null;
    //   return null;
    // }
    // base case 1: empty tree
    if (currentNode === null) return null;

    // base case 2: root is one of the target nodes
    if (currentNode === node1 || currentNode === node2) return currentNode;

    // recursively search the left sub-tree
    const left = this.lowestCommonAncestor(node1, node2, currentNode.left);

    // recursively search the right sub-tree
    const right = this.lowestCommonAncestor(node1, node2, currentNode.right);

    // if neither left nor right is null, currentNode is the ancestor
    if (left !== null && right !== null) return currentNode;

    // if one node is not null, return it
    if (left !== null || right !== null) return left || right;

    // left and right are both null, return null
    if (left === null && right === null) return null;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
