var fs = require('fs');
var hljs = require('highlight.js');
var global_data = rootRequire('data/global.js');

// Using highlight.js as a syntax highlighter
var md = require('markdown-it')({
    highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                    hljs.highlight(lang, str, true).value +
                    '</code></pre>';
            } catch (__) {}
        }

        return '<pre><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
});

// This changes the main renderer for links
// such that global links open in new window
// and local links go through RouterAnchor
(function() {
    var old_render = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };

    md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        if(hlp.isLinkGlobal(tokens[idx].attrs[0][1])) {
            tokens[idx].attrPush(['target', '_blank']);
        }
        else {
            tokens[idx].attrPush(['is', 'router-anchor']);
        }
        return old_render(tokens, idx, options, env, self);
    };
})();

var hlp = {
    isLinkGlobal: function(link) {
        var global = /https?:\/\//i;
        return global.test(link);
    },
    md2html: function(markdown) {
        return md.render(markdown);
    },
    getTitle: {
        fromBlogpost: function(blogpost) {
            return blogpost.title + ' - ' + global_data.me.name;
        }
    },
    getContent: {
        fromMarkdown: function(content_url) {
            return new Promise(function(resolve, reject) {
                fs.readFile(__base + content_url, 'utf8', function(err, content) {
                    if(err) {
                        reject(err);
                    } else {
                        content = hlp.md2html(content);
                        resolve(content)
                    }
                })
            })
        }
    },
    getOutputName: function(url) {
        return (
            url[url.length-1] === '/' ?
            __output + url + 'index.html' :
            __output + url
        );
    }
};

module.exports = hlp;