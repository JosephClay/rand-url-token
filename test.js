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