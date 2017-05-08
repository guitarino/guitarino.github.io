var global_data = rootRequire('data/global.js');
var blogpost_data = rootRequire('data/blogpost.js');

var data = Object.assign({}, global_data, {
    url: '/blog/',
    title: 'Kirill Shestakov - Blog',
    content: (function() {
        var categories = blogpost_data.categories;
        return (
            categories.map(function(category) { return (
                `<h1>${category.name}</h1>
                <div class="blogposts${category.posts.length === 1 ? ' singlepost' : ''}"
                    ${category.posts.map(function(post) { return (
                        `><div class="blogpost">
                            <a class="link-root" href="${post.url}" is="router-anchor">
                                <div class="blogpost-title">${post.blogpost.title}</div>
                                <div class="blogpost-date">${post.blogpost.date}</div>
                            </a>
                        </div`
                    )}).join('')}
                ></div>`
            )}).join('')
        );
    })()
});

module.exports = data;