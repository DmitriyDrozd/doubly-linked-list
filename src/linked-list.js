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

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
