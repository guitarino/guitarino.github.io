import Markdown from 'markdown-to-jsx';
import { h } from 'preact';
import content from '@content/AccessorPattern.md';

export const title = 'You Can Create Private Properties In JS - Kirill Shestakov';

export const menu = 'blog';

export default function AccessorPattern() {
	return <Markdown>
		{content}
	</Markdown>;
}