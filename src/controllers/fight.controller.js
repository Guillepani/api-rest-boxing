const Fight = require('../models/fight.model')

// CREATE
const createFight = async (req, res) => {
  try {
    const newFight = new Fight(req.body)
    const savedFight = await newFight.save()
    return res.status(201).json(savedFight)
  } catch (error) {
    return res.status(400).json(error)
  }
}

// READ
const getFights = async (req, res) => {
  try {
    const fights = await Fight.find().populate('fighters')
    return res.status(200).json(fights)
  } catch (error) {
    return res.status(400).json(error)
  }
}

// ADD FIGHTER (sin borrar y sin duplicados)
const addFighterToFight = async (req, res) => {
  try {
    const { id } = req.params
    const { fighterId } = req.body

    const updatedFight = await Fight.findByIdAndUpdate(
      id,
      {
        $addToSet: { fighters: fighterId }
      },
      { new: true }
    ).populate('fighters')

    return res.status(200).json(updatedFight)
  } catch (error) {
    return res.status(400).json(error)
  }
}

// DELETE
const deleteFight = async (req, res) => {
  try {
    const { id } = req.params
    await Fight.findByIdAndDelete(id)
    return res.status(200).json('Fight eliminado')
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = {
  createFight,
  getFights,
  addFighterToFight,
  deleteFight
}
