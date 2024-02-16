//Agregar y eliminar elementos de un array

//1. Crea un array vacío.
let edad = [];

//2. Agrega al menos 3 elementos al array utilizando diferentes métodos (por ejemplo, push, unshift).
edad.push (24);
edad.unshift (76);
edad[2] = (17);

//3. Elimina el último elemento del array.
edad.pop();

//4. Elimina un elemento específico del array por su índice.
edad.splice(0, 1);

//5. Imprime el array final después de las modificaciones.
console.log("Array después de las eliminaciones:", edad);