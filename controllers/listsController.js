const list_get = (req, res) => {
    res.render('list/list', { title: 'List no ' });
}

module.exports = { list_get }