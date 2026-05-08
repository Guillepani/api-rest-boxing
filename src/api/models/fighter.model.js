const mongoose = require('mongoose')

const fighterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    weight: { type: Number, required: true },
    country: { type: String, required: true, trim: true }
  },
  {
    timestamps: true
  }
)

const Fighter = mongoose.model('fighters', fighterSchema)

module.exports = Fighter
