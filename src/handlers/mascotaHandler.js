const { createMascotaController } = require("../controllers/mascotaController");


const createMascotaHandler = async (req, res) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            return res.status(400).send({ error: 'El nombre de la mascota es obligatorio.' });
        }

        const nuevaMascota = await createMascotaController(nombre);
        res.status(201).send(nuevaMascota);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports = { createMascotaHandler };
