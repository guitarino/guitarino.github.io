var global_data = rootRequire('data/global.js');

var data = Object.assign({}, global_data, {
    url: '/portfolio/netgear/',
    title: 'Kirill Shestakov - Portfolio - NETGEAR Software Developer',
    content: (
        `<h1>NETGEAR Software Developer</h1>
        <h2>NETGEAR Mobile</h2>

        <p><a target="_blank" href="https://play.google.com/store/apps/details?id=com.sierrawireless.mhswatcher">NETGEAR Mobile</a> is a mobile app that allows users to control their NETGEAR Mobile Hotspots. Users of both old and new NETGEAR hotspots can control all of their settings such as SSID, Wi-Fi passwords and APN from just a single mobile app. My responsibilities included implementing the majority of front-end views, user interactions, as well as internal logic and data model of the app.</p>

        <div class="portfolio-mobile-grid"
            ><div>
                <video controls="controls">
                    <source src="/portfolio/netgear/video.webm" type="video/webm" />
                    <source src="/portfolio/netgear/video.mp4" type="video/mp4" />
                </video>
            </div
            ><div>
                <img class="withBorder" src="/portfolio/netgear/1.png" />
            </div
            ><div>
                <img class="withBorder" src="/portfolio/netgear/2.png" />
            </div
            ><div>
                <img class="withBorder" src="/portfolio/netgear/3.png" />
            </div
            ><div>
                <img class="withBorder" src="/portfolio/netgear/4.png" />
            </div
        ></div>`
    )
});

module.exports = data;