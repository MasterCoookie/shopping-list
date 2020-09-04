const express = require('express');
const listsController = require('../controllers/listsController');

const router = express.Router();

router.get('/list', listsController.list_get)
router.get('/all', listsController.allLists_get)
router.get('/create', listsController.create_get)


module.exports = router;