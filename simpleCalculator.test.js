const SimpleCalculator = require('./simpleCalculator');

describe('SimpleCalculator', () => {
    it('should add numbers seperated by coma', () => {
        expect(SimpleCalculator('1,2')).toBe(3);
        expect(SimpleCalculator('1,2,10')).toBe(13);
        expect(SimpleCalculator('10,2,1,100')).toBe(113);
    });
    it('should return 0 if empty string', () => {
        expect(SimpleCalculator('')).toBe(0);
    });
    it('test single number', () => {
        expect(SimpleCalculator('5')).toBe(5);
        expect(SimpleCalculator('15')).toBe(15);
    });
});