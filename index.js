const express = require('express')
const connectDB = require('./src/config/db')
const fighterRoutes = require('./src/routes/fighter.routes')

require('dotenv').config()

const app = express()

connectDB()

app.use(express.json())

app.use('/fighters', fighterRoutes)

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000')
})
