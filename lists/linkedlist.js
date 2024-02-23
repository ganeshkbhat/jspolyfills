function LinkedList() {
  this._head = null;
  this._length = 0;
}

LinkedList.prototype = {

  constructor: LinkedList,

  add: function (data) {

    var node = {
      data: data,
      next: null
    },
      current;

    if (this._head === null) {
      this._head = node;
    }
    else {
      current = this._head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this._length++;
  },

  remove: function (index) {

    if (index > -1 && index < this._length) {

      var current = this._head,
        previous,
        i = 0;


      if (index === 0) {
        this._head = current.next;
      }
      else {
        while (i++ < index) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }

      this._length--;
      return current.data;
    }
    else {
      return null;
    }
  },

  item: function (index) {

    var current = this._head,
      i = 0;

    if (index > - 1 && index < this._length) {

      while (i++ < index) {
        current = current.next;
      }
      return current.data;

    }
    else {
      return null;
    }
  },

  addOnPosition: function (data, index) {

    if (index > -1 && index <= this._length) {
      var node = {
        data: data,
        next: null
      },
        current = this._head,
        i = 0,
        temp,
        previous;

      if (this._head === null) {
        this._head = node;
      }
      else {
        if (index === 0) {
          this._head = node;
          node.next = current;
        }
        else {
          while (i++ < index) {
            previous = current;
            current = current.next;
          }
          previous.next = node;
          node.next = current;
        }
      }
      this._length++;
    }
    else {
      return null;
    }
  },

  toArray: function () {
    var result = [],
      current = this._head;

    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  },
  toString: function () {
    return this.toArray().toString();
  }
}
