import { useMemo, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FilterPill from '../../components/atoms/filter-pill/filter-pill';
import ArticleCard from '../../components/organisms/article-card/article-card';
import ProductCard from '../../components/organisms/product-card/product-card';
import { APP_ROUTES } from '../../routing';
import { Regions } from '../product/product-loader';
import { HomeLoaderResponse } from './home-loader';
import './styles.css';

const allFilters = Object.values(Regions);
// const FILTERS: FilterPillProps = [{ label: 'All' }];
const HomePage = () => {
	const { articles, products } = useLoaderData() as HomeLoaderResponse;
	const [activeFilters, setActiveFilters] = useState<string[]>([]);

	const handleOnToggleFilter = (filter: string) => {
		setActiveFilters((prevState) => {
			// Clear/reset the filters array
			if (filter === 'clear') {
				return [];
			}
			// finds filter by index
			const filterIndex = activeFilters.findIndex(
				(item) => item === filter
			);

			if (filterIndex > -1) {
				//if index > -1 it means the filter is already active so we:
				// Copy state
				// Remove item with splice
				// Return the new copy of state
				const newState = [...prevState];
				newState.splice(filterIndex, 1);

				return [...newState];
			}

			// We add the new filter
			return [...prevState, filter];
		});
	};

	// useMemo hook listens for changes in active filters and products
	// And filter the products cominng from the API accordingly

	const filteredProducts = useMemo(() => {
		// If we have no filters, we return all products coming from API
		if (activeFilters.length === 0) {
			return products;
		} else {
			// We filter the products (based on their region)
			const newFilteredProducts = products.filter((product) => {
				// We check if the product's region is included in the filters
				if (activeFilters.includes(product.region)) {
					return true;
				}
				return false;
			});
			return newFilteredProducts;
		}
	}, [activeFilters, products]);

	return (
		<div className='home-page-content'>
			<header className='home-page-header'>
				<h2>Whiskey Selection</h2>
			</header>
			{/* Filters */}
			<div className='filter-wrapper'>
				<FilterPill
					key={`clear-filters`}
					label={'all'}
					isActive={activeFilters.length === 0}
					onToggleFilter={() => handleOnToggleFilter('clear')}
				/>
				{allFilters.map((filter: string, index: number) => (
					<FilterPill
						key={`filter-${index}`}
						label={filter}
						isActive={activeFilters.includes(filter)}
						onToggleFilter={() => handleOnToggleFilter(filter)}
					/>
				))}
			</div>
			{/* Products*/}
			<div className='products-container'>
				<div className='products-grid'>
					{filteredProducts.map((product, index) => (
						<Link
							to={APP_ROUTES.Whiskey + product.uri}
							key={`card-${index}`}>
							<ProductCard product={product} />
						</Link>
					))}
				</div>
			</div>

			{/* Article */}

			<div className='article-card-wrapper'>
				{articles.map((article, index) => (
					<Link
						to={article.url}
						target='_blank'
						key={`article-${index}`}>
						<ArticleCard article={article} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default HomePage;
