const assert = require('assert');
const { wc } = require('../src/counter.js');

describe('wc', function () {

  const file = { 'numbers.txt': '1\n2\n3\n4\n5\n6\n7\n8\n8\n10' };

  const fs = {
    readFileSync: (fileName) => file[fileName],
    existSync: (fileName) => file.hasOwnProperty(fileName)
  }

  it('should return count of line and file name', function () {
    let args = ['-l', 'numbers.txt'];
    let actualOutput = wc(args, fs);
    let expectedOutput = '10 numbers.txt';
    assert.deepEqual(actualOutput, expectedOutput);
  });

});