const path = require('path');
const http = require('http');
const express = require('express');
const publicPath = path.join(__dirname,'../public');
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) => {
    console.log('New user connected');

    // socket.emit('newEmail', {
    //     from : 'mike@example.com',
    //     text : 'Hey.What is going on.',
    //     createAt : 123
    // });

    socket.emit('newMessage',{
        from : 'mike@example.com',
        text : 'Hey.What is going on.',
        createAt : new Date().toDateString
    });

    socket.on('createMessage',(newMessage) => {
        console.log('createMessage', newMessage);
    });

    socket.on('createEmail',(newEmail) => {
        console.log('createEmail', newEmail);
    });

    socket.on('disconnect',() => {
        console.log('User was Disconnected');
    })
});

server.listen(port,()=>{
    console.log('Server is up port '+port);
});