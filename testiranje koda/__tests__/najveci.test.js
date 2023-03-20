const myObj = require("../najveci")

test('nadji najveci broj', () => {
    expect(myObj.nadjiNajveci()).toEqual(143);
});

test('nadji najmanji broj', () => {
    expect(myObj.najdiNajmanji()).toEqual(11);
});