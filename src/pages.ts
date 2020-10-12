import { AnyComponent } from 'preact';

export type PageInfo = {
	title: string,
	menu: string,
	default: AnyComponent,
};

type Pages = {
	[k: string]: () => Promise<PageInfo>,
};

const pages: Pages = {
	'/': () => import('./pages/About'),
	'/blog': () => import('./pages/Blog'),
	'/blog/accessor-pattern': () => import('./pages/AccessorPattern'),
	'/portfolio': () => import('./pages/Portfolio'),
	'/portfolio/netgear': () => import('./pages/PortfolioNetgear'),
	'/portfolio/capstone': () => import('./pages/PortfolioCapstone'),
};

export default pages;