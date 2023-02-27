import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProductDescription from '../../components/atoms/product-description/product-description';
import ProductCard from '../../components/organisms/product-card/product-card';
import { APP_ROUTES } from '../../routing';
import { CartContext } from '../../store/cart-context';
import { Product } from './product-loader';
import './styles.css';

const ProductPage = () => {
	const loadedProduct = useLoaderData() as Product;
	const cartContext = useContext(CartContext);
	//if there is no loaded product we get an error screen
	return (
		<div className='product-page-wrapper'>
			{!loadedProduct && (
				<>
					<h1>Doesn't exist</h1>
					<Link to={APP_ROUTES.Root}>Back to all</Link>
				</>
			)}
			{loadedProduct && (
				<>
					<header className='product-page-header'>
						<h1>{loadedProduct.title}</h1>
					</header>
					<div className='product-page-content'>
						<ProductCard product={loadedProduct} useCase='detail' />

						<div className='product-actions-container'>
							<ProductDescription product={loadedProduct} />

							<button
								className='button-default'
								onClick={() =>
									cartContext.addProduct(loadedProduct)
								}>
								Add to cart
							</button>

							<Link to={APP_ROUTES.Root}>Back to all</Link>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ProductPage;
