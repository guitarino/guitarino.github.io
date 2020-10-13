import Link from '@components/Link';
import { h } from 'preact';

export const title = 'Kirill Shestakov - Portfolio - NETGEAR Software Developer';

export const menu = 'portfolio';

export default function PortfolioNetgear() {
	return <div class="PortfolioNetgear">
		<h1>NETGEAR Software Developer</h1>
		<h2>NETGEAR Mobile</h2>
		<p>
			<Link href="https://play.google.com/store/apps/details?id=com.sierrawireless.mhswatcher">NETGEAR Mobile</Link> is
			a mobile app that allows users to control their NETGEAR Mobile Hotspots. Users of both old and new NETGEAR hotspots
			can control all of their settings such as SSID, Wi-Fi passwords and APN from just a single mobile app. My
			responsibilities included implementing the majority of front-end views, user interactions, as well as internal logic
			and data model of the app.
		</p>
		<div class="PortfolioNetgear__Grid">
			<div>
				<video controls>
					<source src="/portfolio/netgear/video.webm" type="video/webm" />
					<source src="/portfolio/netgear/video.mp4" type="video/mp4" />
				</video>
			</div>
			<div>
				<img class="PortfolioNetgear__Image--withBorder" src="/portfolio/netgear/1.png" />
			</div>
			<div>
				<img class="PortfolioNetgear__Image--withBorder" src="/portfolio/netgear/2.png" />
			</div>
			<div>
				<img class="PortfolioNetgear__Image--withBorder" src="/portfolio/netgear/3.png" />
			</div>
			<div>
				<img class="PortfolioNetgear__Image--withBorder" src="/portfolio/netgear/4.png" />
			</div>
		</div>
	</div>;
}