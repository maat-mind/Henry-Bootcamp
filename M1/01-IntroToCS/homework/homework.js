'use strict'

function BinarioADecimal(num) {
  // convertir binario a decimal

  const numArr = Array.from(String(num), Number)
  const numL = numArr.length
  let numDecimal = 0

  for (let i = 0; i < numL; i++) {
    if (numArr[i] === 0) numDecimal += 0
    else numDecimal += Math.pow(2, numL - 1 - i)
  }

  return numDecimal
}

console.log(BinarioADecimal(101)) // 5

function DecimalABinario(num) {
  /* para convertir decimal a binario debemos:
    1.  recibir un número entero
    2.  dividimos por 2 sucesivamente hasta que el cociente sea 0
    3.  concatenamos los residuos
    4.  se cambia el orden de la cadena de residuos
  */

  let numBinario = []

  if (num <= 1) return num

  while (num > 1) {
    num % 2 < 1 ? numBinario.push(0) : numBinario.push(1)
    num = num / 2
  }

  numBinario = numBinario.join('')

  const reversedNum = (num) => {
    return (
      parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
    )
  }

  return reversedNum(numBinario)
}

console.log(DecimalABinario(5)) // 101

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
