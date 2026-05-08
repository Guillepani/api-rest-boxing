const express = require('express')
const connectDB = require('./src/config/db')
const fighterRoutes = require('./src/api/routes/fighter.routes')
const fightRoutes = require('./src/api/routes/fight.routes')

require('dotenv').config()

const app = express()

connectDB()

app.use(express.json())

app.use('/fighters', fighterRoutes)
app.use('/fights', fightRoutes)

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000')
})
