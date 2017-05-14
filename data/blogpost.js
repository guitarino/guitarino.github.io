var fs = require('fs');

var sortPosts = function(post1, post2) {
    return new Date(post2.blogpost.date) - new Date(post1.blogpost.date);
};

var categoriesObj = {};
var categories = [];

fs.readdirSync( rootPath('pages/blog/') ).forEach(function(fn) {
    var blogpost = rootRequire('pages/blog/' + fn);
    var category = blogpost.blogpost.category;
    if(!(category in categoriesObj)) {
        categoriesObj[category] = {
            name: category,
            posts: []
        };
    }
    categoriesObj[category].posts.push(blogpost);
});

for(var category in categoriesObj) {
    categories.push(categoriesObj[category]);
}

categories.forEach(function(category) {
    category.posts.sort(sortPosts);
});

module.exports = {
    categories: categories
};