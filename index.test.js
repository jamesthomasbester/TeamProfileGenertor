const team = require('./team');

test('function should return the sum of the two numbers entered', () => {
    expect(team(5,5)).toBe(10);
})