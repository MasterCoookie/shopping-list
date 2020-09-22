const express = require('express');
const listsController = require('../controllers/listsController');
const listMiddleware = require('../middleware/listMiddleware');

const router = express.Router();

router.get('/list/:id', listMiddleware.checkViewPermit, listsController.list_get);
router.put('/list/:id', listMiddleware.checkViewPermit, listsController.list_put);
router.delete('/list/:id', listMiddleware.checkViewPermit, listsController.list_delete);
router.get('/', listsController.lists_get);
router.get('/list/create', listsController.create_get);
router.post('/list/create', listsController.create_post);
router.get('/share/:id', listsController.share);
router.get('/shared/', listsController.shared_get);


module.exports = router;