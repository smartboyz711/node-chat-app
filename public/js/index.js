var socket = io();
socket.on('connect', function() {
    console.log('Connected to server');
});
socket.on('disconnect', function() {
    console.log('Disconnected from server');
});
socket.on('newMessage', function(newMessage) {
    console.log('New message',newMessage)
});
socket.emit('createMessage',{
    from : 'Frank',
    text : 'hi'
}, function (data) {
    console.log('Got it',data);
});

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();
});