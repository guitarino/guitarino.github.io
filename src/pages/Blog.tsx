import Link from '@components/Link';
import { h } from 'preact';
import '@styles/Blog.scss';

export const title = 'Kirill Shestakov - Blog';

export const menu = 'blog';

export default function Blog(props: { class?: string }) {
	return <div class={`Blog ${props.class || ``}`}>
		<div class="Blog__Content">
			<h1>Fiction</h1>
			<div class="Blog__Posts">
				<Link class="Blog__Post" href="/blog/is-this-real/">
					<div class="Blog__PostTitle">Is this real?</div>
					<div class="Blog__PostDate">Dec 10, 2019</div>
				</Link>
				<Link class="Blog__Post" href="/blog/book-that-tears-its-own-pages/">
					<div class="Blog__PostTitle">The book that tears its own pages</div>
					<div class="Blog__PostDate">Jan 5, 2020</div>
				</Link>
			</div>
			<h1>Poetry</h1>
			<div class="Blog__Posts">
				<Link class="Blog__Post" href="/blog/paranoia/">
					<div class="Blog__PostTitle">Paranoia</div>
					<div class="Blog__PostDate">Jan 10, 2020</div>
				</Link>
			</div>
			<h1>Archived</h1>
			<div class="Blog__Posts">
				<Link class="Blog__Post" href="/blog/accessor-pattern/">
					<div class="Blog__PostTitle">You Can Create Private Properties In JS</div>
					<div class="Blog__PostDate">April 9, 2017</div>
				</Link>
			</div>
		</div>
	</div>;
}