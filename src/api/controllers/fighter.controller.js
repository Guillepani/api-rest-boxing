const Fighter = require('../models/fighter.model')
const Fight = require('../models/fight.model')
const mongoose = require('mongoose')

// CREATE
const createFighter = async (req, res) => {
  try {
    const newFighter = new Fighter(req.body)
    const savedFighter = await newFighter.save()

    return res.status(201).json(savedFighter)
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

// READ
const getFighters = async (req, res) => {
  try {
    const fighters = await Fighter.find()

    return res.status(200).json(fighters)
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

// UPDATE
const updateFighter = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID no válido'
      })
    }

    const updated = await Fighter.findByIdAndUpdate(id, req.body, {
      new: true
    })

    return res.status(200).json(updated)
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

// DELETE
const deleteFighter = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID no válido'
      })
    }

    await Fight.updateMany(
      { fighters: id },
      { $pull: { fighters: id } }
    )

    await Fighter.findByIdAndDelete(id)

    return res.status(200).json('Fighter eliminado')
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

module.exports = {
  createFighter,
  getFighters,
  updateFighter,
  deleteFighter
}