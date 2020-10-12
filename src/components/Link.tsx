import { h, JSX } from 'preact';

export default function Link(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
	return <a {...props} />;
}