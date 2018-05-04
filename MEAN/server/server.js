const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const mongojs = require('mongojs');

const db = mongojs('mongodb://Gennadii:1q2w120195@ds151259.mlab.com:51259/ws2812', ['data', 'users','usersData']);

const gienek = require('./routes/gienek');
const yosha = require('./routes/yosha');

const app = express();

//View engine folder
app.set('views', path.join(__dirname, 'views'));

// Specify your engine
app.set('view engine', 'ejs');

//render html files
app.engine('html', require('ejs').renderFile);

//Set static folder for Angular
let staticPath = path.normalize(__dirname + '/../dist');
app.use(express.static(staticPath));

// Catch all other routes and return the index file
app.get('/', function (req, res) {
  res.sendFile(staticPath + '/index.html');
});

app.get('/data', function(req,res){
  db.data.findOne(function (err, data) {
    if (err) {
      res.send(err);
    }
    console.log("Data from database:" + data.mode);
    res.json(data.mode);
  });
});

//Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Home page route
app.use('/gienek', gienek);

//Tasks page route
app.use('/yosha', yosha);

app.set('port', process.env.PORT || 8080);

let server = app.listen(process.env.PORT || 8080, function () {
  let port = server.address().port;
  console.log("App now running on port", port);
});

let pythonReq;

app.post('/python', function (req, res) {
  pythonReq = req.body.data;
  console.log(req.body);
  res.json(pythonReq);
});

// Showing that data, and sending it back
app.get('/python', function (req, res) {
  res.json(pythonReq);
});

const io = require('socket.io')(server);
//Socket connection
io.on('connection', (socket) => {
  console.log('New connection made');

  socket.on('Client_asking', (data) => {
    console.log(data.msg);
  });

  //Emit a message when we load the browser window
  socket.emit('Server_asking', {
    msg: 'Server to client, do u read me? Over.'
  });

  socket.on('Client_response', (data) => {
    console.log(data.msg);
    socket.emit('Server_response', {
      msg: 'Loud and clear'
    })
  });
  socket.on('mode yosha', (data) => {
    db.usersData.update({_id: mongojs.ObjectId('5aeaf265734d1d6405fa0c57')}, { $set: {data: data.msg} }, function () {
      console.log('Done');
    });
    socket.emit('Current mode', {
      msg: data.msg
    })
  });
  socket.on('mode Gienek', (data) => {
    db.usersData.update({_id: mongojs.ObjectId('5aeaf286734d1d6405fa0c7f')}, { $set: {data: data.msg} }, function () {
      console.log('Done');
    });
    socket.emit('Current mode', {
      msg: data.msg
    })
  });
  socket.on('Last mode yosha', (data) => {
    db.usersData.find(function (err, docs) {
      socket.emit('Last mode', {
        msg: docs[0].data
      })
    });
    console.log(data.msg);
  });
  socket.on('Last mode Gienek', (data) => {
    db.usersData.find(function (err, docs) {
      socket.emit('Last mode', {
        msg: docs[1].data
      })
    });
    console.log(data.msg);
  });
  socket.on('users_data', (data) => {
    db.users.find(function (err, docs) {
      socket.emit('receive_users', {
        msg: docs
      })
    });
    console.log(data.msg);
  });
});
