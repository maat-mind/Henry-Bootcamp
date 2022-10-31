'use strict'

var Promise = require('bluebird'),
  async = require('async'),
  exerciseUtils = require('./utils')

var readFile = exerciseUtils.readFile,
  promisifiedReadFile = exerciseUtils.promisifiedReadFile,
  blue = exerciseUtils.blue,
  magenta = exerciseUtils.magenta

var args = process.argv.slice(2).map(function (st) { return st.toUpperCase() })

module.exports = {
  problemA: problemA,
  problemB: problemB,
  problemC: problemC,
  problemD: problemD,
  problemE: problemE
}

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  var problem = module.exports['problem' + arg]
  if (problem) problem()
})

function problemA() {

  let one = promisifiedReadFile('poem-two/stanza-01.txt')
    .then(blue)

  let two = promisifiedReadFile('poem-two/stanza-02.txt')
    .then(blue)

  Promise.all([one, two])
    .then(() => console.log('done'))

}

function problemB() {


  var filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return 'poem-two/' + 'stanza-0' + n + '.txt'
  })

  // Guardar como array las promesas
  var promises = filenames.map(e => promisifiedReadFile(e)
    .then(st => blue(st))
  )

  // Por cada promesa en var promises ---> 'done'
  Promise.all(promises)
    .then(() => console.log('done'))

}

function problemC() {

  var filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(n => {
    return 'poem-two/' + 'stanza-0' + n + '.txt'
  })

  for (
    let i = 1,
    p = promisifiedReadFile(filenames[0]);
    i <= filenames.length;
    i++
  ) {

    p.then(st => {
      blue(st)

      if (i === filenames.length) {
        console.log('done')
      } else {
        return promisifiedReadFile(filenames[i])
      }

    })
  }
}

function problemD() {

  var filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return 'poem-two/' + 'stanza-0' + n + '.txt'
  })
  var randIdx = Math.floor(Math.random() * filenames.length)
  filenames[randIdx] = 'wrong-file-name-' + (randIdx + 1) + '.txt'


  for (
    let i = 1,
    p = promisifiedReadFile(filenames[0]);
    i <= filenames.length;
    i++
  ) {

    p.then(st => {
      blue(st)

      if (i === filenames.length) {
        console.log('done')
      } else {
        return promisifiedReadFile(filenames[i])
      }

    })
    if (i === filenames.length) {
      p.catch(err => {
        magenta(new Error(err))
        console.log('done')
      })
    }
  }

}

function problemE() {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * E. Haz una versión promisificada de fs.writeFile
   *
   */

  var fs = require('fs')
  function promisifiedWriteFile(filename, str) {
    // tu código aquí
  }
}
