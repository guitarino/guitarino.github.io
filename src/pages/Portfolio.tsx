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
				Creative and highly experienced Full-Stack Software Engineer with a diverse programming skill set and
				a strong ability to adapt to new technologies. Passionate about creating stellar user experiences
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
				<span class="Portfolio__Point">React</span>
				<span class="Portfolio__Point">Redux</span>
				<span class="Portfolio__Point">Node.js</span>
				<span class="Portfolio__Point">Electron.js</span>
				<span class="Portfolio__Point">Webpack</span>
				<span class="Portfolio__Point">Babel</span>
				<span class="Portfolio__Point">Java</span>
				<span class="Portfolio__Point">C#</span>
				<span class="Portfolio__Point">.NET Framework</span>
				<span class="Portfolio__Point">SQL</span>
				<span class="Portfolio__Point">Git</span>
			</div>
		</div>
		<div class="Portfolio__Group">
			<div class="Portfolio__Title">
				Skills
			</div>
			<div class="Portfolio__Description">
				<ul>
					<li>Cross-browser Full-Stack Software Development</li>
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
				<span class="Portfolio__JobTitle"><Link href="/portfolio/securebook/">Secure Book</Link></span>
				<span class="Portfolio__JobDate">May 2020 - present</span>
			</div>
			<div class="Portfolio__Description">
				<ul>
					<li>Created a PC, tablet and mobile friendly Web App for private note-taking</li>
					<li>Used <strong>React</strong>-like library, ProseMirror for content editing, Web Workers and other modern technologies</li>
					<li>Developed and designed visual components and business logic for the entire Web Application</li>
					<li>Built dynamic complex components, including auto-complete and <strong>WYSIWYG</strong> content editing</li>
					<li>Created developer documentation that describes architecture</li>
				</ul>
			</div>
			<Link href="/portfolio/securebook/">
				<div class="Portfolio__SeeMore">See more</div>
			</Link>
		</div>
		<div class="Portfolio__Group">
			<div class="Portfolio__Title">
				<span class="Portfolio__JobTitle"><Link href="/portfolio/xmatters/">UI Software Developer</Link></span>
				<span class="Portfolio__JobPlace">xMatters, Inc.</span>
				<span class="Portfolio__JobDate">Nov 2018 - Nov 2019</span>
			</div>
			<div class="Portfolio__Description">
				<ul>
					<li>Built front-end for the product's cutting edge features using <strong>React</strong>, <strong>Redux</strong> and <strong>SASS</strong></li>
					<li>Created dynamic interfaces, including flow designer, lists, content editing and drag &amp; drop</li>
					<li>Worked with UX team and product leads to establish requirements, and with QA engineers to test</li>
					<li>Performed task estimation, code reviews, feature demos, and wrote documentation</li>
					<li>Consistently improved code quality and maintainability of business logic and component structure</li>
					<li>Was praised by a customer for successfully tackling an intricate bug in legacy <strong>Java</strong> code</li>
					<li>Helped colleagues with UI development tasks and on-boarding of multiple new team members</li>
				</ul>
			</div>
			<Link href="/portfolio/xmatters/">
				<div class="Portfolio__SeeMore">See more</div>
			</Link>
		</div>
		<div class="Portfolio__Group">
			<div class="Portfolio__Title">
				<span class="Portfolio__JobTitle"><Link href="/portfolio/collabware/">Full-Stack Software Engineer</Link></span>
				<span class="Portfolio__JobPlace">Collabware Inc.</span>
				<span class="Portfolio__JobDate">May 2017 - Sep 2018</span>
			</div>
			<div class="Portfolio__Description">
				<ul>
					<li>Developed an enterprise Single Page Application with <strong>React</strong>, <strong>Redux</strong> and <strong>SASS</strong></li>
					<li>Created business logic for a cloud-based <strong>C#</strong> and <strong>.NET Web App</strong></li>
					<li>Developed interactive, screen-size adaptive, reusable and keyboard accessible UI components</li>
					<li>Contributed to efficient build and development process with <strong>Webpack</strong> and <strong>Babel</strong></li>
					<li>Developed a multi-process <strong>Electron.js</strong> desktop application with <strong>React</strong>, <strong>Node</strong>, <strong>Webpack</strong> and <strong>SASS</strong></li>
					<li>Worked with product leads and senior developers for requirement gathering, solutioning and architecture</li>
					<li>Played a consistent role of a mentor and a dependable team player eager to take on more responsibilities</li>
				</ul>
			</div>
			<Link href="/portfolio/collabware/">
				<div class="Portfolio__SeeMore">See more</div>
			</Link>
		</div>
		<div class="Portfolio__Group">
			<div class="Portfolio__Title">
				<span class="Portfolio__JobTitle"><Link href="/portfolio/netgear/">Software Developer</Link></span>
				<span class="Portfolio__JobPlace">NETGEAR Inc.</span>
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