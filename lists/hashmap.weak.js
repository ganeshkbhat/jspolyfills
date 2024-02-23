class NaiveHashMap {

  constructor(initialCapacity = 2) {
    this.buckets = new Array(initialCapacity);
  }

  set(key, value) {
    const index = this.getIndex(key);
    this.buckets[index] = value;
  }

  get(key) {
    const index = this.getIndex(key);
    return this.buckets[index];
  }

  hash(key) {
    return key.toString().length;
  }

  // 2nd implementation
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

// // Usage:
// const assert = require('assert');
// const hashMap = new NaiveHashMap();

// hashMap.set('cat', 2);
// hashMap.set('rat', 7);
// hashMap.set('dog', 1);
// hashMap.set('art', 8);

// console.log(hashMap.buckets);
// /*
//   bucket #0: <1 empty item>,
//   bucket #1: 8
// */

// assert.equal(hashMap.get('art'), 8); // this one is ok
// assert.equal(hashMap.get('cat'), 8); // got overwritten by art 😱
// assert.equal(hashMap.get('rat'), 8); // got overwritten by art 😱
// assert.equal(hashMap.get('dog'), 8); // got overwritten by art 😱

// // r = 114 or 0x72; a = 97 or 0x61; t = 116 or 0x74
// hash('rat'); // 7,627,122 (r: 114 * 1 + a: 97 * 256 + t: 116 * 65,536) or in hex: 0x746172 (r: 0x72 + a: 0x6100 + t: 0x740000)
// hash('art'); // 7,631,457 or 0x747261
// hash(1); // 49
// hash('1'); // 49

// hash('1,2,3'); // 741485668
// hash([1,2,3]); // 741485668

// hash('undefined') // 3402815551
// hash(undefined) // 3402815551
// console.log(hash(1)); // 1843909523
// console.log(hash('1')); // 1927012762

// console.log(hash('1,2,3')); // 2668498381
// console.log(hash([1,2,3])); // 2533949129

// console.log(hash('undefined')); // 5329828264
// console.log(hash(undefined)); // 6940203017
