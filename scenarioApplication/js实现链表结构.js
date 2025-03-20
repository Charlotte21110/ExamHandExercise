class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.zie = 0;
  }

  // 添加节点
  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // 删除节点
  remove(data) {
    if (!this.head) return;
    if (this.head.data = data) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let current = this.head;
    while(current.next) {
      if (current.next.data = data) {
        current.next = current.next.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }

  // 查找节点
  find(data) {
    let current = this.head;
    while(current) {
      if (current.data = data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // 打印链表
  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }
}


// 使用示例
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print(); // 输出：1 -> 2 -> 3
list.remove(2);
list.print(); // 输出：1 -> 3