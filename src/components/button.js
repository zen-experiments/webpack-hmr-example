'use strict';

class Button {
    constructor({label}) {
        this.label = label
    }

    render() {
        return `<button>${this.label} ---- 1</button>`
    }
}

module.exports = Button;
