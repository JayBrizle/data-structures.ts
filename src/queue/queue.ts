export class Queue<T> {
  private _items: T[] = [];
  get length(): number {
    return this._items.length;
  }

  constructor() {}

  enqueue(item: T) {
    this._items.push(item);
  }

  dequeue(): T {
    return this._items.shift();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
