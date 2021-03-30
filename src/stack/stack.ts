export class Stack<T> {
  private _items: T[];
  get length(): number {
    return this._items.length;
  }

  constructor() {
    this._items = [];
  }

  push(item: T) {
    this._items.push(item);
  }

  pop() {
    this._items.pop();
  }

  has(item: T): boolean {
    return this._items.indexOf(item) !== -1;
  }
}
