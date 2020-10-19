import { AnyComponent } from 'preact';

export type PageInfo = {
	title: string,
	menu: string,
	default: AnyComponent<any, any>,
};

type Pages = {
	[k: string]: () => Promise<PageInfo>,
};

const pages: Pages = {
	'/': () => import('./pages/About'),
	'/blog': () => import('./pages/Blog'),
	'/blog/accessor-pattern': () => import('./pages/AccessorPattern'),
	'/blog/is-this-real': () => import('./pages/IsThisReal'),
	'/blog/book-that-tears-its-own-pages': () => import('./pages/BookThatTearsItsOwnPages'),
	'/blog/paranoia': () => import('./pages/Paranoia'),
	'/portfolio': () => import('./pages/Portfolio'),
	'/portfolio/xmatters': () => import('./pages/PortfolioXMatters'),
	'/portfolio/collabware': () => import('./pages/PortfolioCollabware'),
	'/portfolio/netgear': () => import('./pages/PortfolioNetgear'),
	'/portfolio/capstone': () => import('./pages/PortfolioCapstone'),
};

export default pages;