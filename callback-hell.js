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

const getEmpleado = (id, callback) => {

    const empleado = empleados.find(e => e.id === id)?.nombre//find trae el empleado del array
    
    if (empleado) {
        callback( null, empleado );
    } else {
        callback(`Empleado con id ${id} no existe`);
    }


}
const getSalario = (id, callback) => {

    const salario = salarios.find(s => s.id === id)?.salario

    if (salario) {
        callback( null, salario );
    } else {
        callback(`NO Existe salario  para el Empleado con  ${id} `);
    }
}

const id = 2;

getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log('ERROR!!!');
        return console.log(err);

    }
    getSalario(id, (err, salario) => {
        if (err) {
            return console.log(err);
        }
        
        console.log('El empleado:',empleado,'tiene un salario de :' );
    
    
    })
})


