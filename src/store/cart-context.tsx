import { createContext, useState, FC } from 'react';
import { Product } from '../pages/product/product-loader';

// Placeholder - starting phase of implementing context
// Allows further implementation and scaling per requirements

type ProductCallback = (product: Product) => void;

type CartState = {
	products: Product[];
	addProduct: ProductCallback;
};

type Props = {
	children: React.ReactNode;
};

export const CartContext = createContext<CartState>({
	products: [],
	addProduct: (p: Product) => null,
});

const CartContextProvider: FC<Props> = ({ children }) => {
	const [products, setProducts] = useState<Product[]>([]);

	// creates a new copy of the state
	// adds a new product to state
	// with push(append to the end)
	// [1].push(2) becomes [1,2]

	const handleAddProduct = (product: Product) => {
		setProducts((prevState) => {
			const newState = [...prevState];
			newState.push(product);
			return newState;
		});
	};

	return (
		<CartContext.Provider
			value={{
				products: products,
				addProduct: handleAddProduct,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
