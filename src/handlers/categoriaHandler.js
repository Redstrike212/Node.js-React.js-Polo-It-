const { createCategoriaController } = require("../controllers/categoriaController");


const createCategoriaHandler = async (req, res) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            return res.status(400).send({ error: 'El nombre de la mascota es obligatorio.' });
        }

        const nuevaCategoria = await createCategoriaController(nombre);
        res.status(201).send(nuevaCategoria);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports = { createCategoriaHandler };
