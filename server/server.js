const path = require('path');
const http = require('http');
const express  = require('express');
const socketio = require('socket.io');
const {generateMessage} = require('./utils/message');
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
socket.emit('newMessage', generateMessage('Admin','Welcome to chat app'));
socket.broadcast.emit('newMessage',generateMessage('Admin','New User Joined'));
// socket.broadcast.emit('newMessage',{
//   from: 'Admin',
//   text: 'New User Join',
//   createdAT: new Date().getTime()
// });

  socket.on('CreateMessage',(message)=>{
    console.log('CreateMessage',message);
    io.emit('newMessage',generateMessage(message.from,message.text));
    // io.emit('newMessage',{
    //   from:message.from,
    //   text:message.text,
    //   createAT: new Date().getTime()
    // });
    // socket.broadcast.emit('newMessage',{
    //   from:message.from,
    //   text:message.text,
    //   createAT: new Date().getTime()
    // });
  });

  socket.on('disconnect',() => {
    console.log('user was Disconnected');
  });
});
server.listen(port,()=>{
  console.log(`Server is up ${port}`);
});
