const { Router } = require('express')

const UsersControllers = require('../controllers/UsersController')

const usersRoutes = Router()

const usersControler = new UsersControllers()

usersRoutes.post('/', usersControler.create)
usersRoutes.put('/:id', usersControler.update)

module.exports = usersRoutes