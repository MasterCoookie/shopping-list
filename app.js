//add
const express = require('express')
const mongoose = require('mongoose');
const listsRoutes = require('./routes/listsRoutes');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middleware/authMiddleware');

const app = express()
const port = 3000


dbURI = 'mongodb+srv://admin:root@cluster0.gqhx8.mongodb.net/shopping-list?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true,
                          useUnifiedTopology: true,
                          useFindAndModify: false,
                          useCreateIndex: true }).then(result => {
    console.log('DB connection established!');
    app.listen(port, () => console.log(`App listening for requests on port ${port}!`));
}).catch(err => {
    console.log(err);
});

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

app.use('*', authMiddleware.checkuser);
app.get('/', (req, res) => res.render('index', { title: 'Home' }));

app.use('/', authRoutes);

app.use('/mylists', authMiddleware.requireLogin, listsRoutes);


app.use((req, res) => {
    res.status(404).render("404", { title: 'Not Found :(' })
})
