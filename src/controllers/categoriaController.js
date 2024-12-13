const Categoria = require('../models/categoria'); // Asegúrate de tener la ruta correcta

const createCategoriaController = async (nombre) => {
    try {
        const ultimaCategoria = await Categoria.findOne({
            order: [['id_categoria', 'DESC']],
        });
        const nuevoId = ultimaCategoria ? ultimaCategoria.id_categoria + 1 : 1;
        const nuevaMascota = await Mascota.create({ id_categoria: nuevoId ,nombre });
        return nuevaMascota;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { createCategoriaController };
