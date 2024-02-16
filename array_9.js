//Crea un array con objetos que tengan una propiedad en común (por ejemplo, 
//color, tamaño, tipo).
let propiedades = [
    {
        color: "naranja",
        tamaño: 12,
        tipo: "baño"
    },
    {
        color: "rojo",
        tamaño: 12,
        tipo: "patio"
    },
    {
        color: "verde",
        tamaño: 12,
        tipo: "cocina"
    }
];
function agruparPorPropiedad(array, propiedad) {
    return array.reduce((resultado, objeto) => {

      let valorPropiedad = objeto[propiedad];

      if (!resultado.has(valorPropiedad)) {
        resultado.set(valorPropiedad, []);
      }
      resultado.get(valorPropiedad).push(objeto);

      return resultado;
    }, new Map());
  }

  let objetosAgrupadosPorColor = agruparPorPropiedad(propiedades, 'color');

  objetosAgrupadosPorColor.forEach((value, key) => {
    console.log("Color: ${key}");
    console.log(value);
  });