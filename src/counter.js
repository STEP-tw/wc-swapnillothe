const countLines = function (text) {
  return text.split('\n').length;
}

const countChars = (text) => text.length;

const countWords = function (text) {
  let textWithoutNewLine = text.replace(/\n/g, ' ');
  return textWithoutNewLine.split(' ').length;
}

const wc = function (args, fs) {
  let file = fs.readFileSync(args[1], 'utf8');
  let count = countLines(file) - 1;
  if (args[0] == '-c') {
    count = countChars(file);
  }
  if (args[0] == '-w') {
    count = countWords(file);
  }
  return `${count} ${args[1]}`
}

module.exports = {
  wc
}