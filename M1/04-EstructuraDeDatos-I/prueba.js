function esPrimo(num) {
  /*
    RECORDATORIO: "Un número primo es el número que es sólo divisible por sí mismo y por 1"

    Condiciones
    1. el valor debe ser positvo
    2. no puede ser dividido por otro número que no sea él mismo o 1
    3. el número 1 no es primo
    4. el 2 es el primer número primo

    ** fn esPrimo retorna el número que recibe si es primo, en caso contrario no retorna nada **
*/

  if (num > 1) {
    let boolPrimo = false;
    let divisible = 0;

    for (let i = 1; i <= num; i++) {
      num % i == 0 ? divisible++ : '';
    }

    divisible > 2 ? (boolPrimo = false) : (boolPrimo = true);

    if (boolPrimo) {
      return num;
    }
  }
}

function llegarACero(value) {
  if (value < 2) {
    return [];
  } else {
    const ceroArray = llegarACero(value - 1);
    let valorPrimo = esPrimo(value);
    typeof valorPrimo != 'undefined' ? ceroArray.push(esPrimo(value)) : '';
    return ceroArray;
  }
}

console.log(llegarACero(20));
