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

socket.on('newLocationMessage',function(message){
  var li = jQuery('<li></li>');
  var a = jQuery('<a target="_blank">My Current Location</a>');
  li.text(`${message.from}: `);
  a.attr('href',message.url);
  li.append(a);
  jQuery('#me').append(li);
});

 jQuery('#message-form').on('submit',function(e){
   e.preventDefault();

var messageTextBox= jQuery('[name=message]');

   socket.emit('CreateMessage',{
     from: 'User',
     text: messageTextBox.val()
   },function(){
     messageTextBox.val('')
   });
 });
 var loc = jQuery('#slocation');
loc.on('click',function(){
  if (!navigator.geolocation) {
    return alert('Geolocation not supported');
  }
  navigator.geolocation.getCurrentPosition(function(position){
    socket.emit('createLocation',{
      latitude: position.coords.latitude,
      longitude: position.coords.longitude

   });
  }, function (){
    alert('Unable to fetch');
  });
});
