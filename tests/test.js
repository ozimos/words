const myApp = require ('../src/words');

const {
  assert
} = require('chai').assert;

describe('words', () => {
  it('returns an object', () => {
    assert.isObject(myApp.words("A sentence"));
  });
  it('returns a correct object', () => {
    assert.equal(myApp.words("olly olly in come free"),{olly: 2, in: 1, come: 1, free: 1},);
  });
  
});