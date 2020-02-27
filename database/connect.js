const mongoose = require('mongoose');
const {
    DB_HOST,
    DB_PORT,
    DB_NAME
}=process.env
mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('conexion a mongodb exitosa');
}).catch(err => {
    console.log('Error en la conexion', err);
    process.exit(1)
});
mongoose.set('useFindAndModify', false);
module.exports = mongoose;
