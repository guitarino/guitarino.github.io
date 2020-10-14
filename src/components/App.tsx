import { History } from "history";
import { h, hydrate } from "preact";
import Page from "@components/Page";
import { useEffect, useState } from "preact/hooks";
import pages, { PageInfo } from '../pages';
import { HistoryContext } from "@view/HistoryContext";

async function getPageInfo(location: History['location']): Promise<PageInfo> {
	for (const key in pages) {
		if (location.pathname === key || location.pathname === `${key}/` || location.pathname === `${key}/index.html`) {
			const loadPage = pages[key];
			return await loadPage();
		}
	}
	return await pages['/']();
}

export default function App({ history, initPageInfo }: { history: History, initPageInfo: PageInfo }) {
	const [isLoading, setLoading] = useState(false);
	const [pageInfo, setPageInfo] = useState<PageInfo>(initPageInfo);
	useEffect(() => {
		return history.listen(async () => {
			setLoading(true);
			setPageInfo(await getPageInfo(history.location));
			setLoading(false);
		});
	})
	useEffect(() => {
		document.title = pageInfo.title;
	});
	return <HistoryContext.Provider value={history}>
		<Page
			isLoading={isLoading}
			pageComponent={pageInfo.default}
			activeMenu={pageInfo.menu}
		/>
	</HistoryContext.Provider>;
}

export async function renderApp({ history, root }: { history: History, root: HTMLElement }) {
	const initPageInfo = await getPageInfo(history.location);
	hydrate(<App history={history} initPageInfo={initPageInfo} />, root);
}