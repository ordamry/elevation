//exercise 1:
class UniqueArray {
  constructor() {
    this.items = [];
    this.itemSet = new Set(); 
  }

  add(item) {
    if (!this.itemSet.has(item)) {
      this.items.push(item);
      this.itemSet.add(item);
    }
  }

  showAll() {
    console.log(this.items);
  }

  exists(item) {
    return this.itemSet.has(item);
  }

  get(index) {
    return index >= 0 && index < this.items.length ? this.items[index] : -1;
  }
}
//exercise 2:
class UniqueArray2 {
  constructor() {
    this.items = [];
  }

  _exists(item) {
    return this.items.some(existingItem => JSON.stringify(existingItem) === JSON.stringify(item));
  }

  add(item) {
    if (!this._exists(item)) {
      this.items.push(item);
    }
  }

  showAll() {
    console.log(this.items);
  }

  exists(item) {
    return this._exists(item);
  }

  get(index) {
    return index >= 0 && index < this.items.length ? this.items[index] : -1;
  }
}
