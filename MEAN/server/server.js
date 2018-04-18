const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

const url = 'https://api.telegram.org/bot413591560:AAEKLcWCrmyzQT3nd3UGt_PZpuPrWc0Snzo/getUpdates';
//const mongojs = require('mongojs');
//const db = mongojs('mongodb://Gennadii:1q2w120195@ds239097.mlab.com:39097/sensors', ['clientData']);

let dataFromBot = [];
let dataFromUI = {
  mode: 0
};

function telegram(){
  request({
    url: url,
    json: true
  }, function (error, response, body) {

    if (!error && response.statusCode === 200) {
      body.result.map((element,i)=>{
        dataFromBot = element.message.text;
      });
    }
  });
}

const index = require('./routes/index');
const tasks = require('./routes/tasks');

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
  res.json(dataFromUI);
});

//Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Home page route
app.use('/index', index);

//Tasks page route
app.use('/api', tasks);

app.set('port', process.env.PORT || 8080);

let server = app.listen(process.env.PORT || 8080, function () {
  let port = server.address().port;
  console.log("App now running on port", port);
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
  socket.on('Mode', (data) => {
    dataFromUI.mode = data.msg;
    socket.emit('Current mode', {
      msg: dataFromUI.mode
    })
  });
  setInterval(function () {
    telegram();
    return socket.emit('Telegram_data', {
      msg: dataFromBot
    });
  }, 10000);
});
