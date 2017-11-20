const myApp = require ('../src/words');

const {
  assert
} = require('chai').assert;

describe('words', () => {
  it('returns an object', () => {
    assert.isObject(myApp.words("A sentence"));
  });
  
});