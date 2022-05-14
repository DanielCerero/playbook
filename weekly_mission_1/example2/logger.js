/*
Example 2: Exportando funciones entre scripts con CommonJS
Crea una carpeta llamada example2 dentro de la carpeta weekly_mission_1.
Crea dos archivos: logger.js y main.js. Abajo encontrarás el contenido de ambos. Leélo e interprétalo.
Ejecuta el siguiente comando: node main.js logger.js
*/

// Esta es una función que se guardara en este módulo como info
exports.info = (message) => {
    console.log(`info: ${message}`)
  }
  
  // Esta es una función que se guardara en este módulo como verbose
  exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
  }
  
  /*
    const logger = require('./logger')
    logger.info('This is an informational message')
    logger.verbose('This is a verbose message')
   * */
  