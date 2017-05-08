global.__base = __dirname + '/';

global.__output = __dirname + '/output';

global.rootPath = function(name) {
    return __base + name;
};

global.rootRequire = function(name) {
    return require(__base + name);
};