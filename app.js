var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var newGame = require('./routes/newGame');
var loadPage = require('./routes/load');
var delPage = require('./routes/delete');
var room1 = require('./routes/room1');
var room2 = require('./routes/room2');
var room3 = require('./routes/room3');
var room4 = require('./routes/room4');
var dead = require('./routes/dead');
var end = require('./routes/end');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/newGame', newGame);
app.use('/load', loadPage);
app.use('/delete', delPage);
app.use('/room1', room1);
app.use('/room2', room2);
app.use('/room3', room3);
app.use('/room4', room4);
app.use('/end', end);
app.use('/dead', dead);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
