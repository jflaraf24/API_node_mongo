const mongoose = require('mongoose');

const EstudianteSchema = mongoose.Schema( {

    idUsuario: {
       type: String,
       required: false
    },
    nombre: {
      type: String,
      required: false
   },
   email: {
      type: String,
      required: false
   }
    
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);