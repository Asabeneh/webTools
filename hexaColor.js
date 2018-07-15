const hexaColor = function() {
    let numbersLetters = '0123456789abcdef'.split('');
    let hexaNumbers = '';
    let randIndex;
    for (let i = 0; i < 6; i++) {
    randIndex = Math.floor(Math.random() * numbersLetters.length);
    hexaNumbers += numbersLetters[randIndex];
    }
    return '#' + hexaNumbers;
};

module.exports.hexaColor = hexaColor;