const {
  parseArgs
} = require('../src/parser.js');

const {
  SPACE,
  EMPTY_STRING,
  countChars,
  countLines,
  countWords,
  hasCharsCountOption,
  hasLinesCountOption,
  hasWordsCountOption
} = require('../src/countUtil.js')

const wc = function (args, fs) {
  const { options, files } = parseArgs(args);
  let file = fs.readFileSync(files, 'utf8');
  let delimeter = EMPTY_STRING;
  let count = EMPTY_STRING;

  if (hasLinesCountOption(options)) {
    count = countLines(file) - 1;
    delimeter = SPACE;
  }
  if (hasWordsCountOption(options)) {
    count = count + delimeter + countWords(file);
    delimeter = SPACE;
  }
  if (hasCharsCountOption(options)) {
    count = count + delimeter + countChars(file);
    delimeter = SPACE;
  }
  count = count + delimeter + files;
  return count;
}

module.exports = {
  wc
}