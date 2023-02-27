import { Product } from '../product/product-loader';

export type Article = {
	title: string;
	teaser: string;
	img: string;
	url: string;
};

export type HomeLoaderResponse = {
	articles: Article[];
	products: Product[];
};

const DEVELOPMENT = 'development';
const env = process.env.NODE_ENV || DEVELOPMENT;
// We fetch the data from the two json files and mimic the API call
// We return it in format of {articles, products}
// We declare header requests to be reused
export async function homeLoader() {
	const requestHeaders = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	};
	try {
		const articleResult: Article[] = await fetch('/articles.json', {
			headers: requestHeaders,
		}).then((data) => data.json());

		const whiskiesResult: Product[] = await fetch('/whiskies.json', {
			headers: requestHeaders,
		}).then((data) => data.json());

		return { articles: articleResult, products: [...whiskiesResult] };
	} catch (error) {
		if (env === DEVELOPMENT) {
			console.error(error);
		}
		throw error;
	}
}
