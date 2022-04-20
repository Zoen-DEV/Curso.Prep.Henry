// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const arr = [];
  for (let prop in objeto) {
    arr.push([prop, objeto[prop]]);
  }
  return arr;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h: 1, j: 4, s: 5 }
  //Escribe tu código aquí
  const toArray = string.split("");
  toArray.sort();
  const object = {};
  toArray.forEach((item) => {
    if (object[item]) {
      object[item] = object[item] + 1;
    } else {
      object[item] = 1;
    }
  });
  return object;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  const toArray = s.split("");
  const newArray = toArray.filter((item) => {
    return item === item.toUpperCase();
  });
  toArray.forEach((item) => {
    if (item === item.toLowerCase()) {
      newArray.push(item);
    }
  });
  let toString = newArray.join("");
  return toString;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  const toArray = str.split(" ");
  const newArray = toArray.map((item) => {
    return item.split("");
  });
  for (let i = 0; i < newArray.length; i++) {
    newArray[i].reverse();
  }
  const lastArray = newArray.map((item) => {
    return item.join("");
  });
  const toString = lastArray.join(" ");
  return toString;
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  const toArray = `${numero}`.split("");
  toArray.reverse();
  const toString = toArray.join("");
  if (`${numero}` === toString) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  const toArray = cadena.split("");
  console.log(toArray);
  const newArray = toArray.map((item) => {
    if (
      item.toLowerCase() !== "a" &&
      item.toLowerCase() !== "b" &&
      item.toLowerCase() !== "c"
    ) {
      return item;
    }
  });
  console.log(newArray);
  const toString = newArray.join("");
  return toString;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort((a, b) => {
    return a.length - b.length;
  });
  return arr;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  const newArr = [];
  arreglo1.forEach((item) => {
    if (arreglo2.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
