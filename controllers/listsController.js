const List = require('../models/list');
const { response } = require('express');
const objectId = require('mongodb').ObjectId;

const list_get = (req, res) => {
    const id = req.params.id;
    List.findById(id).then(result => {
        res.render('list/list', { title: `List ${result.name}`, body: result });
    }).catch(err => {
        console.log(err);
    });
}

const list_delete = (req, res) => {
    const id = req.params.id;

    List.findByIdAndDelete(id).then(result => {
        res.json({ redirect: '/mylists' });
    }).catch(err => {
        console.log(err);
    })
}

const list_put = (req, res) => {
    const listId = req.params.id;
    const prodId = req.body.id;

    List.findById(listId).then(result => {
        //console.log(result.prodList);
        const updated = result.prodList.map(prod => {
            if (prod._id.equals(objectId(prodId))) {
                prod.pordChecked = !prod.pordChecked;
                console.log(prod.pordChecked);
                return prod;
            } else {
                return prod;
            }
        });
        //console.log(updated);
    }).catch(err => {
        console.log(err);
    })
}

const lists_get = (req, res) => {
    // TODO - get actuall id
    authorId = objectId('4edd40c86762e0fb12000003');

    List.find({ authorId }).then(result => {
        res.render('list/all', { title: 'All Lists', lists: result });
    }).catch(err => {
        console.log(err);
    })

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
    lists_get,
    create_get,
    create_post,
    list_delete,
    list_put
}