module.exports = {
    name: 'main',
    is: function(data) {
        var templates = rootRequire('templates.js');

        return (
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title id="doc-title" router-type="basic">${data.title}</title>
                <meta name="author" content="${data.me.name}">
                <meta name="theme-color" content="#383548">
                <meta name="routerAnchor:href" content="${data.url}">
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
                <link rel="stylesheet" type="text/css" href="/styles/style.css">
                <link rel="stylesheet" type="text/css" href="/styles/monokai-sublime.css">
                <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css?family=Pridi:300" rel="stylesheet">
                <script src="/scripts/document-register-element.js"></script>
                <script src="/scripts/components/RouterAnchor.js"></script>
                <script src="/scripts/RouterAnchor-types.js"></script>
                <script src="/scripts/polyfills.js"></script>
                <script src="/scripts/main.js"></script>
            </head>
            <body class="home">
                ${templates.header(data)}
                <div id="main-page-content" router-type="fade-child">
                    <div class="content">
                        ${data.content}
                    </div>
                </div>
                ${templates.footer(data)}
            </body>
            </html>`
        );
    }
}
