import React, { useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../../store/cart-context';
import './styles.css';

// feature is not fully implemented
//we use it as a placeholder

const ShoppingCart = () => {
	const cartContext = useContext(CartContext);
	const [isCartContentVisible, setIsCartContentVisible] = useState(false);
	const toggleCart = () => setIsCartContentVisible((prevState) => !prevState);

	//cart content visibility is controlled with state
	//cart icon only shows up if cart is not empty (.length > 0)

	return (
		<>
			{cartContext.products.length > 0 && (
				<div className='shopping-cart-wrapper'>
					<div onClick={toggleCart} className='shopping-cart-action'>
						<FaShoppingCart size={36} />
						<span className='cart-counter'>
							{cartContext.products.length > 0 && (
								<>{cartContext.products.length}</>
							)}
						</span>
					</div>
					{isCartContentVisible &&
						cartContext.products.length > 0 && (
							<div className='shopping-cart-content'>
								{cartContext.products.map((product, index) => {
									return (
										<div
											className='shopping-cart-item'
											key={`${index}-${product.title}`}>
											<span className='shopping-cart-item-title'>
												{product.title}{' '}
											</span>
											<span> ${product.cost}</span>
										</div>
									);
								})}
							</div>
						)}
				</div>
			)}
		</>
	);
};

export default ShoppingCart;
