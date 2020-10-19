import Link from '@components/Link';
import { h } from 'preact';
import "@styles/Portfolio.scss";
import asset1 from "@assets/portfolio/securebook/1.png";
import asset2 from "@assets/portfolio/securebook/2.png";
import asset3 from "@assets/portfolio/securebook/3.png";
import asset4 from "@assets/portfolio/securebook/4.png";
import asset5 from "@assets/portfolio/securebook/5.png";
import asset6 from "@assets/portfolio/securebook/6.png";
import asset7 from "@assets/portfolio/securebook/7.png";
import asset8 from "@assets/portfolio/securebook/8.png";
import asset9 from "@assets/portfolio/securebook/9.png";
import asset10 from "@assets/portfolio/securebook/10.png";
import asset11 from "@assets/portfolio/securebook/11.png";
import asset12 from "@assets/portfolio/securebook/12.png";
import asset13 from "@assets/portfolio/securebook/13.png";
import asset14 from "@assets/portfolio/securebook/14.png";
import asset15 from "@assets/portfolio/securebook/15.png";
import asset16 from "@assets/portfolio/securebook/16.png";
import asset17 from "@assets/portfolio/securebook/17.png";
import asset18 from "@assets/portfolio/securebook/18.png";
import PortfolioGrid from '@components/PortfolioGrid';

export const title = 'Kirill Shestakov - Portfolio - Secure Book: Private Note-taking Web App';

export const menu = 'portfolio';

export default function PortfolioSecureBook(props: { class?: string }) {
	return <div class={`PortfolioSecureBook ${props.class || ``}`}>
		<h1>Secure Book: Private Note-taking Web App</h1>
		<p>
			<Link href="https://securebook.org/">Secure Book</Link> is a free private note-taking web application.
			It provides convenient <strong>WYSIWYG</strong> note editing and encrypted storage using <strong>aes-256</strong> standard.
			I created this application on my own, by using a React-like
			library <Link href="https://preactjs.com/">Preact</Link>, <Link href="https://prosemirror.net/">ProseMirror</Link> for content editing,
			Web Workers, unit tests, and other modern web technologies. In addition, I created
			a <Link href="https://github.com/securebook/securebook.github.io">convenient documentation</Link>, explaining the architecture
			and how to develop the application. <strong>Oath 2.0</strong> and <Link href="https://about.gitlab.com/">GitLab API</Link> is
			used for authentication and data storage.
		</p>
		<PortfolioGrid
			assets={[
				{src: asset1, width: 'full'},
				{src: asset2},
				{src: asset3},
				{src: asset4},
				{src: asset5},
				{src: asset6, width: 'full'},
				{src: asset7},
				{src: asset8},
				{src: asset9},
				{src: asset10},
				{src: asset11},
				{src: asset12},
				{src: asset13},
				{src: asset14},
				{src: asset15},
				{src: asset16},
				{src: asset17},
				{src: asset18},
			]}
		/>
	</div>;
}