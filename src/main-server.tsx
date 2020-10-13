import render from 'preact-render-to-string';
import HtmlWebpackPlugin from 'html-webpack-plugin';
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

export async function getHtmlPlugins(): Promise<HtmlWebpackPlugin[]> {
	const htmlPlugins: HtmlWebpackPlugin[] = [];

	for (const url in pages) {
		const { pageInfo, content } = await renderApp(url);
		htmlPlugins.push(new HtmlWebpackPlugin({
			title: pageInfo.title,
			filename: `${url}/index.html`,
			favicon: './assets/favicon.ico',
			mobile: true,
			meta: {
				'author': 'Kirill Shestakov',
				'theme-color': '#383548',
			},
			templateParameters: {
				content,
			},
		}));
	}

	return htmlPlugins;
}

