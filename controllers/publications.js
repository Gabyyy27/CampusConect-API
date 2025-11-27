const { Publicacion, Usuarios } = require('../models');

const createNewPublication = async (request, response) => {
    try {
        if (!request.body || Object.keys(request.body).length === 0) {
            return response.status(400).json({
                status: "BAD REQUEST",
                message: "Request body is missing"
            });
        }

        const { titulo, contenido, categoria, fecha, usuarioId } = request.body;

        // Validar que el usuario exista
        const usuario = await Usuarios.findByPk(usuarioId);
        if (!usuario) {
            return response.status(404).json({
                status: "NOT FOUND",
                message: "Usuario no encontrado para realizar la publicación"
            });
        }

        // Validar que la fecha no sea futura
        const currentDate = new Date();
        const publicationDate = new Date(fecha);
        
        if (publicationDate > currentDate) {
            return response.status(400).json({
                status: "BAD REQUEST",
                message: "La fecha de la publicación no puede ser futura"
            });
        }

        // Crear la publicación
        const newPublication = await Publicacion.create({
            titulo,
            contenido,
            categoria,
            fecha: publicationDate,
            usuarioId
        });

        response.status(201).json({
            status: "success",
            data: newPublication
        });

    } catch (error) {
        response.status(500).json({
            status: "Error",
            message: error.message
        });
    }
};

module.exports = {
    createNewPublication,
  
};