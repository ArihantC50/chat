var socket = io();

socket.on('connect',function(){
  console.log('connected to server');

});
socket.on('disconnect',function(){
  console.log('Disconnected');
});

socket.on('newMessage',function(message){
  console.log('New Message',message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#me').append(li);
});
 socket.emit('CreateMessage',{
   from: 'Arihant',
   text: 'hi'
 },function(data){
   console.log('Got',data);
 });
 jQuery('#message-form').on('submit',function(e){
   e.preventDefault();
   socket.emit('CreateMessage',{
     from: 'User',
     text: jQuery('[name=message]').val()
   },function(){

   });
 });
