class MyHashTable {
  constructor(size = 53) {
    this.table = new Array(size);
    this.keys = {};
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.table.length;
    } // from colt's hash function

    return total;
  }

  set(key, value) {
    const hash = this._hash(key);
    this.keys[key] = hash;

    if (!this.table[hash]) {
      this.table[hash] = [{ key, value }];
      return this.table[hash];
    }

    const bucket = this.table[hash];
    const originPair = bucket.find((item) => item.key === key);

    if (originPair) {
      originPair.value = value;
    } else {
      bucket.push({ key, value });
    }

    return bucket;
  }

  get(key) {
    const hash = this._hash(key);

    if (!this.keys[key]) {
      return undefined;
    }

    const bucket = this.table[hash];

    return bucket.find((item) => item.key === key).value;
  }
  delete(key) {
    const hash = this.keys[key];
    if (hash) {
      delete this.keys[key];
      this.table[hash].filter((item) => item.key !== key);
    }
  }

  getKeys() {
    return this.keys;
  }

  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }
  values() {
    const values = new Set();

    this.table.forEach(
      (bucket) =>
        bucket &&
        bucket.forEach(({ value }) => {
          !values.has(value) && values.add(value);
        })
    );

    return [...values];
  }
  items() {
    const items = [];

    this.table.forEach(
      (bucket) => bucket && bucket.forEach((item) => items.push(item))
    );

    return items;
  }
}

const myHashTable = new MyHashTable();
myHashTable.set("apple", "delicious");
myHashTable.set("awple", "delicious");
myHashTable.set("apele", "delicious");
myHashTable.set("juicf", "delicious");
myHashTable.set("efpla", "diligent");
myHashTable.set("epdla", "sleepy");
myHashTable.set("eddla", "happy");
myHashTable.set("espla", "bad");
console.log(myHashTable.get("eppla"));
console.log(myHashTable.get("juicf"));
console.log(myHashTable);
console.log(myHashTable.getKeys());
console.log(myHashTable.has("apple"));
console.log(myHashTable.has("appld"));
console.log(myHashTable.items());
console.log(myHashTable.values());
myHashTable.delete("epdla");
console.log(myHashTable.items());
console.log(myHashTable.getKeys());
