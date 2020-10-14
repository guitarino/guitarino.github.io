import Link from '@components/Link';
import { h } from 'preact';
import '@styles/About.scss';

export const title = 'Kirill Shestakov - About';

export const menu = 'about';

export default function About() {
	return <div class="About">
		<h1>About me</h1>
		<p>
			My name is Kirill and I am a Web Developer living in Vancouver.
			I love the <Link href="https://www.w3.org/wiki/Open_Web_Platform">Open Web</Link> and
			enjoy creating Open Source projects. I actively participate in the developer community by
			helping others on Stack Overflow and Reddit and by writing articles about Web Development.
			Feel free to check out my <Link href="/blog/">Blog</Link> and <Link href="/portfolio/">Portfolio</Link>.
			You can find me on:
		</p>
		<div class="About__Profiles">
			<Link class="About__ProfileContainer" href="https://github.com/guitarino/">
				<span class="About__ProfileIcon About__ProfileIcon--github"></span>
				<span class="About__ProfileName">GitHub</span>
			</Link>
			<Link class="About__ProfileContainer" href="https://linkedin.com/in/kirill-shestakov-54902b98/">
				<span class="About__ProfileIcon About__ProfileIcon--linkedin"></span>
				<span class="About__ProfileName">LinkedIn</span>
			</Link>
			<Link class="About__ProfileContainer" href="https://medium.com/@weberino/">
				<span class="About__ProfileIcon About__ProfileIcon--medium"></span>
				<span class="About__ProfileName">Medium</span>
			</Link>
			<Link class="About__ProfileContainer" href="https://stackoverflow.com/users/7842231/guitarino">
				<span class="About__ProfileIcon About__ProfileIcon--stackoverflow"></span>
				<span class="About__ProfileName">Stack Overflow</span>
			</Link>
			<Link class="About__ProfileContainer" href="https://dev.to/guitarino/">
				<span class="About__ProfileIcon About__ProfileIcon--devto"></span>
				<span class="About__ProfileName">Dev.to</span>
			</Link>
		</div>
	</div>;
}