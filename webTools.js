
const { generateId } = require('./generate_id');
const {rgbColor} = require('./generate_rgb_color')
const { hexaColor } = require('./generate_hexa_color');
const { showDateTime } = require('./show_date_time');


const webTools = (() => {
    return {
        generateId,
        hexaColor,
        rgbColor,
        showDateTime
    }
})()

// console.log(webTools.generateId(), webTools.hexaColor(), webTools.rgbColor(), webTools.showDateTime());
module.exports.webTools = webTools
