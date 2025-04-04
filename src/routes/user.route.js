const route = require('express').Router();
const userController = require('../controllers/user.controller')

route.get("/", userController.soma)

route.get("/outra", userController.soma2)

module.exports = route;