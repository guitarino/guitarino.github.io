var main_nav_data = rootRequire('data/main-nav.js');

module.exports = {
    name: 'header',
    is: function(data) {
        return (
            `<div class="header${data.url !== '/' ? ' shorter' : ''}" id="header" router-type="attribute-change"
                ><div class="banner"></div
                ><div class="overlay"></div
                ><div class="info-container">
                    <div class="photo"></div>
                    <div class="name">${data.me.name}</div>
                    <div class="description">${data.me.description}</div>
                </div
                ><div class="menu">
                    ${ main_nav_data.map(function(nav) { return (
                        `<a href="${nav.url}" is="router-anchor">
                            <div
                                class="menu-item${
                                    data.url.indexOf(nav.url) === 0 && (
                                        nav.url !== '/' ||
                                        data.url === '/'
                                    ) ? (
                                        ' active'
                                    ) : ''
                                }"
                                id="${nav.id}"
                                router-type="basic"
                            >${nav.name}</div>
                        </a>`
                    )}).join('') }
                </div
            ></div>`
        );
    }
};