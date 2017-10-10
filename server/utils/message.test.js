var expect = require('expect');
var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object',() => {
        var from = 'ton';
        var text = 'hello test generateMessage';
        var message = generateMessage(from,text);
        expect(message.createAt).toBeA('number');
        expect(message).toInclude({from,text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct LocationMessage object',() => {
        var from = 'ton';
        var latitude  = '15.13';
        var longitude = '-17.123';
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var locationMessage = generateLocationMessage(from , latitude, longitude);
        expect(locationMessage.createAt).toBeA('number');
        expect(locationMessage).toInclude({from,url});
    });
});
