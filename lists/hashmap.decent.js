class DecentHashMap {

  constructor(initialCapacity = 2) {
    this.buckets = new Array(initialCapacity);
    this.collisions = 0;
  }

  set(key, value) {
    const bucketIndex = this.getIndex(key);
    if(this.buckets[bucketIndex]) {
      this.buckets[bucketIndex].push({key, value});
      if(this.buckets[bucketIndex].length > 1) { this.collisions++; }
    } else {
      this.buckets[bucketIndex] = [{key, value}];
    }
    return this;
  }

  get(key) {
    const bucketIndex = this.getIndex(key);
    for (let arrayIndex = 0; arrayIndex < this.buckets[bucketIndex].length; arrayIndex++) {
      const entry = this.buckets[bucketIndex][arrayIndex];
      if(entry.key === key) {
        return entry.value
      }
    }
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

  getIndex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.buckets.length;
    return index;
  }
}


// Usage:
const assert = require('assert');
const hashMap = new DecentHashMap();

hashMap.set('cat', 2);
hashMap.set('rat', 7);
hashMap.set('dog', 1);
hashMap.set('art', 8);

console.log('collisions: ', hashMap.collisions); // 2
console.log(hashMap.buckets);
/*
  bucket #0: [ { key: 'cat', value: 2 }, { key: 'art', value: 8 } ]
  bucket #1: [ { key: 'rat', value: 7 }, { key: 'dog', value: 1 } ]
*/

assert.equal(hashMap.get('art'), 8); // this one is ok
assert.equal(hashMap.get('cat'), 2); // Good. Didn't got overwritten by art
assert.equal(hashMap.get('rat'), 7); // Good. Didn't got overwritten by art
assert.equal(hashMap.get('dog'), 1); // Good. Didn't got overwritten by art
hash('cat') => 3789411390; bucketIndex => 3789411390 % 2 = 0
hash('art') => 3789415740; bucketIndex => 3789415740 % 2 = 0
hash('dog') => 3788563007; bucketIndex => 3788563007 % 2 = 1
hash('rat') => 3789411405; bucketIndex => 3789411405 % 2 = 1
const hashMapSize10 = new DecentHashMap(10);

hashMapSize10.set('cat', 2);
hashMapSize10.set('rat', 7);
hashMapSize10.set('dog', 1);
hashMapSize10.set('art', 8);

console.log('collisions: ', hashMapSize10.collisions); // 1
console.log('hashMapSize10\n', hashMapSize10.buckets);
/*
  bucket#0: [ { key: 'cat', value: 2 }, { key: 'art', value: 8 } ],
            <4 empty items>,
  bucket#5: [ { key: 'rat', value: 7 } ],
            <1 empty item>,
  bucket#7: [ { key: 'dog', value: 1 } ],
            <2 empty items>
*/
const hashMapSize100 = new DecentHashMap(100);

hashMapSize100.set('cat', 2);
hashMapSize100.set('rat', 7);
hashMapSize100.set('dog', 1);
hashMapSize100.set('art', 8);

console.log('collisions: ', hashMapSize100.collisions); // 0
console.log('hashMapSize100\n', hashMapSize100.buckets);
/*
            <5 empty items>,
  bucket#5: [ { key: 'rat', value: 7 } ],
            <1 empty item>,
  bucket#7: [ { key: 'dog', value: 1 } ],
            <32 empty items>,
  bucket#41: [ { key: 'art', value: 8 } ],
            <49 empty items>,
  bucket#90: [ { key: 'cat', value: 2 } ],
            <9 empty items>
*/
