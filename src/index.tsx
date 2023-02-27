import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import AppRouter from './routing';
import CartContextProvider from './store/cart-context';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<CartContextProvider>
			<RouterProvider router={AppRouter} />
		</CartContextProvider>
	</React.StrictMode>
);
