const express = require('express')
const mongoose = require('mongoose');
const listsRoutes = require('./routes/listsRoutes');

const app = express()
const port = 3000


dbURI = 'mongodb+srv://admin:root@cluster0.gqhx8.mongodb.net/shopping-list?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(result => {
    console.log('DB connection established!');
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}).catch(err => {
    console.log(err);
});

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/mylists', listsRoutes);


app.use((req, res) => {
    res.status(404).render("404", { title: 'Not Found :(' })
})
