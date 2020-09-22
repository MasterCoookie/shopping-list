const List = require('../models/list');
const objectId = require('mongodb').ObjectId;

const checkViewPermit = (req, res, next) => {
    if(req.params.id) {
        const userId = res.locals.user._id;
        const listId = objectId(req.params.id);

        List.findById(listId).then(result => {
            // if user is author than go on
            if(userId == result.authorId.toString()) {
                next();
            } else {
                // if user isnt author and the list was never shared deny
                if(!result.sharedWith) {
                    console.log("ACCESS DENIED!");
                    res.redirect('/mylists');
                // if list was shared check who with
                } else {
                    if(result.sharedWith.includes(userId)) {
                        next();
                    } else {
                        console.log("ACCESS DENIED!");
                        res.redirect('/mylists');
                    }
                }
            }
        }).catch(err => {
            console.log(err);
            res.redirect('/mylists')
        })
    } else {
        next();
    }
}

module.exports = { checkViewPermit };