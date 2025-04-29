const route = require('express').Router();
const userController = require('../controllers/user.controller')

route.post("/", userController.create)

// route.get("/outra", userController.soma2)

module.exports = route;