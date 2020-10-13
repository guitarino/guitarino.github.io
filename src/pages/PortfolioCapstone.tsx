import Link from '@components/Link';
import { h } from 'preact';

export const title = 'Kirill Shestakov - Portfolio - Medical Sensor Mobile App';

export const menu = 'portfolio';

export default function PortfolioCapstone() {
	return <div class="PortfolioCapstone">
		<h1>Medical Sensor Mobile App</h1>
		<p>
			Medical Sensor System was created for <Link href="http://www.biointeractivetech.com/">BioInteractive Technologies</Link> as
			a proof-of-concept. My main responsibility was the development of a Hybrid mobile app for 3D visualization of the sensor data.
		</p>
		<div class="PortfolioCapstone__Grid">
			<div>
				<img class="PortfolioCapstone__Image--withBorder" src="/portfolio/capstone/6.gif" />
			</div>
			<div>
				<img src="/portfolio/capstone/1.png" />
			</div>
			<div>
				<img src="/portfolio/capstone/2.png" />
			</div>
			<div>
				<img src="/portfolio/capstone/3.png" />
			</div>
			<div>
				<img src="/portfolio/capstone/4.png" />
			</div>
			<div>
				<img src="/portfolio/capstone/5.png" />
			</div>
		</div>
	</div>;
}