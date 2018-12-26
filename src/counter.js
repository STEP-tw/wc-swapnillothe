const countLines = function (text) {
  return text.split('\n').length;
}

const countChars = (text)=> text.length;

const wc = function (args, fs) {
  let file = fs.readFileSync(args[1],'utf8');
  let count = countLines(file)-1;
  if(args[0]=='-c'){
    count = countChars(file);
  }
  return `${count} ${args[1]}`
}

module.exports = {
  wc
}