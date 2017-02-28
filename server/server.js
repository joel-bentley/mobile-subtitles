var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var dotenv = require('dotenv');
dotenv.load();

var data = require('./sample-data').subtitles;
var subtitleIndex = 0;

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


io.on('connection', function(socket){
  console.log('a user connected');

  socket.emit('nextSubtitle', data[subtitleIndex])

  socket.on('sendNextSubtitle', function() {
    subtitleIndex = (subtitleIndex + 1) % data.length;
    io.emit('nextSubtitle', data[subtitleIndex])
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(process.env.PORT, function(){
  console.log('listening on *:' + process.env.PORT);
});
