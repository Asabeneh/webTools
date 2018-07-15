const { randId } = require('./randomId');
const {rgbColor} = require('./rgbColor')
const { hexaColor } = require('./hexaColor');
const { displayDateTime } = require('./displayDateTime');


const webTools = (() => {
    return {
        randId,
        hexaColor,
        rgbColor,
        displayDateTime
    }
})()

// console.log(webTools.randId(), webTools.hexaColor(), webTools.rgbColor(), webTools.displayDateTime());
module.exports.webTools = webTools
