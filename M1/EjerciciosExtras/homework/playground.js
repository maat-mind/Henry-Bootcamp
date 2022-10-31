// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

// var countArray = function (array) {
//   // Tu código aca:
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       sum += countArray(array[i]);
//     } else {
//       sum += array[i];
//     }
//   }

//   return sum;
// };

// console.log(countArray([1, [2, [3, 4]], [5, 6], 7]));

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
var obj = {
  a: {
    a1: 10,
    a2: 'Franco',
    a3: { f: 'r', a: 'n', c: { o: true } },
  },
  b: 2,
  c: [1, { a: 1 }, 'Franco'],
};
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function (obj) {
  // Tu código aca:
  let count = 0;

  for (let prop in obj) {
    count++;

    if (typeof obj[prop] == 'object') {
      if (!Array.isArray(obj[prop])) count += countProps(obj[prop]);
    }
  }

  return count;
};

console.log(countProps(obj));
