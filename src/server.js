const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '..', 'public')));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const APP_PORT = process.env.APP_PORT;
app.listen(APP_PORT, () => {
    console.log(`Server running on port ${APP_PORT}`);
});

module.exports = app;