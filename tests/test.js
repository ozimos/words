const words = require ('../src/words');

const {
  assert
} = require('chai').assert;

describe('words', () => {
  it('returns and object', () => {
    assert.isObject(words("A sentence"));
  });
  
  
});