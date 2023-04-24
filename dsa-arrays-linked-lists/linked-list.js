/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
    }

    if (this.tail !== null) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
    }

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    newNode.next = this.head;
    this.head = newNode;

    if (this.tail === null) {
      this.tail = newNode;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;

      return current.val;
    }

    while (current) {
      if (current.next === this.tail) {
        this.tail = current;
        this.length--;
        return current.next.val;
      }

      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let current = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;

      return current.val;
    } else {
      this.head = current.next;
      this.length--;

      return current.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === idx) {
        return current.val;
      }

      current = current.next;
      count++;
    }

    throw new Error('Idx not available');
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head;
    let count = 0;
    let found = false;

    while (current) {
      if (count === idx) {
        current.val = val;
        found = true;
      }

      current = current.next;
      count++;
    }

    if (!found) throw new Error('Idx not available');
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);
    let current = this.head;
    let count = 0;

    if (idx < 0 || idx > this.length) {
      throw new Error('Idx not available');
    }

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    } else if (idx === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      while (current) {
        if (count + 1 === idx) {
          newNode.next = current.next;
          current.next = newNode;
          this.length++;
        }

        count++;
        current = current.next;
      }
    }
  }


  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let current = this.head;

    if (idx < 0 || idx >= this.length) {
      throw new Error('invalid idx');
    }

    let count = 0;
    let removeVal;

    if (this.length === 1) {
      removeVal = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return removeVal;
    } else if (idx === 0) {
      removeVal = this.head.val;
      this.head = this.head.next;
      this.length--;
      return removeVal;
    } else {
      while (current) {
        if (count + 1 === idx) {
          removeVal = current.next.val;
          current.next = current.next.next;
          this.length--;
          return removeVal;
        }

        count++;
        current = current.next;
      }
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }

    let current = this.head;
    let sum = 0;

    while (current) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }

  reverseInPlace() {
    let current = this.head;
    this.tail = this.head;

    while (current) {
      let prevCurr = current;
      
      current = current.next;

    }

  }
}

module.exports = LinkedList;
