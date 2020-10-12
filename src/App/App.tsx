import { h, render } from 'preact';

export default function App() {
	return <div>Hello world</div>;
}

export function renderApp(element: HTMLElement) {
	render(<App />, element);
}