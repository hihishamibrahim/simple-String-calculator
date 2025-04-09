const SimpleCalculator = require('./simpleCalculator');

describe('SimpleCalculator', () => {
    it('should add two numbers', () => {
        expect(SimpleCalculator('1,2')).toBe(3);
    });
    it('should return 0 if empty string', () => {
        expect(SimpleCalculator('')).toBe(0);
    });
});