const { Router } = require('express');
const { createCategoriaHandler } = require('../handlers/categoriaHandler');
const categoryRouter = Router();


categoryRouter.post('/', createCategoriaHandler);

module.exports = {
    categoryRouter
};
