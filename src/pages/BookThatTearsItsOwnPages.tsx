import { h } from 'preact';
import Markdown from '@components/Markdown';
import content from '@content/BookThatTearsItsOwnPages.md';

export const title = 'The book that tears its own pages - Kirill Shestakov';

export const menu = 'blog';

export default function BookThatTearsItsOwnPages(props: { class?: string }) {
	return <Markdown class={`BookThatTearsItsOwnPages ${props.class || ``}`}>
		{content}
	</Markdown>;
}