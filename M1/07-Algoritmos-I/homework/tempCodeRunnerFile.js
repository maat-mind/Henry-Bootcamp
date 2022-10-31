function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let res = [1];
  let i = 1;

  while (num != 1) {
    if (num % i == 0) res.push(i);
    num /= i;
    i++;
  }

  console.log(res);

  return res;
}

factorear(180);
