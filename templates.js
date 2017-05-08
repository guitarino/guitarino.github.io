var fs = require('fs');

var templates = {};

fs.readdirSync( rootPath('templates/') ).forEach(function(templateFilename) {
    var template = rootRequire('templates/' + templateFilename);
    templates[template.name] = template.is;
});

module.exports = templates;