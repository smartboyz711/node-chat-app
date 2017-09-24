var socket = io();
socket.on('connect', function() {
    console.log('Connected to server');
    // socket.emit('createEmail',{
    //     to : 'jen@example',
    //     text : 'Hey.this is Andrew.'
    // });
    socket.emit('createMessage',{
        from : 'jen@example',
        text : 'Hey.this is Andrew.'
    });
});
socket.on('disconnect', function() {
    console.log('Disconnected from server');
});
socket.on('newEmail', function (email) {
    console.log('New email',email);
});
socket.on('newMessage', function(newMessage) {
    console.log('New message',newMessage)
});