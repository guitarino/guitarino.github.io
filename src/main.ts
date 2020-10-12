import { renderApp } from "@components/App";
import { createBrowserHistory } from "history";

function main() {
	renderApp({
		history: createBrowserHistory(),
		root: document.getElementById('root')!
	});
}

main();