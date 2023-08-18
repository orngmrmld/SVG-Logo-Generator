const shapes = require('./shapes');

class triangle extends shapes {
    render() {
        return `<polygon height="200" width="200" fill="${this.color}" />`
    }
}

module.exports = triangle;