import Link from '@components/Link';
import { h } from 'preact';
import "@styles/Portfolio.scss";
import asset1 from "@assets/portfolio/netgear/video.webm";
import asset2 from "@assets/portfolio/netgear/video.mp4";
import asset3 from "@assets/portfolio/netgear/1.png";
import asset4 from "@assets/portfolio/netgear/2.png";
import asset5 from "@assets/portfolio/netgear/3.png";
import asset6 from "@assets/portfolio/netgear/4.png";
import PortfolioGrid from '@components/PortfolioGrid';

export const title = 'Kirill Shestakov - Portfolio - Software Developer - NETGEAR Inc.';

export const menu = 'portfolio';

export default function PortfolioNetgear(props: { class?: string }) {
	return <div class={`PortfolioNetgear ${props.class || ``}`}>
		<h1>Software Developer - NETGEAR Inc.</h1>
		<h2>NETGEAR Mobile</h2>
		<p>
			<Link href="https://play.google.com/store/apps/details?id=com.sierrawireless.mhswatcher">NETGEAR Mobile</Link> is
			a mobile app that allows users to control their NETGEAR Mobile Hotspots. Users of both old and new NETGEAR hotspots
			can control all of their settings such as SSID, Wi-Fi passwords and APN from just a single mobile app. My
			responsibilities included implementing the majority of front-end views, user interactions, as well as internal logic
			and data model of the app.
		</p>
		<PortfolioGrid
			assets={[
				{type: 'video', srcs: [asset1,asset2]},
				{src: asset3},
				{src: asset4},
				{src: asset5},
				{src: asset6},
			]}
		/>
	</div>;
}