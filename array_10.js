//Crea un array con elementos de diferentes tipos.
//• Convierte el array en un objeto, donde cada elemento del 
//array sea una propiedad del objeto.

let array = [ 7 , 14, 21, false, "bebida", ["Mundo"]]
let arrayObjeto = {};

array.forEach((elemento, indice) => {
    arrayObjeto["propiedad${indice + 1}"] = elemento;
  });
  console.log(arrayObjeto);