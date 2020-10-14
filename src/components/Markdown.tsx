import { Fragment, h } from 'preact';
import MarkdownLibrary from 'markdown-to-jsx';
import Link from '@components/Link';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Markdown(props: any) {
	return <MarkdownLibrary {...props} class='Markdown' options={{
		overrides: {
			a: Link,
			pre: Fragment,
			code: props => {
				const language = props.class && props.class.replace(/^lang-/, '');
				if (language) {
					return <SyntaxHighlighter
						{...props}
						language={language}
						style={monokaiSublime}
					/>;
				}
				else {
					return <code {...props} />;
				}
			},
		},
	}} />;
}