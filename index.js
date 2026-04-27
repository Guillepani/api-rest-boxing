const express = require('express')
const connectDB = require('./src/config/db')

require('dotenv').config()

const app = express()

connectDB()

app.use(express.json())

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000')
})
