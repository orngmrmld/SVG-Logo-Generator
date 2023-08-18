const shapes = require('./shapes');

class square extends shapes {
    render(){
        return '`<rect x = "50" width ="250" height = "250" fill="${this.color}" />`'
    }
}

module.exports = square;