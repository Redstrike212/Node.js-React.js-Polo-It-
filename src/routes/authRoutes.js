const { Router } = require('express')
const { registerHadler, loginHandler } = require('../handlers/authHandler')

const authRoutes = Router()

authRoutes.post("/register", registerHadler)
authRoutes.post("/login", loginHandler)

module.exports = authRoutes