var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(newMessage) {
    var formattedTime = moment(newMessage.createAt).format('H:mm a');
    var template = jQuery('#message-template').html();
    var html = Mustache.render(template ,{
        text : newMessage.text,
        from : newMessage.from,
        createAt : formattedTime
    });
    jQuery('#messages').append(html);
});

socket.on('newLocationMessage', function(locationMessage) {
    var formattedTime = moment(locationMessage.createAt).format('H:mm a');
    var template = jQuery('#location-message-template').html();
    var html = Mustache.render(template ,{
        text : locationMessage.text,
        from : locationMessage.from,
        url : locationMessage.url,
        createAt : formattedTime
    });
    jQuery('#messages').append(html);
});

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();
    var messageTextbox = jQuery('[name=message]');
    socket.emit('createMessage',{
        from : 'User',
        text: jQuery('[name=message]').val()
    }, function () {
        messageTextbox.val('')
    });
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function () {
    if(!navigator.geolocation){
        return alert('Geolocation bot supported by your browser.');
    }
    locationButton.attr('disabled','disabled').text('Sending location...');
    navigator.geolocation.getCurrentPosition( function(position) {
        locationButton.removeAttr('disabled').text('Send location');
        socket.emit('createlocationMessage', {
           latitude : position.coords.latitude,
           longitude : position.coords.longitude
        });
    }, function () {
        locationButton.removeAttr('disabled').text('Send location');
        alert('Unable to fetch location.');
    });
});