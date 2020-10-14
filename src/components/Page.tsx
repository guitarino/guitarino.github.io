import { h, AnyComponent } from 'preact';
import Link from "@components/Link";
import '@styles/Page.scss';

type PageProps = {
	activeMenu: string,
	pageComponent: AnyComponent,
	isLoading: boolean,
};

export default function Page({ activeMenu, pageComponent, isLoading }: PageProps) {
	const PageComponent: any = pageComponent;
	return <div class="Page">
		<div class="Page__Header">
			<div class="Page__HeaderBanner"></div>
			<div class="Page__HeaderOverlay"></div>
			<div class="Page__HeaderInfoContainer">
				<div class="Page__HeaderPhoto"></div>
				<div class="Page__HeaderName">Kirill Shestakov</div>
				<div class="Page__HeaderDescription">Web Developer in Vancouver</div>
			</div>
			<nav class="Page__HeaderMenu">
				<Link href="/">
					<div class={`Page__MenuItem ${activeMenu === 'about' ? `Page__MenuItem--active` : ``}`}>About</div>
				</Link>
				<Link href="/blog/" is="router-anchor">
					<div class={`Page__MenuItem ${activeMenu === 'blog' ? `Page__MenuItem--active` : ``}`}>Blog</div>
				</Link>
				<Link href="/portfolio/" is="router-anchor">
					<div class={`Page__MenuItem ${activeMenu === 'portfolio' ? `Page__MenuItem--active` : ``}`}>Portfolio</div>
				</Link>
			</nav>
		</div>
		<div class="Page__Content">
			<PageComponent />
		</div>
		<div class="Page__FooterSpacer"></div>
		<div class="Page__Footer">
			<div class="Page__FooterContent">© Copyright 2020 Kirill Shestakov [{isLoading ? `loading` : `not loading`}]</div>
		</div>
	</div>;
}