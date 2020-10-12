import Link from '@components/Link';
import { h } from 'preact';
import '@styles/Blog.scss';

export const title = 'Kirill Shestakov - Blog';

export const menu = 'blog';

export default function Blog() {
	return <div class="Blog">
		<h1>Web Development</h1>
		<div class="Blog__Post">
			<Link href="/blog/accessor-pattern/">
				<div class="Blog__PostTitle">You Can Create Private Properties In JS</div>
				<div class="Blog__PostDate">April 9, 2017</div>
			</Link>
		</div>
	</div>;
}