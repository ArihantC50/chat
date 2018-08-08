const path = require('path');
const http = require('http');
const express  = require('express');
const socketio = require('socket.io');
const publicpath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
// console.log(__dirname + '/../public');
// console.log(publicpath);
var app = express();
var server=http.createServer(app);
var io = socketio(server);

app.use(express.static(publicpath));

io.on('connection',(socket)=>{
  console.log('new user connected');
  socket.emit('newMessage',{
    from: 'jen',
    text: 'Hy see u',
    createAT: 123123
  });

  socket.on('CreateMessage',(message)=>{
    console.log('CreateMessage',message);
  });

  socket.on('disconnect',() => {
    console.log('user was Disconnected');
  });
});
server.listen(port,()=>{
  console.log(`Server is up ${port}`);
});
