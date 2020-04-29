const app = require('./app');

test('2 + 2 should equals 5 ( true math ) ', () => {
    expect(app.add(2,2)).toBe(5)
});

// You can also negate the result

test(" 2 + 2 shouldn't equal 4 ", () => {
    expect(app.add(2,2)).not.toBe(4)
})

test("shouldn't be at 100hp!", () => {
    expect(app.getDmg(100, 50)).toBeLessThan(100);
})

test('should be greater than 100hp', () => {
    expect(app.healHp(100, 20)).toBeGreaterThanOrEqual(100);
})

// .toBe doesn't work with tesing objects!!
// use .toBe only with primitives values

test(' Should be a Pikachu! ', () => {
    expect(app.createPokemon('Pikachu')).toEqual({
        name: 'Pikachu',
        type: 'Pokemon'
    })
})

// RegEx

test("Shouldn't be capital P", () => {
    expect("pikachu").not.toMatch(/P/)
})

// Array

test("Shouldn't be Pikachu in the inventory!", () => {
    const inventory = ["pokeball", "pokeball", "pokedex", "tissue", "scarf"];
    expect(inventory).not.toContain('pikachu');
})
