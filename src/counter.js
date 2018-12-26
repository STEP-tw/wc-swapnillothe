const countLines = function (text) {
  return text.split('\n').length;
}

const wc = function (args, fs) {
  let file = fs.readFileSync(args[1]);
  let noOfLines = countLines(file);
  return `${noOfLines} ${args[1]}`
}

module.exports = {
  wc
}