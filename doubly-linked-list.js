class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    const node = new DoublyLinkedListNode(val);
    node.next = this.head;
    if (this.head) this.head.prev = node;
    this.head = node;
    if (!this.tail) this.tail = this.head;
    this.length++;
  }

  addToTail(val) {
    this.length++;
    if (!this.tail) {
      this.tail = new DoublyLinkedListNode(val);
      this.head = this.tail;
      return;
    }
    this.tail.next = new DoublyLinkedListNode(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
