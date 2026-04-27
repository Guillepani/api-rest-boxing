const mongoose = require('mongoose')

const fightSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    location: { type: String, required: true, trim: true },
    fighters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fighters'
      }
    ]
  },
  {
    timestamps: true
  }
)

const Fight = mongoose.model('fights', fightSchema)

module.exports = Fight
