import React, { FC } from 'react';
import './styles.css';
import { Product } from '../../../pages/product/product-loader';

// this is just a placeholder component
// to fill the empty space on the product page

type Props = {
	product: Product;
};
const ProductDescription: FC<Props> = ({ product }) => {
	return (
		<div>
			{' '}
			<div className='product-description'>
				<p>
					<span className='capitalize'>{product.title}</span> is a
					wonderful whiskey from the{' '}
					<span className='capitalize'>{product.region}</span> region
					that has pleasant notes of{' '}
					{product.tasting_notes.join(', ')}.
				</p>
				<p>
					You can get it now for the great price of ${product.cost}.
				</p>
				<p>
					Enjoy <span className='capitalize'>{product.title}</span>!
				</p>
			</div>
		</div>
	);
};

export default ProductDescription;
