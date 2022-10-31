// var persona = {
//   nombre: 'Oscar',
//   apellido: 'Bernal',
// };

// var logNombre = function (arg1, arg2) {
//   console.log(arg1 + ' ' + arg2 + ' ' + this.nombre + ' ' + this.apellido);
// };

// logNombre.call(persona, 'Hola', 'Sr.');

// function counter() {
//   let aux = 1;
//   return function () {
//     return aux++;
//   };
// }

// let countFn = counter();

// let twoObj = {};

// for (let i = 0; i < 2; i++) {
//   let aux = countFn();
//   twoObj[i] = aux;
// }

// console.log(twoObj);

//function cacheFunction(cb) {
/*
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) 

  */

//   let cache = {};

//   return function (arg) {
//     console.log(cache);

//     if (cache.hasOwnProperty(arg)) {
//       return cache[arg];
//     } else {
//       let result = cb(arg);
//       cache[arg] = result;
//       return cache[arg];
//     }
//   };
// }

// function square(n) {
//   return n * n;
// }

// const squareCache = cacheFunction(square);

// console.log(squareCache(5));
// console.log(squareCache(5));
// console.log(squareCache(2));
// console.log(squareCache(4));
// console.log(squareCache(7));
// console.log(squareCache(7));

// function decorarCadena(cadena) {
//   return function (decorador) {
//     return `${decorador}${cadena}${decorador}`;
//   };
// }

// let decorar = decorarCadena('holabrother');
// console.log(decorar('*'));

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(null, '*', '*');
let textoGuiones = crearCadena.bind(null, '-', '-');
let textoUnderscore = crearCadena.bind(null, '_', '_');
