var exec = require('cordova/exec');

module.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'HelloCordova', 'coolMethod', [arg0]);
};

module.exports.add = function (arg0,success, error) {
    exec(success,error,'HelloCordova','add', [arg0]);
}

