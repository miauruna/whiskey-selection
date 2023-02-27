import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/main-layout/main-layout';
import { homeLoader } from './pages/home/home-loader';
import HomePage from './pages/home/home-page';
import { productLoader } from './pages/product/product-loader';
import ProductPage from './pages/product/product-page';

// using enums to save some string values and for consistency
export enum APP_ROUTES {
	Root = '/',
	Whiskey = '/whiskey',
}

// 1 level deep nested routing in this case
// MainLayout wraps around the children routes

const AppRouter = createBrowserRouter([
	{
		path: APP_ROUTES.Root,
		element: <MainLayout />,
		errorElement: <h1>Not Found</h1>,
		children: [
			{
				path: APP_ROUTES.Root,
				// Each route can define a "loader" function
				//to provide data to the route element before it renders.
				// We then can get the data returned by the loader
				// using the "useLoaderData() hook"
				loader: homeLoader,
				element: <HomePage />,
			},
			{
				path: APP_ROUTES.Whiskey + '/:productName',
				loader: productLoader,
				element: <ProductPage />,
			},
		],
	},
]);

export default AppRouter;
