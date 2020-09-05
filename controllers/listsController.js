const List = require('../models/list');
const objectId = require('mongodb').ObjectId;

const list_get = (req, res) => {
    const id = req.params.id;
    List.findById(id).then(result => {
        res.render('list/list', { title: `List ${result.name}`, body: result });
    }).catch(err => {
        console.log(err);
    })

}

const allLists_get = (req, res) => {
    res.render('list/all', { title: 'All Lists' });
}

const create_get = (req, res) => {
    res.render('list/create', { title: 'Create' });
}

const create_post = (req, res) => {
    req.body.authorId = objectId(req.body.authorId);
    const list = new List(req.body);

    list.save().then(result => {
        res.json({ redirect: `/mylists/list/${result._id}` });
    }).catch(err => {
        console.log(err);
    })
}

module.exports = {
    list_get,
    allLists_get,
    create_get,
    create_post
}