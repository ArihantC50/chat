var socket = io();

socket.on('connect',function(){
  console.log('connected to server');
  socket.emit('CreateMessage',{
    from: 'Arihant',
    text: 'hey how are you'
  });
});
socket.on('disconnect',function(){
  console.log('Disconnected');
});

socket.on('newMessage',function(message){
  console.log('New Message',message);
});
