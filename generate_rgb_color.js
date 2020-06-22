const rgbColor = (alpha = 1) => {
    let rgb
    let redColor = Math.floor(Math.random() * 256);
    let greenColor = Math.floor(Math.random() * 256);
    let blueColor = Math.floor(Math.random() * 256);
    
    alpha == 1 ? rgb = `rgb(${redColor},${greenColor},${blueColor})` : rgb = `rgba(${redColor},${greenColor},${blueColor},${alpha})`
    
    return rgb;
};


module.exports.rgbColor = rgbColor;