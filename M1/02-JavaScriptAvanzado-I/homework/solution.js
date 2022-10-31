/* 
    Homework JavaScript Avanzado I 
    ------- Scope & Hoisting -------

1.  Diferencia entre declarar y asignar

Declarar se realiza cuando una variable empieza a existir en un programa.
Serán procesadas primero debido al hoisting.

Asignar significa guardar algo en el espacio en memoria 
reservado para esa variable.

*/

//  2. ¿Que será impreso en la consola?

// EJERCICIO 1.

x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
};
c(8, 9, 10); // >> 10 8 8X 9
console.log(b); // >> 10
console.log(x); // >> 1X

// EJERCICIO 2.

console.log(bar); // >> undefinedX -> is not defined
// console.log(baz); // >> undefinedX -> is not defined
foo(); // >> Hola!
function foo() {
  console.log('Hola!');
}
var bar = 1;
baz = 2;

// EJERCICIO 3.

var instructor = 'Tony';
if (true) {
  var instructor = 'Franco';
}
console.log(instructor); // >> TonyX || redeclaration errorX -> Franco

// EJERCICIO 4.

var instructor = 'Tony';
console.log(instructor); // >> Tony
(function () {
  if (true) {
    var instructor = 'Franco';
    console.log(instructor); // >> Franco
  }
})();
console.log(instructor); // >> Tony

// EJERCICIO 5.

var instructor = 'Tony';
let pm = 'Franco';
if (true) {
  var instructor = 'The Flash';
  let pm = 'Reverse Flash';
  console.log(instructor); // >> The Flash
  console.log(pm); // >> Reverse Flash
}
console.log(instructor); // >> The Flash
console.log(pm); // >> redeclaration of let errorX -> Franco

// EJERCICIO 6.

6 / '3'; // >> 2
'2' * '3'; // >> 6
4 + 5 + 'px'; // >> "9px"
'$' + 4 + 5; // >> "$45"
'4' - 2; // >> 2
'4px' - 2; // >> NaN
7 / 0; // >> Infinity
{
}
[0]; // >> [0]
parseInt('09'); // >> 9
5 && 2; // >> 2
2 && 5; // >> 5
5 || 0; // >> 5
0 ||
  (5)[3] + // >> 5
    [3] -
    [10]; // >> 23
3 > 2 > 1; // >> false
![] == []; // >> true

// EJERCICIO 7.

function test() {
  console.log(a); // >> error a not declaredX || undefined
  console.log(foo()); // >> 2

  var a = 1;
  function foo() {
    return 2;
  }
}

test();

// EJERCICIO 8.

var snack = 'Meow Mix';

function getFood(food) {
  if (food) {
    var snack = 'Friskies';
    return snack;
  }
  return snack; // >> Meow Mix -> undefined?
}

console.log(getFood(false));

// EJERCICIO 9.

var fullname = 'Juan Perez';
var obj = {
  fullname: 'Natalia Nerea',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); // >> 'Aurelio De Rosa'

var test = obj.prop.getFullname; // >> 'Juan Perez'

console.log(test()); // >> 'Juan Perez' -> undefined

// EJERCICIO 10.

function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing();

/* 

    1
    4
    3
    2
 
 */
