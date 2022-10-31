/*
    Para desarrollar el árbol binario de búsqueda creamos dos clases; nodo y binary search tree
    la primera representa cada nodo dentro del árbol y la segunda es una clase lógica que agrega
    los métodos que va a necesitar esta estructura de datos.
*/

class Node {
  /* 
    Cada nodo inicia con 3 valores fundamentales, uno que recibe llamado value y es la información
    almacenada, los otros dos le proveen la propiedad binaria al árbol y le permite tener
    hasta 2 hijos a un nodo cualquiera.
   */
  constructor(value) {
    this.value = value;
    // left y right inician en null porque inician como un nodo hoja sin hijos
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  /*
        El constructor de BST(el árbol) contiene siempre un nodo base llamado root,
        además se agrega count para facilitar el conteo de nodos en él.
    */
  constructor(value) {
    this.value = new Node(value);
    // Si no llega ningún valor count será 0, en cualquier otro caso será 1
    this.count = value != undefined ? 1 : 0;
  }

  size() {
    // conteo del constructor
    return this.count;
  }

  insert(value) {
    /* 
        insert agrega un nodo hijo al árbol teniendo en cuenta la lógica de BST, donde
        los valores mayores al nodo root van a la derecha de él y los menores a la izquierda,
        y así sucesivamente con cada uno de los hijos que cada nodo pueda tener.
    */

    // En las dos líneas siguientes creamos un nuevo nodo y aumentamos el contador en 1
    this.count++;
    let newNode = new Node(value);

    /*
        searchTree es una función flecha que recibe node como parámetro, ya que va a ser
        utilizada recursivamente, en dónde recibe los valores de root, o el nodo de la
        derecha o izquierda de cada nodo.
     */
    const searchTree = (node) => {
      // Si el valor a insertar es menor que el valor del nodo a comparar
      if (value < node.value) {
        // Y no hay un nodo a la izquierda, se agrega el nuevo nodo a la izquierda,
        // en caso de que si haya nodo izquierdo entra recursivamente a dicho valor.
        !node.left ? (node.left = newNode) : searchTree(node.left);
      }
      // Si el valor es mayor que el nodo comparado
      else if (value > node.value) {
        // Y no hay un nodo a la derecha, se agrega como nodo nuevo,
        // en caso contrario compara el valor del nodo a la derecha.
        !node.right ? (node.right = newNode) : searchTree(node.right);
      }
    };

    // La primera vez que se ejecute searchTree será con el valor del nodo root
    searchTree(this.root);
  }

  contains(value) {
    let contain;
    // retorna true o false luego de evaluar si cierto valor existe dentro del árbol
    const searchTree = (node) => {
      // En caso de que llegue al final del árbol sin encontrar el valor (nodo: null) retorna false
      if (!node) {
        contain = false;
        return false;
      }

      if (value != node.value) {
        if (value < node.value) searchTree(node.left);
        else if (value > node.value) searchTree(node.right);
      } else if (value === node.value) {
        contain = true;
        return true;
      }
    };

    searchTree(this.root);
    return contain;
  }
}

const bst = new BinarySearchTree(20);

bst.insert(12);
bst.insert(22);

console.log(bst.root);

// console.log(bst);
