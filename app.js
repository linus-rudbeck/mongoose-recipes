require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// Require routes
const homeWebRouter = require('./routers/web/home-web-router');
const ingredientWebRouter = require('./routers/web/ingredient-web-router');

const ingredientApiRouter = require('./routers/api/ingredient-api-router');
const recipeApiRouter = require('./routers/api/recipe-api-router');

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("MDB connected..."))
    .catch(err => console.log(err));

const app = express();

app.engine('hbs', exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs" // default ".handlebars"
}))

app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Use routes
app.use('/', homeWebRouter);
app.use('/ingredients', ingredientWebRouter);
app.use('/api/ingredients', ingredientApiRouter);
app.use('/api/recipes', recipeApiRouter);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
})