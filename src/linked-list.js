const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
    }

    append(data) {
        let node = new Node(data, this._tail, null);

        if (this.length == 0) {
            this._head = this._tail = node;
        }
        else {
            this._tail.next = node;
            this._tail = node;
        }
        this.length++;

        return this;
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
        let current = this.getNodeByIndex(index);
        current.data = data;

        return this;
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

        return this;
    }

    deleteAt(index) {
        if (!this.isEmpty()) {
            if (this.length == 1) {
                this.clear();
            }
            else {
                this.length--;

                let nodeToDelete = this.getNodeByIndex(index);
                let prevNode = this.getNodeByIndex(--index);

                if (nodeToDelete == this._tail) {
                    this._tail = this._tail.prev;
                    this._tail.next = null;
                }
                else if (nodeToDelete == this._head) {
                    this._head = this._head.next;
                }
                else {
                    prevNode.next = nodeToDelete.next;
                    nodeToDelete.next.prev = prevNode;
                }
            }
        }

        return this;
    }

    reverse() {
        let current = null;
        let swap = null;

        for (let i = 0; i < this.length; i++) {
            current = i == 0? this._tail : current.next;

            swap = current.prev;
            current.prev = current.next;
            current.next = swap;

            if (i == 0)
                this._head = current;
        }
        this._tail = current;

        return this;
    }

    indexOf(data) {
        let current = this._head;
        for (let i = 0; i < this.length; i++){
            if (current.data == data)
                return i;
            current = current.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
