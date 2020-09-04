const List = require('../models/list');

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
    console.log(req.body);
}

module.exports = {
    list_get,
    allLists_get,
    create_get,
    create_post
}