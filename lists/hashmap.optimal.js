
class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
    this.collisions = 0;
    this.keys = [];
  }

  hash(key) {
    let hashValue = 0;
    const stringTypeKey = `${key}${typeof key}`;

    for (let index = 0; index < stringTypeKey.length; index++) {
      const charCode = stringTypeKey.charCodeAt(index);
      hashValue += charCode << (index * 8);
    }

    return hashValue;
  }


  _getBucketIndex(key) {
    const hashValue = this.hash(key);
    const bucketIndex = hashValue % this.buckets.length;
    return bucketIndex;
  }

  set(key, value) {
    const {bucketIndex, entryIndex} = this._getIndexes(key);

    if(entryIndex === undefined) {
      // initialize array and save key/value
      const keyIndex = this.keys.push({content: key}) - 1; // keep track of the key index
      this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];
      this.buckets[bucketIndex].push({key, value, keyIndex});
      this.size++;
      // Optional: keep count of collisions
      if(this.buckets[bucketIndex].length > 1) { this.collisions++; }
    } else {
      // override existing value
      this.buckets[bucketIndex][entryIndex].value = value;
    }

    // check if a rehash is due
    if(this.loadFactor > 0 && this.getLoadFactor() > this.loadFactor) {
      this.rehash(this.buckets.length * 2);
    }

    return this;
  }

  get(key) {
    const {bucketIndex, entryIndex} = this._getIndexes(key);

    if(entryIndex === undefined) {
      return;
    }

    return this.buckets[bucketIndex][entryIndex].value;
  }

  // 2nd implement
  get(key) {
    const hashIndex = this.getIndex(key);
    const values = this.array[hashIndex];
    for (let index = 0; index < values.length; index++) {
      const entry = values[index];
      if(entry.key === key) {
        return entry.value
      }
    }
  }
  
  has(key) {
    return !!this.get(key);
  }

  _getIndexes(key) {
    const bucketIndex = this._getBucketIndex(key);
    const values = this.buckets[bucketIndex] || [];

    for (let entryIndex = 0; entryIndex < values.length; entryIndex++) {
      const entry = values[entryIndex];
      if(entry.key === key) {
        return {bucketIndex, entryIndex};
      }
    }

    return {bucketIndex};
  }

  delete(key) {
    const {bucketIndex, entryIndex, keyIndex} = this._getIndexes(key);

    if(entryIndex === undefined) {
      return false;
    }

    this.buckets[bucketIndex].splice(entryIndex, 1);
    delete this.keys[keyIndex];
    this.size--;

    return true;
  }

  rehash(newCapacity) {
    const newMap = new HashMap(newCapacity);

    this.keys.forEach(key => {
      if(key) {
        newMap.set(key.content, this.get(key.content));
      }
    });

    // update bucket
    this.buckets = newMap.buckets;
    this.collisions = newMap.collisions;
    // Optional: both `keys` has the same content except that the new one doesn't have empty spaces from deletions
    this.keys = newMap.keys;
  }

  getLoadFactor() {
    return this.size / this.buckets.length;
  }
}

// const assert = require('assert');
// const hashMap = new HashMap();

// assert.equal(hashMap.getLoadFactor(), 0);
// hashMap.set('songs', 2);
// hashMap.set('pets', 7);
// hashMap.set('tests', 1);
// hashMap.set('art', 8);
// assert.equal(hashMap.getLoadFactor(), 4/16);

// hashMap.set('Pineapple', 'Pen Pineapple Apple Pen');
// hashMap.set('Despacito', 'Luis Fonsi');
// hashMap.set('Bailando', 'Enrique Iglesias');
// hashMap.set('Dura', 'Daddy Yankee');

// hashMap.set('Lean On', 'Major Lazer');
// hashMap.set('Hello', 'Adele');
// hashMap.set('All About That Bass', 'Meghan Trainor');
// hashMap.set('This Is What You Came For', 'Calvin Harris ');

// assert.equal(hashMap.collisions, 2);
// assert.equal(hashMap.getLoadFactor(), 0.75);
// assert.equal(hashMap.buckets.length, 16);

// hashMap.set('Wake Me Up', 'Avicii'); // <--- Trigger REHASH

// assert.equal(hashMap.collisions, 0);
// assert.equal(hashMap.getLoadFactor(), 0.40625);
// assert.equal(hashMap.buckets.length, 32);

function insert(object, key, value) {
  object[key] = value;
  return object;
}

const object = {};
console.log(insert(hash, 'word', 1)); // => { word: 1 }

function insertMap(map, key, value) {
  map.set(key, value);
  return map;
}

const map = new Map();
console.log(insertMap(map, 'word', 1)); // Map { 'word' => 1 }

const HashMap = require('../hash-maps/hash-map');

class MySet {
  constructor() {
    this.hashMap = new HashMap();
  }

  add(value) {
    this.hashMap.set(value);
  }

  has(value) {
    return this.hashMap.has(value);
  }

  get size() {
    return this.hashMap.size;
  }

  delete(value) {
    return this.hashMap.delete(value);
  }

  entries() {
    return this.hashMap.keys.reduce((acc, key) => {
      if(key !== undefined) {
        acc.push(key.content);
      }
      return acc
    }, []);
  }
}

const assert = require('assert');
// const set = new Set(); // Using the built-in
const set = new MySet(); // Using our own implementation

set.add('one');
set.add('uno');
set.add('one'); // should NOT add this one twice

assert.equal(set.has('one'), true);
assert.equal(set.has('dos'), false);

assert.equal(set.size, 2);
// assert.deepEqual(Array.from(set), ['one', 'uno']);

assert.equal(set.delete('one'), true);
assert.equal(set.delete('one'), false);
assert.equal(set.has('one'), false);
assert.equal(set.size, 1);
