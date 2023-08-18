const shapes = require('./shapes');

class circle extends shapes {
    render(){
        return '`<circle cx="175" cy="175" r="90" fill="${this.color}" />`'
    }
}

module.exports = circle;