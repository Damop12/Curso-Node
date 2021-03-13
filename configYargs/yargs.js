const { describe } = require('yargs');

  
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base de la tabla'

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default:10,
        describe:'Este es  el número hasta donde quieres la tabla'

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe :'Muestra la tabla en consola'

    })

    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser número'
        }
        return true;
    })
    .argv;

    module.exports = argv;//para exportar el yargs