class Stack {
    constructor() {
        this._items = [];
    }

    pop() {
        if (!this.count) {
            throw new Error("The stack is empty. Cannot remove an item from the stack.");
        } else {
            return this._items.pop();
        }
    }

    push(item) {
        if (item) {
            this._items.push(item);
        } else {
            throw new Error("Must provide an item to add to the stack.");
        }
    }

    peek() {
        if (!this.count) {
            throw new Error("The stack is empty. Cannot peek into the stack.");
        } else {
            return this._items[this.count - 1];
        }
    }

    clear() {
        return this._items = [];
    }

    get count() {
        return this._items.length;
    }
}

const stack = new Stack();

const str = "hello";

function reverse(str) {
    let reversedStr = "";

    for (let letter of str) {
        stack.push(letter);
    }
    const count = stack.count;
    for (let i = 0; i < count; i++) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}

reverse(str);


