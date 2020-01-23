var createError = require('http-errors');
let express = require('express')
let app = express();
var toDo = require('./src/routes/ToDoRoute');
var cookieParser = require('cookie-parser');
var cors = require('cors');

var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); 
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/todo', toDo);
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
});
  
module.exports = app;