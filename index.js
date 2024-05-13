const express = require('express'); //Se importa el módulo Express, que es un framework de Node.js
                                    //para crear aplicaciones web y APIs de manera sencilla.
const conectarBD = require('./config/db');
const cors = require('cors');

const app = express(); //creamos el servidor

conectarBD(); // extableciendo conexion con la base de datos

app.use(express.json());
app.use(cors());
app.use('/api/comentarios', require('./routes/comentario'));
app.use('/usuarios', require('./routes/usuario'));


app.listen(3000, () => {
    console.log('El servidor se ha iniciado en el puerto 3000');
})