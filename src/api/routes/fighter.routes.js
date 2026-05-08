const FighterRoutes = require('express').Router()
const {
  createFighter,
  getFighters,
  updateFighter,
  deleteFighter
} = require('../controllers/fighter.controller')

FighterRoutes.post('/', createFighter)
FighterRoutes.get('/', getFighters)
FighterRoutes.put('/:id', updateFighter)
FighterRoutes.delete('/:id', deleteFighter)

module.exports = FighterRoutes
