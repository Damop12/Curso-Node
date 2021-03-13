//const { argv } = require('node:process');
//const { crearArchivo } = require('./helpers/multiplicar');
const fs = require('fs');//para importar un archivo
const colors = require('colors');

const crearArchivo = async (nu = 6, listar = false, hasta =10) => {
    try {


        let salida = '';

        for (i = 1; i <= hasta; i++) {

            salida += `${nu} x ${i} = ${nu * i}\n`;
            //console.log( nu + 'x',i,'=', i + nu*i);
        }

        if (listar) {
            console.log('===================='.green);
            console.log('TABLA DE MULT',nu);
            console.log('===================='.green);
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/tabla-${nu}.txt`, salida);

        return `tabla-${nu}.txt creado`;
    } catch (error) {
        throw error;
    }
}



module.exports = {
    crearArchivo
}