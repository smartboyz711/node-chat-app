const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString',() => {
    it('should reject non-string values',() => {
        var result = isRealString(1);
        expect(result).toBe(false);
    });
    it('should reject string with only spaces', () => {
        var result = isRealString('    ');
        expect(result).toBe(false);
    });
    it('should allow string with non-space characters', () => {
        var result = isRealString('name');
        expect(result).toBe(true);
    });
    it('should allow string with space characters', () => {
        var result = isRealString(' n a m e ');
        expect(result).toBe(true);
    });
});

