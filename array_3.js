// Buscar un elemento en un array

//1. Crea un array con al menos 10 elementos de diferentes tipos (números, strings, booleanos).
let mezcla= [365, "Jornada nocturna", false, 45, "GPS", "Televisor", "Mundo", true, 569.7, "Sena"];

//2. Busca un elemento específico en el array por su valor.
let elementoBuscar = 45;

//3. Imprime la posición (índice) del elemento encontrado o un mensaje si no se encuentra.
let indiceConIndexOf = mezcla.indexOf(elementoBuscar);

if (indiceConIndexOf !== -1) {
    console.log(`El elemento ${elementoBuscar} se encuentra en la posición ${indiceConIndexOf} usando indexOf.`);
} else {
    console.log(`El elemento ${elementoBuscar} no se encuentra en el array.`);
}

//4. Bonus: Usa diferentes métodos para realizar la búsqueda (por ejemplo, indexOf, find).

let elementoConFind = mezcla.find(function(elemento) {
    return elemento === elementoABuscar;
});

if (elementoConFind !== undefined) {
    let indiceConFind = edad.indexOf(elementoConFind);
    console.log(`El elemento "${elementoABuscar}" se encuentra en la posición ${indiceConFind} usando find.`);
} else {
    console.log(`El elemento "${elementoABuscar}" no se encuentra en el array.`);
}

