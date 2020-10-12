import render from 'preact-render-to-string';
import { h } from 'preact';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import pages from '../pages';
import { createMemoryHistory } from 'history';
import App from '@components/App';

export default async function getHtmlPlugins(): Promise<HtmlWebpackPlugin[]> {
	const htmlPlugins: HtmlWebpackPlugin[] = [];

	for (const url in pages) {
		const pageInfo = await pages[url]();
		const history = createMemoryHistory();
		history.push(url);
		const content = render(<App
			history={history}
			initPageInfo={pageInfo}
		/>);
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

