function nodo(data) {
  return {
    value: data,
    next: null,
  };
}

function List() {
  this.head = null;
  this._length = 0;
}

List.prototype.add = function (data) {
  this._length++;

  let newNode = nodo(data);
  let current = this.head;

  if (current != null) {
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
  } else {
    this.head = newNode;
  }
};

List.prototype.read = function (data) {
  let current = this.head;

  if (current == null) {
    current.next = newNode;
  }
};
