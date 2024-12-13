const { Router } = require('express');
const { createMascotaHandler } = require('../handlers/mascotaHandler');
const mascotRouter = Router();


mascotRouter.post('/', createMascotaHandler);

module.exports = {
    mascotRouter
};
