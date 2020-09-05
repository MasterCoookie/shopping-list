const List = require('../models/list');
const objectId = require('mongodb').ObjectId;

const list_get = (req, res) => {
    res.render('list/list', { title: 'List no ' });
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
        res.json({ redirect: '/mylists' });
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