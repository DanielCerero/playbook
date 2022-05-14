/*
Example 3: Diferentes formas de exportar funciones
Crea una carpeta llamada example3 dentro de la carpeta weekly_mission_1.
Abajo encontrarás los tres archivos que deberás crear dentro de esta carpeta y su contenido.
Ejecuta el siguiente comando: node main.js
*/


/*
  Esto también es la declaración de una función

  module.exports hará que puedas invocar esta función en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger("Heeey!")
*/

module.exports = (message) => {
    console.log(`info: ${message}`)
  }