const DASH = '-';

const createParsedArgs = function(options,files){
  return {options,files}
}

const parseArgs = function (args) {
  let options = args.filter(arg => arg.startsWith(DASH));
  let files = args.filter(arg => !(arg.startsWith(DASH)));
  options = options.join('');
  if(options.length==0) options.push('lcw');
  return createParsedArgs(options,files);
}

module.exports = {
  parseArgs
}