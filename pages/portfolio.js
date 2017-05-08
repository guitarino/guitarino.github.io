var global_data = rootRequire('data/global.js');

var data = Object.assign({}, global_data, {
    url: '/portfolio/',
    title: 'Kirill Shestakov - Portfolio',
    content: (
        `<div class="portfolio-content">
            <div class="portfolio-group">
                <div class="portfolio-title">
                    Profile
                </div>
                <div class="portfolio-description">
                    Creative and highly experienced Intermediate Level Web Developer with a diverse programming skillset and a strong ability to adapt to new technologies. Passionate about creating stellar user experiences while producing high quality maintainable code. Dependable team player and enthusiastic motivator.
                </div>
            </div>
            <div class="portfolio-group">
                <div class="portfolio-title">
                    Technologies
                </div>
                <div class="portfolio-description">
                    <span class="pt">HTML5</span>
                    <span class="pt">CSS3</span>
                    <span class="pt">JavaScript</span>
                    <span class="pt">jQuery</span>
                    <span class="pt">ThreeJS</span>
                    <span class="pt">Polymer</span>
                    <span class="pt">Web Components</span>
                    <span class="pt">NodeJS</span>
                    <span class="pt">Mocha</span>
                    <span class="pt">SVN</span>
                    <span class="pt">Git</span>
                    <span class="pt">ExpressJS</span>
                    <span class="pt">PHP</span>
                    <span class="pt">MySQL</span>
                    <span class="pt">Java</span>
                    <span class="pt">C#</span>
                    <span class="pt">C++</span>
                    <span class="pt">Python</span>
                </div>
            </div>
            <div class="portfolio-group">
                <div class="portfolio-title">
                    Skills
                </div>
                <div class="portfolio-description">
                    <ul>
                        <li>Cross-browser Web Development</li>
                        <li>Object-oriented programming and best practices</li>
                        <li>CSS3 transitions and animations</li>
                        <li>Creating interactive UI elements</li>
                        <li>Web Security and vulnerability prevention</li>
                        <li>Browser Rendering Pipeline and Performance Optimization</li>
                        <li>Continuous Integration</li>
                        <li>Mobile app development (Android and Hybrid)</li>
                    </ul>
                </div>
            </div>
            <div class="portfolio-section-separator"></div>
            <div class="portfolio-group">
                <div class="portfolio-title">
                    <span class="job-title"><a target="_blank" href="https://github.com/guitarino/">Open Source Developer</a></span>
                    <span class="job-date">Dec 2016 - present</span>
                </div>
                <div class="portfolio-description">
                    <ul>
                        <li>Technologies used: 
                            <strong>Git</strong>,
                            <strong>JavaScript</strong>,
                            <strong>NodeJS</strong>,
                            <strong>NPM</strong>,
                            <strong>Browserify</strong>,
                            <strong>UglifyJS</strong>
                        </li>
                        <li>Created JS libraries for reactive JavaScript, HTML and CSS</li>
                        <li>Created a library for reactive and customizable Web Components</li>
                        <li>Created a detailed documentation for one library</li>
                    </ul>
                </div>
            </div>
            <div class="portfolio-group">
                <div class="portfolio-title">
                    <span class="job-title"><a href="/portfolio/netgear/" is="router-anchor">NETGEAR Software Developer</a></span>
                    <span class="job-date">Sep 2014 - Dec 2016</span>
                </div>
                <div class="portfolio-description">
                    <ul>
                        <li>Technologies used: 
                            <strong>SVN</strong>,
                            <strong>HTML</strong>,
                            <strong>CSS</strong>,
                            <strong>JavaScript</strong>,
                            <strong>jQuery</strong>,
                            <strong>LESS</strong>,
                            <strong>Polymer</strong>
                        </li>
                        <li>Fixed bugs and refactored various Web UIs and a Hybrid App</li>
                        <li>Supervised and assisted co-op students, participated in code reviews</li>
                        <li>Initiated multiple web design and code improvements</li>
                        <li>Created performant and interactive UI components</li>
                        <li>Created an Android mobile app widget</li>
                        <li>Significantly contributed to meeting a project deadline</li>
                    </ul>
                </div>
                <a href="/portfolio/netgear/" is="router-anchor">
                    <div class="portfolio-seemore">See more</div>
                </a>
            </div>
            <div class="portfolio-group">
                <div class="portfolio-title">
                    <span class="job-title"><a href="/portfolio/capstone/" is="router-anchor">Medical Sensor Mobile App</a></span>
                    <span class="job-date">Jan 2016 - Apr 2016</span>
                </div>
                <div class="portfolio-description">
                    <ul>
                        <li>Technologies used: 
                            <strong>Git</strong>,
                            <strong>HTML</strong>,
                            <strong>CSS</strong>,
                            <strong>JavaScript</strong>,
                            <strong>ThreeJS</strong>,
                            <strong>jQuery</strong>
                        </li>
                        <li>In a group of 5, implemented a Sensor System and a Mobile App</li>
                        <li>Created a Hybrid App for 3D sensor visualization</li>
                        <li>Added multiple settings to enhance user experience</li>
                        <li>Documented the project and participated in project presentations</li>
                    </ul>
                </div>
                <a href="/portfolio/capstone/" is="router-anchor">
                    <div class="portfolio-seemore">See more</div>
                </a>
            </div>
            <div class="portfolio-group">
                <div class="portfolio-title">
                    <span class="job-title">Android Focus Stacking App</span>
                    <span class="job-date">Dec 2015</span>
                </div>
                <div class="portfolio-description">
                    <ul>
                        <li>Technologies used: 
                            <strong>Java</strong>
                        </li>
                        <li>Developed an Android App to take images with varied focal length</li>
                        <li>Created an evolution algorithm to align the images for focus stacking</li>
                        <li>Documented the project and participated in a presentation</li>
                    </ul>
                </div>
            </div>
            <div class="portfolio-group">
                <div class="portfolio-title">
                    <span class="job-title">High School Website</span>
                    <span class="job-date">Jan 2011</span>
                </div>
                <div class="portfolio-description">
                    <ul>
                        <li>Technologies used: 
                            <strong>HTML</strong>,
                            <strong>CSS</strong>,
                            <strong>JavaScript</strong>,
                            <strong>PHP</strong>,
                            <strong>MySQL</strong>
                        </li>
                        <li>Designed an intuitive web site for the students, parents and teachers</li>
                        <li>Created an online Content Management System for the web site</li>
                    </ul>
                </div>
            </div>
            <div class="portfolio-section-separator"></div>
            <div class="portfolio-group">
                <div class="portfolio-title">
                    Education
                </div>
                <div class="portfolio-description">
                    <div><strong>Bachelor of Applied Science</strong></div>
                    <div>Simon Fraser University</div>
                </div>
            </div>
            <div class="portfolio-group">
                <div class="portfolio-title">
                    Interests
                </div>
                <div class="portfolio-description">
                    <ul>
                        <li>Contributing to Open Source Software</li>
                        <li>Hiking, biking and camping</li>
                    </ul>
                </div>
            </div>
        </div>`
    )
});

module.exports = data;