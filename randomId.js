const randomId = () => {
    const numbersLetters = '0123456789abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let randId = '';
    let randIndex;
    for(let i = 0; i < 6; i++){
        randIndex = Math.floor(Math.random() * numbersLetters.length);
        randId += numbersLetters[randIndex]
    }
    return randId;
}

module.exports.randId = randomId;