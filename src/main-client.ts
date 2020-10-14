import { renderApp } from "@components/App";
import { createBrowserHistory } from "history";
import './fonts.scss';
import './main.scss';

function main() {
	renderApp({
		history: createBrowserHistory(),
		root: document.getElementById('root')!
	});
}

main();