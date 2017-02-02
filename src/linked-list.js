const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if (this.length == 0) {
            this._head = this._tail = node;
        }
        else {
            this._tail.next = node;
            this._tail = node;
        }
        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    getNodeByIndex(index) {
        let current = this._head;
        for (let i = 0; i < index; i++){
            current = current.next;
        }
        return current;
    }

    at(index) {
        return this.getNodeByIndex(index).data;
    }

    insertAt(index, data) {
        this.getNodeByIndex(index).data = data;
    }

    isEmpty() {
        return !this.length;
    }

    clear() {
        this._head.prev = null;
        this._head.data = null;
        this._head.next = null;
        this._tail.prev = null;
        this._tail.data = null;
        this._tail.next = null;
        this.length = 0;
    }

    deleteAt(index) {
        if (!this.isEmpty()) {
            if (this.length == 1) {
                this.clear();
                return;
            }

            let nodeToDelete = this.getNodeByIndex(index);
            let prevNode = this.getNodeByIndex(--index);

            if (nodeToDelete == this._tail) {
                this._tail = prevNode;
                this._tail.next = null;
            }
            else if (nodeToDelete == this._head) {
                this._head = this._head.next;
            }
            else {
                prevNode.next = nodeToDelete.next;
                nodeToDelete.next.prev = prevNode;
            }

            this.length--;
        }
    }

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
