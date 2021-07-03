const myApp = require ('../src/words.js');

const {
  assert
} = require('chai').assert;

describe('words', function() {
  it('returns an object', function() {
    assert.isObject(myApp.words("A sentence"));
  });
  it('returns a correct object', function() {
    assert.equal(myApp.words("olly olly in come free"),{olly: 2, in: 1, come: 1, free: 1},);
  });
});