const List = require('../models/list');
const objectId = require('mongodb').ObjectId;

const checkViewPermit = (req, res, next) => {
    console.log(req.params);
    if(req.params.id) {
        const userId = res.locals.user._id;
        const listId = objectId(req.params.id);

        console.log(listId);
    }
    next();
}

module.exports = { checkViewPermit };