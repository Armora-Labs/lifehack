const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

<<<<<<< HEAD
router.get('/', apiController.getData, (req, res, next) => {
  res.status(200).json(res.locals.data);
});
=======
router.get('/:category',
  apiController.getData,
  (req, res, next) => {
    res.status(200).json(res.locals.data)
  })
>>>>>>> Dev

router.post('/', apiController.makeHack, (req, res, next) => {
  res.status(200).send([]);
});

<<<<<<< HEAD
router.get('/user', apiController.getUser, (req, res, next) => {
  res.status(200).json(res.locals.data);
});
=======
  router.get('/user/:user',
  apiController.getUser,
  (req, res, next) => {
    res.status(200).json(res.locals.data)
  })
>>>>>>> Dev

router.post('/user', apiController.makeUser, (req, res, next) => {
  res.status(200).json(res.locals.data);
});

router.patch('/user', apiController.changeUsername, (req, res, next) => {
  res.status(200).json(res.locals.data);
});

module.exports = router;
