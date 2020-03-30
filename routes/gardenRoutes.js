const router = require('express').Router()
const { Garden, User } = require('../models')

// GET all gardens
router.get('/gardens', (req, res) => Garden.find()
  .then(gardens => res.json(gardens))
  .catch(e => console.error(e)
  ))

//POST a garden
router.post('/gardens', (req, res) => Garden.create(req.body)
  .then(({ _id }) => {
    User.findByIdAndUpdate
    (req.body.owner, { $push: {gardens: _id }})
  })) 

  //PUT a garden
  router.put('/gardens/:id', (req, res) => Garden.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus (200))
    .catch(e => console.error(e)
  ))

  //Delete a garden
  router.delete('/gardens/:id', (req, res) => Garden.findByIdAndDelete(req.params.id)
    .then(({ _id, owner }) => {
      User.findByIdAndUpdate
      (owner, { $pull: { items: _id }})
       .then(() => res.sendStatus(200))
    })
      .catch(e => console.error(e)
    ))

    module.exports = router