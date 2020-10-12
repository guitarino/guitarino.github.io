import Link from '@components/Link';
import { h } from 'preact';

export const title = 'Kirill Shestakov - Portfolio';

export const menu = 'portfolio';

export default function Portfolio() {
	return <div>
		<div>Portfolio</div>
		<div><Link href="/portfolio/netgear">Netgear</Link></div>
		<div><Link href="/portfolio/capstone">Capstone</Link></div>
	</div>;
}