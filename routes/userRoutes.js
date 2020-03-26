const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

// Login Route - Creates a session
router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) throw err
    res.json({
      isLoggedIn: !!user,
      user: user.username,
      token: jwt.sign({ id: user._id }, 'garden')
    })
  })
})

// Registration Route
router.post('/users/register', (req, res) => {
  User.register(new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username
  }), req.body.password, err => {
    if (err) throw err 
    res.sendStatus(200)
  })
})

// UserLogout Route
router.get('/users/logout', (req, res) => {
  req.logout()
})

module.exports = router