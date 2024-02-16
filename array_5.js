// Crear un array con nombres de personas y sus edades
var personas = [
    { nombre: "David", edad: 28 },
    { nombre: "Elena", edad: 53 },
    { nombre: "Catherine", edad: 33 },
    { nombre: "Hover", edad: 57 },
    { nombre: "Angie", edad: 27 }
];

// Filtrar el array para obtener solo los nombres de las personas mayores de edad
let personasMayores = personas.filter(function(persona) {
    return persona.edad >= 18;
});

// Imprimir los nombres de las personas que cumplen con el criterio
console.log("Nombres de personas mayores de edad:", personasMayores.map(function(persona) {
    return persona.nombre;
}));

// Usar un bucle para recorrer el array filtrado y mostrar un mensaje con cada elemento
console.log("Mensajes para personas mayores de edad:");
for (var i = 0; i < personasMayores.length; i++) {
    console.log(`${personasMayores[i].nombre} es mayor de edad.`);
}