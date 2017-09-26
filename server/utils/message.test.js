var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object',() => {
        var from = 'ton';
        var text = 'hello test generateMessage';
        var message = generateMessage(from,text)
        expect(message.createAt).toBeA('number');
        expect(message).toInclude({from,text});
    });
});
