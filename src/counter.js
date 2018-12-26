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

const wc = function (args, fs) {
  const { options, files } = parseArgs(args);
  let file = fs.readFileSync(files, 'utf8');
  let delimeter = EMPTY_STRING;
  let count = EMPTY_STRING;

  if (hasLinesCountOption(options)) {
    count = countLines(file) - 1;
    delimeter = TAB;
  }
  if (hasWordsCountOption(options)) {
    count = count + delimeter + countWords(file);
    delimeter = TAB;
  }
  if (hasCharsCountOption(options)) {
    count = count + delimeter + countChars(file);
    delimeter = TAB;
  }
  count = count + delimeter + files;
  return count;
}

module.exports = {
  wc
}