import Link from '@components/Link';
import { h } from 'preact';
import "@styles/Portfolio.scss";
import asset1 from "../../assets/portfolio/netgear/video.webm";
import asset2 from "../../assets/portfolio/netgear/video.mp4";
import asset3 from "../../assets/portfolio/netgear/1.png";
import asset4 from "../../assets/portfolio/netgear/2.png";
import asset5 from "../../assets/portfolio/netgear/3.png";
import asset6 from "../../assets/portfolio/netgear/4.png";

export const title = 'Kirill Shestakov - Portfolio - NETGEAR Software Developer';

export const menu = 'portfolio';

export default function PortfolioNetgear(props: { class?: string }) {
	return <div class={`PortfolioNetgear ${props.class || ``}`}>
		<h1>NETGEAR Software Developer</h1>
		<h2>NETGEAR Mobile</h2>
		<p>
			<Link href="https://play.google.com/store/apps/details?id=com.sierrawireless.mhswatcher">NETGEAR Mobile</Link> is
			a mobile app that allows users to control their NETGEAR Mobile Hotspots. Users of both old and new NETGEAR hotspots
			can control all of their settings such as SSID, Wi-Fi passwords and APN from just a single mobile app. My
			responsibilities included implementing the majority of front-end views, user interactions, as well as internal logic
			and data model of the app.
		</p>
		<div class="Portfolio__Grid">
			<div>
				<video controls>
					<source src={asset1} type="video/webm" />
					<source src={asset2} type="video/mp4" />
				</video>
			</div>
			<div>
				<img class="Portfolio__Image Portfolio__Image--withBorder" src={asset3} />
			</div>
			<div>
				<img class="Portfolio__Image Portfolio__Image--withBorder" src={asset4} />
			</div>
			<div>
				<img class="Portfolio__Image Portfolio__Image--withBorder" src={asset5} />
			</div>
			<div>
				<img class="Portfolio__Image Portfolio__Image--withBorder" src={asset6} />
			</div>
		</div>
	</div>;
}