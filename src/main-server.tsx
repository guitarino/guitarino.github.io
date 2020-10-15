import render from 'preact-render-to-string';
import { createMemoryHistory } from 'history';
import App from '@components/App';
import { h } from 'preact';
import pages from './pages';

async function renderApp(url: string) {
	const pageInfo = await pages[url]();
	const history = createMemoryHistory();
	history.push(url);
	const content = render(<App history={history} initPageInfo={pageInfo} />);
	return { pageInfo, content };
}

export async function getPluginInfos() {
	const pluginInfos: any[] = [];

	for (const url in pages) {
		const { pageInfo, content } = await renderApp(url);
		pluginInfos.push({
			title: pageInfo.title,
			url,
			content,
		});
	}

	return pluginInfos;
}