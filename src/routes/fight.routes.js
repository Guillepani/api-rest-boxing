const FightRoutes = require('express').Router()

const {
  createFight,
  getFights,
  updateFight,
  addFighterToFight,
  deleteFight
} = require('../controllers/fight.controller')

FightRoutes.post('/', createFight)
FightRoutes.get('/', getFights)
FightRoutes.put('/:id', updateFight)
FightRoutes.post('/:id/fighters', addFighterToFight)
FightRoutes.delete('/:id', deleteFight)

module.exports = FightRoutes
