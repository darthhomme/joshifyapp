var express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose'),
    bodyParser  = require('body-parser'),
    server      = require('http').Server(app),
    socketIo    = require('socket.io'),
    io          = socketIo(server);


mongoose.connect('mongodb://localhost/notice-01')
app.use(express.static('./client'));

app.set('views', __dirname + '/client/views')
app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var indexRouter = require('./server/routes/index');
var noticeRouter = require('./server/routes/api/notices');

app.use('/', indexRouter);
app.use('/api/notices', noticeRouter);

  io.on('connection', function(socket){
  console.log('new connection');
  socket.on('user message to server', function(data){
    io.sockets.emit('globally sent message', data);
  });
});

var port = 8080;
app.listen(port, function(){
  console.log("listening on port ", port);
})
