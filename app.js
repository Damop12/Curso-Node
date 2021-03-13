//const { argv } = require('node:process');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./configYargs/yargs');
console.clear();


console.log(argv);
console.log('base: yargs', argv.b);

// const [, , arg3 = 'base=5'] = process.argv;
// const[,nu=7]= arg3.split('='); 
//console.log(base);


//const nu = 8;

 crearArchivo(argv.b,argv.l,argv.h)
     .then(nombreArchivo => console.log(nombreArchivo.yellow, 'creado'))
     .catch(err => console.log(err));





