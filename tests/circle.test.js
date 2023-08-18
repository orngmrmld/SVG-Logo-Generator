const circle = require ('../lib/circle');

describe('circle',() => {
    test('Test for a circle with green color',() => {
        const shape = new circle();
        shape.setColor("green");
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="90" fill="green" />`);
    });
});