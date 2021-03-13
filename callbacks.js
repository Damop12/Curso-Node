const getUsuarioByID = (id,callback) => {

    const usuario = {
        id,
        nombre: 'MiguelAngel',

    }

    setTimeout(() => {
        callback(usuario);

    }, 1550)

}

getUsuarioByID (10, (usuario) => {
    console.log(usuario);
});