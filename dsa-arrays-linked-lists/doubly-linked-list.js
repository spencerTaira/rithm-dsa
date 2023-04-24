/** Node: node for a doubly linked list. */

class Node {
  prev = null;
  next = null;

  constructor(val=null) {
    this.val = val;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** get(idx) returns a node at the given index */

  _get(idx) {
    let current = this.head;
    let count = 0;

    if (idx < 0 || idx >= this.length) {
      throw new Error('idx not available');
    }

    while (current) {
      if (count === idx) {
        return current.val;
      }

      count++;
      current = current.next;
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }

  /** pop(): remove last item & return its value */

  pop() {
    if (this.length === 0) {
      throw new Error('List is empty');
    }

    let lastVal = this.tail.val;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;
    return lastVal;
  }

  /** shift(): remove first item & return its value */

  shift() {
    if (this.length === 0) {
      throw new Error('List is empty');
    }

    let firstVal = this.head.val;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;
    return firstVal;
  }

  /** getAt(idx): get val at idx.*/

  getAt(idx) {
    return this._get(idx);
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    if (idx < 0 || idx >= this.length) {
      throw new Error('Idx is out of range');
    }
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === idx) {
        current.val = val;
        return val;
      }

      count++;
      current = current.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error('Idx is out of range');
    }

    const newNode = new Node(val);
    let current = this.head;
    let count = 0;

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (idx === 0) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else if (idx === this.length) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      while (current) {
        if (count === idx) {
          current.prev.next = newNode;
          newNode.prev = current.prev;
          current.prev = newNode;
          newNode.next = current;
          break;
        }

        count++;
        current = current.next;
      }
    }

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Idx is invalid');
    }

    let currVal;

    if (this.length === 1) {
      currVal = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return currVal;
    } else if (idx === 0) {
      currVal = this.head.val;
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return currVal;
    } else if (idx === this.length - 1) {
      currVal = this.tail.val;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return currVal;
    } else {
      let count = 0;
      let current = this.head;

      while (current) {
        if (count === idx) {
          currVal = current.val;
          current.prev.next = current.next;
          current.next.prev = current.prev;
          this.length--;
          return currVal;
        }

        count++;
        current = current.next;
      }
    }
  }

  /** return average (mean) of list values. */

  average() {

  }
}

module.exports = DoublyLinkedList;
