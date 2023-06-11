const express = require('express')
const router = express.Router()
const apiController = require('../controllers/apiController')

router.get('/',
  apiController.getData,
  (req, res, next) => {
    res.status(200).json(res.locals.data)
  })

router.post('/',
  apiController.makeHack,
  (req, res, next) => {
    res.status(200).send([])
  })

module.exports = router
