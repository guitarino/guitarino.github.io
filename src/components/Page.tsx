import { h, AnyComponent } from 'preact';
import Link from "@components/Link";
import '@styles/Page.scss';
import TextLoading from './TextLoading';

type PageProps = {
	activeMenu: string,
	pageComponent: AnyComponent,
	isLoading: boolean,
};

export default function Page({ activeMenu, pageComponent, isLoading }: PageProps) {
	const PageComponent: any = pageComponent;
	return <div class="Page">
		<div class={`Page__Header ${activeMenu !== 'about' ? `Page__Header--shorter` : ``}`}>
			<div class="Page__HeaderBanner"></div>
			<div class="Page__HeaderOverlay"></div>
			<div class="Page__HeaderInfoContainer">
				<div class="Page__HeaderPhoto"></div>
				<div class="Page__HeaderName">Kirill Shestakov</div>
				<div class="Page__HeaderDescription">Web Developer in Vancouver</div>
			</div>
			<nav class="Page__HeaderMenu">
				<Link class="Page__MenuLink" href="/">
					<div class={`Page__MenuItem ${activeMenu === 'about' ? `Page__MenuItem--active` : ``}`}>About</div>
				</Link>
				<Link class="Page__MenuLink" href="/blog/">
					<div class={`Page__MenuItem ${activeMenu === 'blog' ? `Page__MenuItem--active` : ``}`}>Blog</div>
				</Link>
				<Link class="Page__MenuLink" href="/portfolio/">
					<div class={`Page__MenuItem ${activeMenu === 'portfolio' ? `Page__MenuItem--active` : ``}`}>Portfolio</div>
				</Link>
			</nav>
		</div>
		{
			isLoading &&
				<div class="Page__ContentLoadingContainer">
					<div class="Page__ContentLoading">
						<TextLoading />
						<TextLoading />
					</div>
				</div>
		}
		<div class={`Page__ContentContainer ${isLoading ? `Page__ContentContainer--loading` : ``}`}>
			<PageComponent class="Page__Content" />
		</div>
		<div class="Page__FooterSpacer"></div>
		<div class="Page__Footer">
			<div class="Page__FooterContent">© Copyright 2020 Kirill Shestakov</div>
		</div>
	</div>;
}