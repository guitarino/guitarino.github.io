module.exports = {
    name: 'blogpost',
    is: function(data) {
        var templates = rootRequire('templates.js');

        return templates.main(Object.assign({}, data, {
            content: (
                `<h1>${data.blogpost.title}</h1>
                ${data.content}`
            )
        }));
    }
};