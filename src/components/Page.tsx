import { h } from 'preact';
import Link from "@components/Link";

export default function Page() {
	const activeMenu: string = 'about';
	const PageComponent = 'div';
	return <div class="Page__Header">
		<div class="Page__HeaderBanner"></div>
		<div class="Page__HeaderOverlay"></div>
		<div class="Page__HeaderInfoContainer">
			<div class="Page__HeaderPhoto"></div>
			<div class="Page__HeaderName">Kirill Shestakov</div>
			<div class="Page__HeaderDescription">Web Developer in Vancouver</div>
		</div>
		<div class="Page__HeaderMenu">
			<Link href="/">
				<div class={`Page__MenuItem ${activeMenu === 'about' ? `Page__MenuItem--active` : ``}`}>About</div>
			</Link>
			<Link href="/blog/" is="router-anchor">
				<div class={`Page__MenuItem ${activeMenu === 'blog' ? `Page__MenuItem--active` : ``}`}>Blog</div>
			</Link>
			<Link href="/portfolio/" is="router-anchor">
				<div class={`Page__MenuItem ${activeMenu === 'portfolio' ? `Page__MenuItem--active` : ``}`}>Portfolio</div>
			</Link>
		</div>
		<div class="Page__Header">
			<PageComponent />
		</div>
		<div class="Page__Footer">
			© Copyright 2020 Kirill Shestakov
		</div>
	</div>;
}