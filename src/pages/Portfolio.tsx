import Link from '@components/Link';
import { h } from 'preact';
import "@styles/Portfolio.scss";

export const title = 'Kirill Shestakov - Portfolio';

export const menu = 'portfolio';

export default function Portfolio(props: { class?: string }) {
	return <div class={`Portfolio ${props.class || ``}`}>
		<div class="Portfolio__Group">
			<div class="Portfolio__Title">
				Profile
			</div>
			<div class="Portfolio__Description">
				Creative and highly experienced Intermediate Level Web Developer with a diverse programming skillset
				and a strong ability to adapt to new technologies. Passionate about creating stellar user experiences
				while producing high quality maintainable code. Dependable team player and enthusiastic motivator.
			</div>
		</div>
		<div class="Portfolio__Group">
			<div class="Portfolio__Title">
				Technologies
			</div>
			<div class="Portfolio__Description">
				<span class="Portfolio__Point">HTML5</span>
				<span class="Portfolio__Point">CSS3</span>
				<span class="Portfolio__Point">JavaScript</span>
				<span class="Portfolio__Point">jQuery</span>
				<span class="Portfolio__Point">ThreeJS</span>
				<span class="Portfolio__Point">Polymer</span>
				<span class="Portfolio__Point">Web Components</span>
				<span class="Portfolio__Point">NodeJS</span>
				<span class="Portfolio__Point">Mocha</span>
				<span class="Portfolio__Point">SVN</span>
				<span class="Portfolio__Point">Git</span>
				<span class="Portfolio__Point">ExpressJS</span>
				<span class="Portfolio__Point">PHP</span>
				<span class="Portfolio__Point">MySQL</span>
				<span class="Portfolio__Point">Java</span>
				<span class="Portfolio__Point">C#</span>
				<span class="Portfolio__Point">C++</span>
				<span class="Portfolio__Point">Python</span>
			</div>
		</div>
		<div class="Portfolio__Group">
			<div class="Portfolio__Title">
				Skills
			</div>
			<div class="Portfolio__Description">
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
		<div class="Portfolio__Separator"></div>
		<div class="Portfolio__Group">
			<div class="Portfolio__Title">
				<span class="Portfolio__JobTitle"><Link href="https://github.com/guitarino/">Open Source Developer</Link></span>
				<span class="Portfolio__JobDate">Dec 2016 - present</span>
			</div>
			<div class="Portfolio__Description">
				<ul>
					<li>
						Technologies used: <strong>Git</strong>, <strong>JavaScript</strong>,{' '}
						<strong>NodeJS</strong>, <strong>NPM</strong>,{' '}
						<strong>Browserify</strong>, <strong>UglifyJS</strong>{' '}
					</li>
					<li>Created JS libraries for reactive JavaScript, HTML and CSS</li>
					<li>Created a library for reactive and customizable Web Components</li>
					<li>Created a detailed documentation for one library</li>
				</ul>
			</div>
		</div>
		<div class="Portfolio__Group">
			<div class="Portfolio__Title">
				<span class="Portfolio__JobTitle"><Link href="/portfolio/netgear/">NETGEAR Software Developer</Link></span>
				<span class="Portfolio__JobDate">Sep 2014 - Dec 2016</span>
			</div>
			<div class="Portfolio__Description">
				<ul>
					<li>
						Technologies used: <strong>SVN</strong>, <strong>HTML</strong>,{' '}
						<strong>CSS</strong>, <strong>JavaScript</strong>, <strong>jQuery</strong>,{' '}
						<strong>LESS</strong>, <strong>Polymer</strong>
					</li>
					<li>Fixed bugs and refactored various Web UIs and a Hybrid App</li>
					<li>Supervised and assisted co-op students, participated in code reviews</li>
					<li>Initiated multiple web design and code improvements</li>
					<li>Created performant and interactive UI components</li>
					<li>Created an Android mobile app widget</li>
					<li>Significantly contributed to meeting a project deadline</li>
				</ul>
			</div>
			<Link href="/portfolio/netgear/">
				<div class="Portfolio__SeeMore">See more</div>
			</Link>
		</div>
		<div class="Portfolio__Group">
			<div class="Portfolio__Title">
				<span class="Portfolio__JobTitle"><Link href="/portfolio/capstone/">Medical Sensor Mobile App</Link></span>
				<span class="Portfolio__JobDate">Jan 2016 - Apr 2016</span>
			</div>
			<div class="Portfolio__Description">
				<ul>
					<li>
						Technologies used: <strong>Git</strong>, <strong>HTML</strong>,{' '}
						<strong>CSS</strong>, <strong>JavaScript</strong>,{' '}
						<strong>ThreeJS</strong>, <strong>jQuery</strong>
					</li>
					<li>In a group of 5, implemented a Sensor System and a Mobile App</li>
					<li>Created a Hybrid App for 3D sensor visualization</li>
					<li>Added multiple settings to enhance user experience</li>
					<li>Documented the project and participated in project presentations</li>
				</ul>
			</div>
			<Link href="/portfolio/capstone/">
				<div class="Portfolio__SeeMore">See more</div>
			</Link>
		</div>
		<div class="Portfolio__Group">
			<div class="Portfolio__Title">
				<span class="Portfolio__JobTitle">Android Focus Stacking App</span>
				<span class="Portfolio__JobDate">Dec 2015</span>
			</div>
			<div class="Portfolio__Description">
				<ul>
					<li>
						Technologies used: <strong>Java</strong>
					</li>
					<li>Developed an Android App to take images with varied focal length</li>
					<li>Created an evolution algorithm to align the images for focus stacking</li>
					<li>Documented the project and participated in a presentation</li>
				</ul>
			</div>
		</div>
		<div class="Portfolio__Group">
			<div class="Portfolio__Title">
				<span class="Portfolio__JobTitle">High School Website</span>
				<span class="Portfolio__JobDate">Jan 2011</span>
			</div>
			<div class="Portfolio__Description">
				<ul>
					<li>
						Technologies used: <strong>HTML</strong>, <strong>CSS</strong>,{' '}
						<strong>JavaScript</strong>, <strong>PHP</strong>, <strong>MySQL</strong>
					</li>
					<li>Designed an intuitive web site for the students, parents and teachers</li>
					<li>Created an online Content Management System for the web site</li>
				</ul>
			</div>
		</div>
		<div class="Portfolio__Separator"></div>
		<div class="Portfolio__Group">
			<div class="Portfolio__Title">
				Education
			</div>
			<div class="Portfolio__Description">
				<div><strong>Bachelor of Applied Science</strong></div>
				<div>Simon Fraser University</div>
			</div>
		</div>
		<div class="Portfolio__Group">
			<div class="Portfolio__Title">
				Interests
			</div>
			<div class="Portfolio__Description">
				<ul>
					<li>Contributing to Open Source Software</li>
					<li>Hiking, biking and camping</li>
				</ul>
			</div>
		</div>
	</div>;
}