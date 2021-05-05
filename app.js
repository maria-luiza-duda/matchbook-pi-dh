var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var homeRouter = require('./routes/homeRouter')
var usersRouter = require('./routes/usersRouter');
var addressesRouter = require('./routes/addressesRouter');
var booksRouter = require('./routes/booksRouter');
var interestsRouter = require('./routes/interestsRouter');
var generesRouter = require('./routes/generesRouter');
var matchbookRouter = require('./routes/matchbookRouter');
var coverRouter = require('./routes/coverRouter')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({secret: "matchbook",saveUninitialized: true,resave: true}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', homeRouter)
app.use('/users', usersRouter);
app.use('/addresses', addressesRouter);
app.use('/books', booksRouter);
app.use('/interests', interestsRouter);
app.use('/generes', generesRouter);
app.use('/matchbooks', matchbookRouter);
app.use('/uploadcover', coverRouter);

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