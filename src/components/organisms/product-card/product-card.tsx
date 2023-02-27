import { FC, useMemo } from 'react';
import { Product } from '../../../pages/product/product-loader';
import { TastingNotes } from '../../molecules/tasting-notes/tasting-notes';
import './styles.css';

type Props = {
	product: Product;
	useCase?: 'home' | 'detail';
};

const ProductCard: FC<Props> = ({ product, useCase = 'home' }) => {
	//store the region specific color gradients in a variable
	//useMemo() returns the memoized value without
	//calling the function on every render

	const regionGradient = useMemo(() => {
		const lightColor = `var(--${product.region}-light)`;
		const darkColor = `var(--${product.region}-dark)`;
		return `linear-gradient(90deg, ${lightColor}, ${darkColor})`;
	}, [product.region]);

	return (
		<div className={`product-card-wrapper-${useCase}`}>
			<div className='product-card'>
				<div className='product-card-bg-wrapper'>
					<img
						src='/assets/card-bg.svg'
						alt='white swirl svg'
						className={`product-card-bg-${useCase}`}
					/>
				</div>
				<div className='product-content'>
					<div className='content-left'>
						<h2 className='product-title'>{product.title}</h2>
						<h3 className='product-region'>
							{product.region} region
						</h3>

						<h2 className='product-cost'>${product.cost}</h2>

						<div className='product-tasting-notes'>
							<TastingNotes
								tasting_notes={product.tasting_notes}
								regionGradient={regionGradient}
							/>
						</div>
					</div>
					<div
						className='product-accent'
						style={{ background: regionGradient }}></div>
					<div className='content-right'>
						<img
							src={`/assets/${product.image}`}
							alt='product'
							className={`product-image-${useCase}`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
