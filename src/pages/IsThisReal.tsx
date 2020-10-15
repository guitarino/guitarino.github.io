import { h } from 'preact';
import Markdown from '@components/Markdown';
import content from '@content/IsThisReal.md';

export const title = 'Is this real? - Kirill Shestakov';

export const menu = 'blog';

export default function IsThisReal(props: { class?: string }) {
	return <Markdown class={`IsThisReal ${props.class || ``}`}>
		{content}
	</Markdown>;
}