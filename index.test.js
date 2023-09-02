class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  getTop() {
    return this.items[this.top];
  }

  add(value) {
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

describe('Javascript Stack', () => {
  it.todo('Should created Empty');

  it.todo('Can push to the top');

  it.todo('can pop value from the top');
});
