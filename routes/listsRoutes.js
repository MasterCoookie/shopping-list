const express = require('express');
const listsController = require('../controllers/listsController');

const router = express.Router();

router.get('/list/:id', listsController.list_get);
router.put('/list/:id', listsController.list_put);
router.delete('/list/:id', listsController.list_delete);
router.get('/', listsController.lists_get);
router.get('/create', listsController.create_get);
router.post('/create', listsController.create_post);


module.exports = router;