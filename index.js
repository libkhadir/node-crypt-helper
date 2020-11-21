// import our two functions
const cryptHelper = require('./encrypt');
const decryptHelper = require('./decrypt');
// pull the mode, file and password from the command arguments.
const [ mode, file, password ] = process.argv.slice(2);
if (mode === 'encrypt') {
    cryptHelper.encrypt({ file, password });
}
if (mode === 'decrypt') {
    decryptHelper.decrypt({ file, password });
}