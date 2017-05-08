var global_data = rootRequire('data/global.js');

var data = Object.assign({}, global_data, {
    url: '/portfolio/capstone/',
    title: 'Kirill Shestakov - Portfolio - Medical Sensor Mobile App',
    content: (
        `<h1>Medical Sensor Mobile App</h1>

        <p>Medical Sensor System was created for <a target="_blank" href="http://www.biointeractivetech.com/">BioInteractive Technologies</a> as a proof-of-concept. My main responsibility was the development of a Hybrid mobile app for 3D visualization of the sensor data.</p>

        <div class="portfolio-mobile-grid"
            ><div>
                <img class="withBorder" src="/portfolio/capstone/6.gif" />
            </div
            ><div>
                <img src="/portfolio/capstone/1.png" />
            </div
            ><div>
                <img src="/portfolio/capstone/2.png" />
            </div
            ><div>
                <img src="/portfolio/capstone/3.png" />
            </div
            ><div>
                <img src="/portfolio/capstone/4.png" />
            </div
            ><div>
                <img src="/portfolio/capstone/5.png" />
            </div
        ></div>`
    )
});

module.exports = data;