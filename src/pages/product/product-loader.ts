export enum Regions {
	Highlands = 'highlands',
	Lowlands = 'lowlands',
	Islay = 'islay',
	Islands = 'islands',
	Speyside = 'speyside',
	Campbeltown = 'campbeltown',
}
export type Product = {
	title: string;
	image: string;
	cost: number;
	region: Regions;
	tasting_notes: string[];
	uri: string;
};

const DEVELOPMENT = 'development';
const env = process.env.NODE_ENV || DEVELOPMENT;
// uses the params from the router
// in this case :productName

export async function productLoader({ params }: any) {
	const { productName } = params;
	if (!productName) {
		return null;
	}
	const requestHeaders = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	};
	try {
		// mimics an api call that only gets 1 product / request
		const selectedWhiskey: Product | null =
			(await fetch('/whiskies.json', {
				headers: requestHeaders,
			})
				.then((data) => data.json())
				.then((data: Product[]) =>
					data.find(
						(item) =>
							item.title.toLowerCase() ===
							productName.toLowerCase()
					)
				)) || null;

		return selectedWhiskey;
	} catch (error) {
		if (env === DEVELOPMENT) {
			console.error(error);
		}
		throw error;
	}
}
