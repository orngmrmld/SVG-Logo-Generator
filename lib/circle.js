const shapes = require('./shapes');

class circle extends shapes {
    render(){
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`
    }
}

module.exports = circle;