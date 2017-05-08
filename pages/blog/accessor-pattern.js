var global_data = rootRequire('data/global.js');
var hlp = rootRequire('helpers.js');
var templates = rootRequire('templates.js');

var data = Object.assign({}, global_data, {
    url: '/blog/accessor-pattern/',

    template: templates.blogpost,

    blogpost: {
        category: 'Web Development',
        title: 'You Can Create Private Properties In JS',
        date: 'April 9, 2017',
        description: `In this article I describe a cross-browser, non-ES6 way to create private properties usable on object's prototype in JS.`,
        tags: [
            'JavaScript', 'ES6', 'Web Development', 'accessor pattern', 'private properties'
        ]
    },

    content: hlp.getContent.fromMarkdown(
        'blogposts/accessor-pattern.md'
    )
});

data.title = hlp.getTitle.fromBlogpost(
    data.blogpost
);

module.exports = data;