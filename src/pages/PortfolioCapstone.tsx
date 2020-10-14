import Link from '@components/Link';
import { h } from 'preact';
import "@styles/Portfolio.scss";
import asset1 from "../../assets/portfolio/capstone/6.gif";
import asset2 from "../../assets/portfolio/capstone/1.png";
import asset3 from "../../assets/portfolio/capstone/2.png";
import asset4 from "../../assets/portfolio/capstone/3.png";
import asset5 from "../../assets/portfolio/capstone/4.png";
import asset6 from "../../assets/portfolio/capstone/5.png";

export const title = 'Kirill Shestakov - Portfolio - Medical Sensor Mobile App';

export const menu = 'portfolio';

export default function PortfolioCapstone(props: { class?: string }) {
	return <div class={`PortfolioCapstone ${props.class || ``}`}>
		<h1>Medical Sensor Mobile App</h1>
		<p>
			Medical Sensor System was created for <Link href="http://www.biointeractivetech.com/">BioInteractive Technologies</Link> as
			a proof-of-concept. My main responsibility was the development of a Hybrid mobile app for 3D visualization of the sensor data.
		</p>
		<div class="Portfolio__Grid">
			<div>
				<img class="Portfolio__Image Portfolio__Image--withBorder" src={asset1} />
			</div>
			<div>
				<img src={asset2} />
			</div>
			<div>
				<img src={asset3} />
			</div>
			<div>
				<img src={asset4} />
			</div>
			<div>
				<img src={asset5} />
			</div>
			<div>
				<img src={asset6} />
			</div>
		</div>
	</div>;
}