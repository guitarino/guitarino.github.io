import { h } from 'preact';
import Markdown from '@components/Markdown';
import content from '@content/Paranoia.md';

export const title = 'Paranoia - Kirill Shestakov';

export const menu = 'blog';

export default function Paranoia(props: { class?: string }) {
	return <Markdown class={`Paranoia ${props.class || ``}`}>
		{content}
	</Markdown>;
}