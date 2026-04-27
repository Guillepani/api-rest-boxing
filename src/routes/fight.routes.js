const FightRoutes = require('express').Router()
const {
  createFight,
  getFights,
  deleteFight
} = require('../controllers/fight.controller')

FightRoutes.post('/', createFight)
FightRoutes.get('/', getFights)
FightRoutes.delete('/:id', deleteFight)

module.exports = FightRoutes
