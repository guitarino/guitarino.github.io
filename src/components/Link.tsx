import { h, JSX } from 'preact';
import { useContext } from 'preact/hooks';
import { HistoryContext } from '@view/HistoryContext';
import { isLinkExternal } from '@utils/link';

export default function Link(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
	const history = useContext(HistoryContext);
	const newProps = {...props};
	if (props.href && isLinkExternal(props.href)) {
		newProps.rel = "noopener noreferrer";
		newProps.target = "_blank";
	}
	else {
		newProps.onClick = function (e) {
			if (props.href) {
				e.preventDefault();
				history.push(props.href);
			}
			if (props.onClick) {
				return props.onClick.call(this, e);
			}
		}
	}
	return <a {...newProps} />;
}