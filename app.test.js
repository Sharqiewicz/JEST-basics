const app = require('./app');

test('2 + 2 should equals 5 ( true math ) ', () => {
    expect(app.add(2,2)).toBe(5)
});