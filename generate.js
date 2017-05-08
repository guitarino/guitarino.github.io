require('./globals.js');
var fsPath = require('fs-path');

var outputFolder = __output + '/';

var outputFolderDeleted = new Promise(function(resolve) {
    fsPath.remove(outputFolder, function(err) {
        resolve(err ? false : true);
    });
});

var rawFolderCopied = outputFolderDeleted.then(function(resolve) {
    return new Promise(function(resolve) {
        fsPath.copy(rootPath('raw/'), outputFolder, function(err) {
            resolve(err ? false : true);
        });
    });
});

var hlp = rootRequire('helpers.js');

var getAllPages = rawFolderCopied.then(function() {
    return new Promise(function(resolve) {
        fsPath.find( rootPath('pages/'), function(err, list) {
            resolve(list.files);
        });
    });
});

getAllPages.then(function(pages) {
    pages.forEach(function(pageName) {
        var page = require(pageName);

        if(!(page.content instanceof Promise)) {
            page.content = Promise.resolve( page.content );
        }

        page.content.then(function(content) {
            page.content = content;
            var outputFile = hlp.getOutputName(page.url);
            var html = page.template(page);
            fsPath.writeFile(outputFile, html);
        })
    });
});