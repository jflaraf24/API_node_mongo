const mongoose = require('mongoose');

const ComentarioSchema = mongoose.Schema( {
    nombre: {
       type: String,
       required: false
    },
    comentario: {
       type: String,
       required: false
    },
    fecha: {
      type: String,
      required: false
   }
});

module.exports = mongoose.model('Comentario', ComentarioSchema);