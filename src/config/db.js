const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    console.log('Intentando conectar...')
    await mongoose.connect(process.env.MONGO_URI)
    console.log('DB conectada')
  } catch (error) {
    console.log('Error DB', error)
  }
}

module.exports = connectDB
