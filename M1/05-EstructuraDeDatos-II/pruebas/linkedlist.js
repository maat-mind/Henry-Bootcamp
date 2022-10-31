// Crear nodo

function createNode(data) {
  return {
    value: data,
    next: null,
  };
}

// Crear lista enlazada

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // metodo para agregar nodos
  insert(data) {
    // aumenta el tamaño de la lista en 1
    this.size++;
    // nuevo nodo desde fn createNode
    let newNode = createNode(data);

    // si hay por lo menos un nodo en la lista (la cola no es null)
    if (this.tail) {
      // la cola actual va a cambiar su valor next de null a el nodo creado
      this.tail.next = newNode;
      // la cola cambia su valor ' value ' de la cola antigua al nuevo nodo
      this.tail = newNode;
      return newNode;
    }

    // si esta vacía la lista entonces head y tail apuntan al nuevo nodo
    this.head = this.tail = newNode;
    return newNode;
  }

  // metodo para retornar data de los nodos
  print(data) {
    // crea una variable que apunta al valor de head (primera posición de la lista)
    let current = this.head;

    // mientras que no se llegue al final de la lista (null) . . .
    while (current) {
      // imprime en consola la información que lleva cada nodo
      console.log(current.value);
      // cambia el valor de current para leer el valor de next del primer elemento e iterar por toda la lista
      current = current.next;
    }
  }
}

const linkedlist = new LinkedList();

linkedlist.insert('1');
linkedlist.insert('2');
linkedlist.insert('3');

linkedlist.print();
