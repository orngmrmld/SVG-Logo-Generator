const triangle = require ('../lib/triangle');

describe('triangle',() => {
    test ('Test for a triangle with an orange color',() => {
        const shape = new triangle();
        shape.setColor("orange");
        expect(shape.render()).toEqual(`<polygon height="100" width="100" points="0,200 300,200 150, 0" fill="orange" />`);
    });
});