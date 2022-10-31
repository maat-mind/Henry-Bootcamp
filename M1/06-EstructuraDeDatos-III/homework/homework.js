'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) return 1;
  if (!this.right) return 1 + this.left.size();
  if (!this.left) return 1 + this.right.size();

  return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    !this.left ? (this.left = new BinarySearchTree(value)) : this.left.insert(value);
  } else if (value > this.value) {
    !this.right ? (this.right = new BinarySearchTree(value)) : this.right.insert(value);
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (value != this.value) {
    if (value < this.value) return !!this.left && this.left.contains(value);
    else if (value > this.value) return this.right ? this.right.contains(value) : false;
  }
  return true;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order = 'in-order') {
  // Pre ----> root - izq - derecha
  if (order == 'pre-order') {
    cb(this.value);
    this.left && this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
  }
  // In ----> izq- root - derecha
  if (order == 'in-order') {
    this.left && this.left.depthFirstForEach(cb, order);
    cb(this.value);
    this.right && this.right.depthFirstForEach(cb, order);
  }
  // Post ---->  izq - derecha - root
  if (order == 'post-order') {
    this.left && this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
    cb(this.value);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr = []) {
  if (this.left) arr.push(this.left);
  if (this.right) arr.push(this.right);

  cb(this.value);

  arr.length && arr.shift().breadthFirstForEach(cb, arr)
};

const tree = new BinarySearchTree(10);

tree.insert(6);
tree.insert(12);
tree.insert(20);
tree.insert(25);
tree.insert(3);
tree.insert(8);
tree.insert(9);

let arr3 = [];

tree.breadthFirstForEach(function (val) {
  arr3.push(val);
});

console.log('BFS');
console.log(arr3);

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
