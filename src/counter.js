const {
  parseArgs
} = require('../src/parser.js');

const {
  TAB,
  EMPTY_STRING,
  countChars,
  countLines,
  countWords,
  hasCharsCountOption,
  hasLinesCountOption,
  hasWordsCountOption
} = require('../src/countUtil.js')

const joins = function (element1, element2, delimeter) {
  return [element1, delimeter, element2].join('');
}

const wcForSingleFile = function (args, fs) {
  const { options, files } = parseArgs(args);
  let singleFile = files[0];
  let fileContent = fs.readFileSync(singleFile, 'utf8');
  let count = [];

  if (hasLinesCountOption(options)) {
    count.push(countLines(fileContent) - 1);
  }
  if (hasWordsCountOption(options)) {
    count.push(countWords(fileContent));
  }
  if (hasCharsCountOption(options)) {
    count.push(countChars(fileContent));
  }
  count = joinCounts(count, files);
  return count;
}

const joinCounts = function (counts, file) {
  let joinedCounts = counts.concat(file);
  return joinedCounts.join(TAB);
}


const wc = function (args, fs) {
  return wcForSingleFile(args, fs)
}

module.exports = {
  wc
}