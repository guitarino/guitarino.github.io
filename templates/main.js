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
                <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-icon-57x57.png">
                <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/apple-icon-60x60.png">
                <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/apple-icon-72x72.png">
                <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/apple-icon-76x76.png">
                <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon/apple-icon-114x114.png">
                <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon/apple-icon-120x120.png">
                <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-icon-144x144.png">
                <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-icon-152x152.png">
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-icon-180x180.png">
                <link rel="icon" type="image/png" sizes="192x192"  href="/images/favicon/android-icon-192x192.png">
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png">
                <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png">
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png">
                <link rel="manifest" href="/manifest.json">
                <meta name="msapplication-TileColor" content="#383548">
                <meta name="msapplication-TileImage" content="/images/favicon/ms-icon-144x144.png">
                <meta name="theme-color" content="#383548">
                <meta name="author" content="${data.me.name}">
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
                ${templates.analytics()}
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
