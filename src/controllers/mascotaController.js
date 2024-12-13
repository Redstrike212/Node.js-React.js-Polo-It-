const Mascota = require('../models/mascota'); // Asegúrate de tener la ruta correcta

const createMascotaController = async (nombre) => {
    try {
        const ultimaMascota = await Mascota.findOne({
            order: [['id_mascota', 'DESC']],
        });
        const nuevoId = ultimaMascota ? ultimaMascota.id_mascota + 1 : 1;
        const nuevaMascota = await Mascota.create({ id_mascota: nuevoId ,nombre });
        return nuevaMascota;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { createMascotaController };
