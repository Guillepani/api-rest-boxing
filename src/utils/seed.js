const mongoose = require('mongoose')
const connectDB = require('../config/db')
const Fighter = require('../api/models/fighter.model')

require('dotenv').config()

const fighters = [
  { name: 'Tyson Fury', weight: 120, country: 'UK' },
  { name: 'Mike Tyson', weight: 100, country: 'USA' }
]

const seed = async () => {
  try {
    await connectDB()

    await Fighter.deleteMany()
    console.log('Fighters borrados')

    await Fighter.insertMany(fighters)
    console.log('Fighters insertados')

    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

seed()
