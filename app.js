require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const beersRouter = require('./routes/beers');
const mapsRouter = require('./routes/maps');
const videosRouter = require('./routes/videos');
const pictureRouter = require('./routes/picture');

const app = express();
app.use(cors());
mongoose.connect('mongodb://localhost:27017/beer-world', {useNewUrlParser: true});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/beers', beersRouter);
app.use('/maps', mapsRouter);
app.use('/videos',videosRouter);
app.use('/pictures', pictureRouter);

module.exports = app;
