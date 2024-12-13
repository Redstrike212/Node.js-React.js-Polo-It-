const Categoria = require('../models/categoria'); // Asegúrate de tener la ruta correcta

const createCategoriaController = async (nombre) => {
    try {
        const ultimaCategoria = await Categoria.findOne({
            order: [['id_categoria', 'DESC']],
        });
        const nuevoId = ultimaCategoria ? ultimaCategoria.id_categoria + 1 : 1;
        const nuevaCategoria = await Categoria.create({ id_categoria: nuevoId ,nombre });
        return nuevaCategoria;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { createCategoriaController };
