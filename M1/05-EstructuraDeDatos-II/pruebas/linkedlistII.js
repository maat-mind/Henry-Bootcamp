// fn para crear nodos
function crearNodo(data) {
  return {
    value: data,
    next: null,
  };
}

// cls para crear una lista anidada
class ListaAnidada {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // método para añadir nodos a la lista
  añadirNodo(data) {
    this.size++;
    let nuevoNodo = crearNodo(data);

    if (this.tail) {
      this.tail.next = nuevoNodo;
      this.tail = nuevoNodo;
      return nuevoNodo;
    }

    // el primer nodo que se agregue va a ser el primero y el último
    this.head = this.tail = nuevoNodo;
    return nuevoNodo;
  }

  verContenidoNodos(data) {
    let current = this.head;
    // current apunta al siguiente nodo mientras que no sea null
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  eliminarNodoTail() {
    if (this.tail) {
      this.size--;

      const tailNode = this.tail;

      // busca el nodo que esta antes de tail
      let current = this.head;
      while (current.next != tailNode) {
        current = current.next;
      }

      // ignora el elemento tail cambiando el nodo antes de este
      const nodeBeforeTail = current;
      this.tail = nodeBeforeTail;
      this.tail.next = null;

      return tailNode;
    }
    // en caso de que la cola sea null
    return undefined;
  }
}

const nuevaLista = new ListaAnidada();

nuevaLista.añadirNodo('hola');
nuevaLista.añadirNodo('lista');
nuevaLista.añadirNodo('anidada');

nuevaLista.verContenidoNodos();

console.log('Ahora borramos la cola 2 veces....');

nuevaLista.eliminarNodoTail();
nuevaLista.eliminarNodoTail();

nuevaLista.verContenidoNodos();
