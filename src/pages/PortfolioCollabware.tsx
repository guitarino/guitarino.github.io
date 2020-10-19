import Link from '@components/Link';
import { h } from 'preact';
import "@styles/Portfolio.scss";
import asset1 from "@assets/portfolio/collabware/1.png";
import asset2 from "@assets/portfolio/collabware/2.png";
import asset3 from "@assets/portfolio/collabware/3.jpg";
import asset4 from "@assets/portfolio/collabware/4.jpg";
import asset5 from "@assets/portfolio/collabware/5.png";
import asset6 from "@assets/portfolio/collabware/6.png";
import asset7 from "@assets/portfolio/collabware/7.png";
import asset8 from "@assets/portfolio/collabware/8.png";
import asset9 from "@assets/portfolio/collabware/9.png";
import asset10 from "@assets/portfolio/collabware/10.png";
import asset11 from "@assets/portfolio/collabware/11.png";
import asset12 from "@assets/portfolio/collabware/12.png";
import asset13 from "@assets/portfolio/collabware/13.png";
import asset14 from "@assets/portfolio/collabware/14.png";
import asset15 from "@assets/portfolio/collabware/15.png";
import asset16 from "@assets/portfolio/collabware/16.png";
import asset17 from "@assets/portfolio/collabware/17.png";
import asset18 from "@assets/portfolio/collabware/18.png";
import asset19 from "@assets/portfolio/collabware/19.png";
import asset20 from "@assets/portfolio/collabware/20.png";
import asset21 from "@assets/portfolio/collabware/21.png";
import asset22 from "@assets/portfolio/collabware/22.png";
import asset23 from "@assets/portfolio/collabware/23.png";
import asset24 from "@assets/portfolio/collabware/24.png";
import asset25 from "@assets/portfolio/collabware/25.png";
import asset26 from "@assets/portfolio/collabware/26.png";
import asset27 from "@assets/portfolio/collabware/27.png";
import asset28 from "@assets/portfolio/collabware/28.png";
import asset29 from "@assets/portfolio/collabware/29.png";
import PortfolioGrid from '@components/PortfolioGrid';

export const title = 'Kirill Shestakov - Portfolio - Full Stack Software Engineer - Collabware Inc.';

export const menu = 'portfolio';

export default function PortfolioCollabware(props: { class?: string }) {
	return <div class={`PortfolioCollabware ${props.class || ``}`}>
		<h1>Full Stack Software Engineer - Collabware Inc.</h1>
		<h2>Collabspace</h2>
		<p>
			<Link href="https://collabware.com/collabspace">Collabspace</Link> is a cloud-based records
			management web application. My responsibilities included the development of front-end for
			many crucial features, such as basic and advanced search with interactive search results,
			customizable columns, sorting and infinite scroll. In addition, I implemented screen-adaptive
			dashboard component, tree-building interface with keyboard navigation and other interactive
			components. Moreover, I took on an extra responsibility to create a cross-platform desktop
			downloader application with additional data transformation capabilities. As part of back-end
			work, I was responsible for implementing features involving security groups, permissions and
			content trimming.
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
				{src: asset20},
				{src: asset21},
				{src: asset22},
				{src: asset23},
				{src: asset24},
				{src: asset25},
				{src: asset26},
				{src: asset27},
				{src: asset28},
				{src: asset29},
			]}
		/>
	</div>;
}