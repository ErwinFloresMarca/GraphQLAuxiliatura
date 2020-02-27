const mongoose = require('../connect');
const Schema = mongoose.Schema;

const personaSchema = Schema({
    nombres: String,
    apellidos: String,
    ci: String,
    direccion: String,
    email: String,
    fechaNac: Date
});

const persona = mongoose.model('persona', personaSchema);

module.exports = persona;
