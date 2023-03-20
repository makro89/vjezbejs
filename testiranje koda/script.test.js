const sum = require('../script');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('nadji najveci broj', () => {
    expect(nadjiNajveci()).toEqual(143);
});