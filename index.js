const chars = require('./base64');
const maxIndex = chars.length - 1;
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomChar = () => chars.charAt(random(0, maxIndex));

module.exports = (length = 8) => {
    let id = '';
    while (length--) {
        id += randomChar();
    }
    return id;
};
