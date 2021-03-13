const deadpool = {
    nombre: 'Made',
    apellido: 'Sate',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre}, ${this.apellido}, ${this.poder} `;

    }
}
console.log(deadpool.getNombre());




const day = {
    dia: 'viernes',
    mes: 'Febrero',
    año: 2021,

    getFecha() {
        return `${this.dia}, ${this.mes}, ${this.año}`;
    }
}
const{dia, mes , año } = day; //desestructuración simplifica las constantes que vienen de un objeto
console.log(dia, mes, año);