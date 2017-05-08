var global_data = rootRequire('data/global.js');

var data = Object.assign({}, global_data, {
    url: '/',
    title: 'Kirill Shestakov - About',
    content: (
        `<h1>About me</h1>
        <p>My name is Kirill and I am a Web Developer living in Vancouver. I love the <a href="https://www.w3.org/wiki/Open_Web_Platform" target="_blank">Open Web</a> and enjoy creating Open Source projects. I actively participate in the developer community by helping others on Stack Overflow and Reddit and by writing articles about Web Development. Feel free to check out my <a href="/blog/" is="router-anchor">Blog</a> and <a href="/portfolio/" is="router-anchor">Portfolio</a>. You can find me on:</p>
        <div class="external-profiles"
            ><div><a target="_blank" href="https://github.com/guitarino/"><span class="external-profile-icon github"></span><span class="external-profile-name">GitHub</span></a></div
            ><div><a target="_blank" href="https://linkedin.com/in/kirill-shestakov-54902b98/"><span class="external-profile-icon linkedin"></span><span class="external-profile-name">LinkedIn</span></a></div
            ><div><a target="_blank" href="https://medium.com/@weberino/"><span class="external-profile-icon medium"></span><span class="external-profile-name">Medium</span></a></div
            ><div><a target="_blank" href="https://stackoverflow.com/users/7842231/guitarino"><span class="external-profile-icon stackoverflow"></span><span class="external-profile-name">Stack Overflow</span></a></div
            ><div><a target="_blank" href="https://dev.to/guitarino/"><span class="external-profile-icon devto"></span><span class="external-profile-name">Dev.to</span></a></div
        ></div>`
    )
});

module.exports = data;