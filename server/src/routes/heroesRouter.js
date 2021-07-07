const { Router } = require('express');
const heroesController = require('../controllers/heroesController')();

function heroesRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(heroesController.getAll)
    .post(heroesController.createOne);

  routes
    .route('/:heroId')
    .get(heroesController.getById)
    .put(heroesController.updateById)
    .delete(heroesController.deleteById);

  return routes;
}

module.exports = heroesRouter();
