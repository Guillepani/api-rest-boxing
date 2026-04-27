const Fighter = require('../models/fighter.model')

// CREATE
const createFighter = async (req, res) => {
  try {
    const newFighter = new Fighter(req.body)
    const savedFighter = await newFighter.save()
    return res.status(201).json(savedFighter)
  } catch (error) {
    return res.status(400).json(error)
  }
}

// READ
const getFighters = async (req, res) => {
  try {
    const fighters = await Fighter.find()
    return res.status(200).json(fighters)
  } catch (error) {
    return res.status(400).json(error)
  }
}

// UPDATE
const updateFighter = async (req, res) => {
  try {
    const { id } = req.params
    const updated = await Fighter.findByIdAndUpdate(id, req.body, { new: true })
    return res.status(200).json(updated)
  } catch (error) {
    return res.status(400).json(error)
  }
}

// DELETE
const deleteFighter = async (req, res) => {
  try {
    const { id } = req.params
    await Fighter.findByIdAndDelete(id)
    return res.status(200).json('Fighter eliminado')
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = {
  createFighter,
  getFighters,
  updateFighter,
  deleteFighter
}
