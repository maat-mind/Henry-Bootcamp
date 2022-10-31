'use strict';

const { size } = require('@11ty/eleventy/src/TemplateCache');

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el número de la posición n en la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  // El caso base indica que termine la recursión en 0
  if (n < 1) {
    // Al ser una multiplicación termina en 1 ya que nFactorial(c) c! x b x . . . x 1 no modifica el resultado
    return 1;
  } else {
    // Se crea una variable que guarde el factorial anterior
    let factorial = nFactorial(n - 1);
    factorial *= n;
    return factorial;
  }
}

function nFibonacci(n) {
  // Fibonacci 0 y 1 son su propio valor (caso base)
  if (n < 2) return n;
  // Recursión en 2 niveles ya que 'fibonacci determina un valor con la suma de los dos valores anteriores'
  return nFibonacci(n - 1) + nFibonacci(n - 2);
}

nFibonacci(4);
console.log(nFibonacci(4));

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

class Queue {
  constructor() {
    this.list = [];
  }

  enqueue(value) {
    this.list.push(value);
  }

  dequeue() {
    return this.list.shift();
  }

  size() {
    return this.list.length;
  }
}

const newQ = new Queue();

newQ.enqueue(1);
newQ.enqueue(2);
newQ.enqueue(3);
newQ.enqueue(4);
newQ.enqueue(5);

newQ;
console.log(newQ.size());

console.log(newQ.dequeue());
console.log(newQ.dequeue());
console.log(newQ.dequeue());

console.log(newQ.size());

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
