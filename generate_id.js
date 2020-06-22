const generateId = (n = 6) => {
    const str = '0123456789abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let id = '';
    for (let i = 0; i < n; i++) {
        let index = Math.floor(Math.random() * str.length);
        id += str[index]
    }
    return id
}

module.exports.generateId = generateId;