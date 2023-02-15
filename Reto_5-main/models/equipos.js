const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equiposSchema = new Schema({
    Nombre: String,
    Estadio: String,
    Capacidad: String
})

//Creamos el modelo
const Equipos = mongoose.model('futbol', equiposSchema, "equipos");

module.exports = Equipos;
