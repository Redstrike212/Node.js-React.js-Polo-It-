const Joi = require('joi');
const { registerController, loginController } = require('../controllers/authController');
const userSchema = Joi.object({
    nombre:   Joi.string().min(3).required(),
    apellido: Joi.string().min(3).required(),
    correo: Joi.string().email().required(),
    password: Joi.string().pattern(/^\d{6}$/).required(),
    id_rol: Joi.number().valid(1, 2).default(2),
})  



const registerHandler = async (req, res) => {
    try {
        const {error} = userSchema.validate(req.body)
        if(error) res.status(400).send(error.details[0].message);

        const {nombre, apellido, correo, password, id_rol} = req.body;
        const response = await registerController({ nombre, apellido, correo, password, id_rol })

        res.status(201).send(response)
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
}

const loginHandler = async (req, res) => {
    try {
        const {correo, password} = req.body
        const response = await loginController(correo, password)
        res.send(response)
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
}

module.exports = {
    registerHandler,
    loginHandler
}