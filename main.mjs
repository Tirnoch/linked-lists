class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(data) {
    const node = new Node(data);
    if (this.head === null) this.head = node;
    else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  prepend(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  first() {
    return this.head.data;
  }
  tail() {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    return current.data;
  }
  at(index) {
    if (!index || index < 0 || index > this.length) return;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  pop() {
    if (this.length === 0) return;
    let current = this.head;
    let previousNode;
    while (current.next) {
      previousNode = current;
      current = current.next;
    }
    previousNode.next = null;
    this.length--;
  }
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) return true;
      current = current.next;
    }
    return false;
  }
  find(value) {
    let current = this.head;
    let i = 0;
    if (this.length === 0) return;
    while (current) {
      if (current.data === value) return i;
      current = current.next;
      i++;
    }
    return;
  }
  toString() {
    let string = ``;
    if (this.head === null) console.log('( )');
    else {
      let current = this.head;
      while (current) {
        string += `( ${current.data} ) -> `;
        current = current.next;
      }
    }
    string += null;
    console.log(string);
  }
  insertAt(value, index) {
    if (index < 0 || index > this.length) return;
    else if (index === 0) this.prepend(value);
    else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 1; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.length++;
    }
  }
  removeAt(index) {
    if (index < 0 || index >= this.length || !index) return;
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.length--;
    return removedNode.value;
  }
}

// Test Cases
const list = new LinkedList();
list.append(2);
list.append(3);
list.append(4);
list.prepend(1);
// list.insertAt(7, 2);
// list.removeAt();
list.pop();
console.log(list);
console.log(list.size());
console.log(list.contains(2));
console.log(list.contains(4));
console.log(list.contains(50));
console.log(`Head of the Linked List is ${list.first()}`);
console.log(`Tail of the list is ${list.tail()}`);
console.log(list.find(2));

list.toString();
