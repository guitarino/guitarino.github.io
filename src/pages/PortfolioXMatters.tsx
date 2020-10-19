import Link from '@components/Link';
import { h } from 'preact';
import "@styles/Portfolio.scss";
import asset1 from "@assets/portfolio/xmatters/1.png";
import asset2 from "@assets/portfolio/xmatters/2.png";
import asset3 from "@assets/portfolio/xmatters/3.png";
import asset4 from "@assets/portfolio/xmatters/4.png";
import asset5 from "@assets/portfolio/xmatters/5.png";
import asset6 from "@assets/portfolio/xmatters/6.png";
import asset7 from "@assets/portfolio/xmatters/7.png";
import asset8 from "@assets/portfolio/xmatters/8.png";
import asset9 from "@assets/portfolio/xmatters/9.png";
import asset10 from "@assets/portfolio/xmatters/10.png";
import asset11 from "@assets/portfolio/xmatters/11.png";
import asset12 from "@assets/portfolio/xmatters/12.png";
import asset13 from "@assets/portfolio/xmatters/13.png";
import asset14 from "@assets/portfolio/xmatters/14.png";
import asset15 from "@assets/portfolio/xmatters/15.png";
import asset16 from "@assets/portfolio/xmatters/16.png";
import asset17 from "@assets/portfolio/xmatters/17.png";
import asset18 from "@assets/portfolio/xmatters/18.png";
import asset19 from "@assets/portfolio/xmatters/19.png";
import asset20 from "@assets/portfolio/xmatters/20.png";
import asset21 from "@assets/portfolio/xmatters/21.png";
import asset22 from "@assets/portfolio/xmatters/22.png";
import asset23 from "@assets/portfolio/xmatters/23.png";
import asset24 from "@assets/portfolio/xmatters/24.png";
import PortfolioGrid from '@components/PortfolioGrid';

export const title = 'Kirill Shestakov - Portfolio - UI Developer - xMatters, Inc.';

export const menu = 'portfolio';

export default function PortfolioCollabware(props: { class?: string }) {
	return <div class={`PortfolioCollabware ${props.class || ``}`}>
		<h1>UI Developer - xMatters, Inc.</h1>
		<p>
			<Link href="https://www.xmatters.com/">xMatters</Link> is a cloud-based IT event management
			system. My work included fixing bugs and creating web user interfaces for important company's
			features, such as workflows, libraries, input management and flow designer. This included working
			with content editing, dynamic flow chart builder, drag &amp; drop and other cross-browser user
			interactions. Part of responsibility also included maintaining and renewing legacy Java code,
			for both front-end and back-end.
		</p>
		<PortfolioGrid
			assets={[
				{src: asset1, width: 'full'},
				{src: asset2},
				{src: asset3},
				{src: asset4},
				{src: asset5},
				{src: asset6},
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
				{src: asset19},
				{src: asset20, width: 'full'},
				{src: asset21},
				{src: asset22},
				{src: asset23},
				{src: asset24},
			]}
		/>
	</div>;
}