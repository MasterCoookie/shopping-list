const express = require('express');
const listsController = require('../controllers/listsController');

const router = express.Router();

router.get('/list', listsController.list_get)


module.exports = router;