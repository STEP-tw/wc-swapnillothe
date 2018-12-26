const assert = require('assert');
const { wc } = require('../src/counter.js');

describe('wc', function () {
  let fs;

  beforeEach(() => {
    fs = {
      readFileSync: (fileName) => file[fileName],
      existSync: (fileName) => file.hasOwnProperty(fileName)
    }
    const file = { 'numbers.txt': '1\n2\n3\n4\n5\n6\n7\n8\n8\n10' };
  })

  it('should return count of line and file name', function () {
    let args = ['-l', 'numbers.txt'];
    let actualOutput = wc(args, fs);
    let expectedOutput = '9 numbers.txt';
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should return count of characters and file name when option -c is specified', function () {
    let args = ['-c', 'numbers.txt'];
    let actualOutput = wc(args, fs);
    let expectedOutput = '20 numbers.txt';
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should return count of word and file name when option -w is speci', function () {
    let args = ['-w', 'numbers.txt'];
    let actualOutput = wc(args, fs);
    let expectedOutput = '10 numbers.txt';
    assert.deepEqual(actualOutput, expectedOutput);
  });
});