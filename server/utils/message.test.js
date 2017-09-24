var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object',() => {
        var from = 'ton';
        var text = 'hello test generateMessage';
        var message = generateMessage(from,text)
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(message.createAt).toBeA('number');
    });
});
