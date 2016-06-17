const test = require('tape');
const isString = require('lodash/isString');
const token = require('./index');

test('token', assert => {
    assert.ok(isString(token()), 'should be a string');
    assert.notEqual(token(), token(), 'two should not equal eachother');
    assert.equal(token().length, 8, 'should default to a length of 8');
    assert.equal(token(12).length, 12, 'should be able to create longer tokens');
    assert.equal(token(4).length, 4, 'should be able to create shorter tokens');

    assert.end();
});

test('valid', assert => {
	// primitives that are not strings should all be invalid
	assert.notOk(token.valid(null), 'null');
	assert.notOk(token.valid(undefined), 'undefined');
	assert.notOk(token.valid(0), 'number');
	assert.notOk(token.valid(NaN), 'NaN');
	assert.notOk(token.valid(true), 'Boolean');
	assert.notOk(token.valid([]), 'Array');
	assert.notOk(token.valid({}), 'Object');
	assert.notOk(token.valid(() => {}), 'function');

	assert.notOk(token.valid(''), 'empty string should be invalid');
	assert.notOk(token.valid('     '), 'padded empty string should be invalid');
	assert.notOk(token.valid(' \n  \n  '), 'empty string with new lines should be invalid');

	assert.notOk(token.valid(';zz;'), 'token with invalid characters should fail');
	assert.notOk(token.valid('   ;zz;   '), 'passed token with invalid characters should fail');

	assert.ok(token.valid('aZ-_09'), 'valid token should be valid');

	assert.end();
});