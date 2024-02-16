//ordenar un array

// Crear un array con números aleatorios
let numerosAleatorios = [5, 2, 8, 1, 9, 3, 7, 4, 6, 10];

// Ordenar el array de forma ascendente
numerosAleatorios.sort(function(a, b) {
    return a - b;
});

// Imprimir el array después de ordenarlo de forma ascendente
console.log("Array ordenado de forma ascendente:", numerosAleatorios);

// Ordenar el array de forma descendente
numerosAleatorios.sort(function(a, b) {
    return b - a;
});

// Imprimir el array antes de ordenarlo
console.log("Array antes de ordenar:", numerosAleatorios);

// Imprimir el array después de ordenarlo de forma descendente
console.log("Array ordenado de forma descendente:", numerosAleatorios);