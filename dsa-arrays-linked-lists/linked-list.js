/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  // * Solution helper method
  _get(idx) {
    let current = this.head;
    let counter = 0;

    while (current !== null && counter != idx) {
      current = current.next;
      counter += 1;
    }
    return current;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0;
    let current = this.head;
    if (idx === current.val) {
      return current.val;
    } else {
      while (counter !== idx) {
        current = current.next;
        counter++;
      }
      return current.val;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // if (idx < 0 || idx >= this.length) return null;
    // let current = this.head;
    // let counter = 0;
    // let foundNode = current.val;
    // if (foundNode) {
    //   current.val = val;
    //   return val;
    // } else {
    //   counter += 1;
    //   current = current.next;
    // }

    // * Closer to solution code, I was on the right track
    let foundNode = this._get(idx);
    if (foundNode) {
      foundNode.val = val;
      return val;
    }
    return null;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let previous = this._get(idx - 1);
    let newNode = new Node(val);
    // ? A little confused after this point
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let previous = this._get(idx - 1);
    let removed = previous.next;
    previous.next = removed.next;
    this.length--;
    return removed.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let sum = 0;
    let counter = 0;
    if (!current) return 0;
    while (current) {
      sum += current.val;
      counter++;
      current = current.next;
    }
    return sum / counter;
  }
}

module.exports = LinkedList;
