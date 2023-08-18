const square = require ('../lib/square');

describe('square',() => {
    test('Test for a square with purple color',() => {
        const shape = new square();
        shape.setColor("purple");
        expect(shape.render()).toEqual(`<rect x = "50" width ="200" height="200" fill="purple" />`);
    });
});