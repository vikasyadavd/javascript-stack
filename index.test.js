const { Stack } = require("./index");

describe('Javascript Stack', () => {
  let stack;
  beforeAll(() => {
    stack = new Stack();
  })
  it('Should created Empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  it('Can push to the top', () => {
    stack.push(20);
    expect(stack.top).toBe(0);
    expect(stack.peek()).toBe(20);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(1);
  });

  it('Can pop value from the top', () => {
    expect(stack.pop()).toBe(20);
    expect(stack.items).toEqual({});
    expect(stack.top).toBe(-1);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });
});
