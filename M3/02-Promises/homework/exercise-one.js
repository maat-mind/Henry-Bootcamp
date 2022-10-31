/*********** Yo explico `exerciseUtils` ********
 *
 * excersiceUtils es una variable que viene de un archivo en este repo
 * El archivo `./utils` esta en este nivel y se llama `utils.js`
 *
 * Este archivo crea un `promisifiedReadFile` - FIJATE EN ÉL!!!
 *
 * Las funciones `blue` y `magenta` para mantener tu código DRY
 *
 ***********************************************/

'use strict';

var Promise = require('bluebird'),
  exerciseUtils = require('./utils');

var readFile = exerciseUtils.readFile,
  promisifiedReadFile = exerciseUtils.promisifiedReadFile,
  blue = exerciseUtils.blue,
  magenta = exerciseUtils.magenta;

var args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemA: problemA,
  problemB: problemB,
  problemC: problemC,
  problemD: problemD,
  problemE: problemE,
  problemF: problemF,
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  var problem = module.exports['problem' + arg];
  if (problem) problem();
});

function problemA() {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * A. loguea el poema uno stanza uno (ignorá errores)
   *
   */

  // callback version
  /*   readFile('poem-one/stanza-01.txt', function (err, stanza) {
    console.log('-- A. callback version --');
    blue(stanza);
  }); */

  // promise version

  /* promisifiedReadFile('poem-one/stanza-01.txt')
    .then((res => {
      console.log('-- A. callback version --');
      blue(stanza);
    })) */

  promisifiedReadFile('poem-one/stanza-01.txt')
    .then(blue);

}

function problemB() {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * B. loggea el poema uno stanza dos y tres, en cualquier orden
   *    (ignora errores)
   *
   */

  // callback version
  /*   readFile('poem-one/stanza-02.txt', function (err, stanza2) {
      console.log('-- B. callback version (stanza two) --');
      blue(stanza2);
    });
    readFile('poem-one/stanza-03.txt', function (err, stanza3) {
      console.log('-- B. callback version (stanza three) --');
      blue(stanza3);
    }); */

  // promise version

  promisifiedReadFile('poem-one/stanza-02.txt')
    .then(blue);

  promisifiedReadFile('poem-one/stanza-03.txt')
    .then(blue);

}

function problemC() {

  // callback version
  /*   readFile('poem-one/stanza-02.txt', function (err, stanza2) {
      console.log('-- C. callback version (stanza two) --');
      blue(stanza2);
      readFile('poem-one/stanza-03.txt', function (err, stanza3) {
        console.log('-- C. callback version (stanza three) --');
        blue(stanza3);
        console.log('-- C. callback version done --');
      });
    }); */

  // promise version (hint: don't need to nest `then` calls)

  promisifiedReadFile('poem-one/stanza-02.txt')
    .then(data => {
      blue(data);
      return promisifiedReadFile('poem-one/stanza-03.txt');
    })
    .then(data => {
      blue(data);
      console.log('done');
    });

}

function problemD() {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * D. loggea el poema uno stanza cuatro o un error si llega a ocurrir
   *
   */

  // callback version
  /*   readFile('poem-one/wrong-file-name.txt', function (err, stanza4)
    {
      console.log('-- D. callback version (stanza four) --');
      if (err) magenta(new Error(err));
      else blue(stanza4);
    }); */

  // promise version
  promisifiedReadFile('poem-one/wrong-file-name.txt')
    .then(st => blue(st))
    .catch(error => {
      magenta(new Error(error));
    });
}

function problemE() {

  promisifiedReadFile('poem-one/stanza-03.txt')
    .then(st => {
      blue(st);
      return promisifiedReadFile('poem-one/wrong-stanza-03.txt');
    })
    .then(stErr => {
      console.error(stErr);
    })
    .catch(err => {
      magenta(console.error(err));
    });
}

function problemF() {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * F. Lee & loggea el poema uno stanza tres y *DESPUES* lee y loguea la
   *    stanza cuatro o loggea un error si occrre para cualquiera de las
   *    lecturas y siempre loggea 'done' cuando todo haya terminado
   *
   */

  // callback version
  readFile('poem-one/stanza-03.txt', function (err, stanza3) {
    console.log('-- F. callback version (stanza three) --');
    if (err) {
      magenta(new Error(err));
      console.log('-- F. callback version done --');
      return;
    }
    blue(stanza3);
    readFile('poem-one/wrong-file-name.txt', function (err2, stanza4) {
      console.log('-- F. callback version (stanza four) --');
      if (err2) magenta(new Error(err2));
      else blue(stanza4);
      console.log('-- F. callback version done --');
    });
  });

  // promise version
  // ???
}
