/**
 * LIFO (Last-In-First-Out) Order
 * 
 * Use Cases: Stacks are used in a variety of applications,
 *  including function call management in programming languages (the call stack),
 *  expression evaluation, undo/redo functionality in software, and parsing operations (e.g., syntax checking)
 * 
 * Efficiency: The time complexity of basic stack operations
 *  (push, pop, peek) is typically O(1),
 *  which means they have constant time complexity and are very efficient.
 */
class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    peek() {
        return this.items[this.top];
    }

    size() {
        return this.top + 1;
    }

    isEmpty() {
        return this.top === -1;
    }

    // Overflow (stacks may have a maximum capacity)
    // Underflow (try to pop an element from an empty stack)

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }

    pop() {
        const valueToPop = this.items[this.top];
        delete this.items[this.top];
        this.top -= 1;
        return valueToPop;
    }
}

module.exports = { Stack };

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;