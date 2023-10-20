const express = require('express')
const { listCategories } = require('./controllers/categories')
const {
  registerUser,
  login,
  userUpdate,
  getUser
} = require('./controllers/users')
const checkLogin = require('./middlewares/authorization')
const {
  validateUserDataFields,
  validateEmailAndPasswordFields
} = require('./middlewares/validateUserData')
const { registerCustomer, updateClient } = require('./controllers/clients')
const { registerProduct, deleteProduct } = require('./controllers/products')
const routes = express()

routes.get('/categoria', listCategories)
routes.post('/usuario', validateUserDataFields, registerUser)
routes.post('/login', validateEmailAndPasswordFields, login)

routes.use(checkLogin)
routes.get('/usuario', getUser)
routes.put('/usuario', validateUserDataFields, userUpdate)

routes.post('/cliente', registerCustomer)
routes.put('/cliente/:id', updateClient)

routes.post('/produto', registerProduct)
routes.delete('/produto/:id', deleteProduct)
module.exports = routes
