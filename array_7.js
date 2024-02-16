
//• Crea un array con elementos duplicados.
let duplicados = [6, 7, 8, 8, "J", "S", "J"]
//Elimina los elementos duplicados del array.
let sinDuplicados = []
duplicados.forEach( i => !sinDuplicados.includes(i) ? sinDuplicados.push(i) : false)
console.log(sinDuplicados);