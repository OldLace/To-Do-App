const express = require('express');
const todoRoutes = express.Router();

const todoController = require('../controllers/controller.js');

todoRoutes.get('/', todoController.index);
todoRoutes.post('/', todoController.create);
//
todoRoutes.get('/:id', todoController.show);
// todoRoutes.put('/', todoController.update);
todoRoutes.delete('/:id', todoController.delete);

module.exports = todoRoutes;