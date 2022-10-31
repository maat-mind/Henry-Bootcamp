const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento, impar, async } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById('valor');

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const { contador } = store.getState();
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.innerText = contador;
}

// Ejecutamos la funcion 'renderContador':

renderContador();

// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:

store.subscribe(renderContador)

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

const btnIncremento = document.getElementById('incremento');
const btnDecremento = document.getElementById('decremento');
const btnImpar = document.getElementById('incrementoImpar');
const btnAsync = document.getElementById('incrementoAsync');

btnIncremento.addEventListener('click', () => store.dispatch(incremento()));

btnDecremento.addEventListener('click', () => store.dispatch(decremento()));

btnImpar.addEventListener('click', () => store.dispatch(impar()));

btnAsync.addEventListener('click', () => setTimeout(() => store.dispatch(async()), 1000));
