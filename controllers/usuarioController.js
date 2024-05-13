const Usuario = require('../models/Usuario');

exports.agregar = async (req, res) => {
    try {
        let estudiante;

        // Guardamos nuestro estudiante
        estudiante = new Usuario(req.body);
        await estudiante.save();
        res.status(201).json(estudiante); // Código 201: Created
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al guardar usuario'); // Código 500: Internal Server Error
    }
}

exports.obtener = async (req, res) => {
    try {
        const estudiantes = await Usuario.find();
        //res.status(200).json(estudiantes); // Código 200: OK
        let obj = {}
        if(estudiantes.length > 0) {
            obj.codigo = "200"
            obj.mensaje = "Lista Usuarios"
            obj.data = estudiantes
            res.status(200).json(obj);
        } else {
            obj.codigo = "400"
            obj.mensaje = "No hay registros"
            obj.data = []
            res.status(400).json(obj);
        }
     


    } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener los estudiantes'); // Código 500: Internal Server Error
    }
}

exports.eliminar = async (req, res) => {
    try {
        let estudiante = await Estudiante.findById(req.params.id);

        if (!estudiante) {
            res.status(404).json({ msg: 'No existe el estudiante' }); // Código 404: Not Found
        } else {
            await Estudiante.findOneAndRemove({ _id: req.params.id });
            res.status(200).json({ mensaje: 'Estudiante eliminado correctamente' }); // Código 200: OK
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar el estudiante'); // Código 500: Internal Server Error
    }
}
