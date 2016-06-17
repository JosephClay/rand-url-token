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

const rInvalidCharacters = /[^a-zA-Z0-9\-\_]/g;
module.exports.valid = (param = '') => {
	// check if the param is a string
	if (typeof param !== 'string') { return false; }

	// check for empty strings
	let str = param.trim();
	if (!str.length) { return false; }

	return str === str.replace(rInvalidCharacters, '');
};