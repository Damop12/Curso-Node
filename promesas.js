const empleados = [
    {
        id: 1,
        nombre: 'Samuel'
    },
    {
        id: 2,
        nombre: 'Sara'
    },
    {
        id: 3,
        nombre: 'Rocio'
    }
];
const salarios = [
    {
        id: 1,
        salario: 1200,
    },
    {
        id: 2,
        salario: 1500,
    }

];

const getEmpleado = (id) => {


    return new Promise((resolve, reject) => { //promesa del callback

        const empleado = empleados.find(e => e.id === id )?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`Error...No existe el empleado ${id}`);


    });



}
const id = 1; //argumento

getEmpleado(id)
    .then(empleado => console.log(empleado) )
    .catch(err => console.log(err));
    
    
