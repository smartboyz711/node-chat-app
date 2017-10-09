const path = require('path');
const http = require('http');
const express = require('express');
const publicPath = path.join(__dirname,'../public');
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;
const {generateMessage,generateLocationMessage} = require('./utils/message');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) => {
    console.log('New user connected');

    socket.emit('newMessage',generateMessage('Admin','Welcome to the chat app'));

    socket.broadcast.emit('newMessage',generateMessage('Admin','New user joined'));

    socket.on('createMessage',(message, callback) => {
        console.log('createMessage', message);
        io.emit('newMessage',generateMessage(message.from,message.text));
        callback('this is from server');
    });

    socket.on('createlocationMessage', (coords) => {
        io.emit('newLocationMessage',generateLocationMessage('Admin',coords.latitude,coords.longitude));
    });

    socket.on('disconnect',() => {
        console.log('User was Disconnected');
    });
});

server.listen(port,()=>{
    console.log('Server is up port '+port);
});