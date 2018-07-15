const rgbColor = function() {
    let redColor;
    let greenColor;
    let blueColor;

    redColor = Math.floor(Math.random() * 256);
    greenColor = Math.floor(Math.random() * 256);
    blueColor = Math.floor(Math.random() * 256);
    const rgb = `rgb(${redColor},${greenColor},${blueColor})`
    return rgb;
};

module.exports.rgbColor = rgbColor;