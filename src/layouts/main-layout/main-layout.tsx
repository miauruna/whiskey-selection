import { Outlet } from 'react-router-dom';
import ShoppingCart from '../../components/molecules/shopping-cart/shopping-cart';
import './styles.css';

const MainLayout = () => {
	return (
		<div className='body'>
			<div className='shopping-cart-container'>
				<ShoppingCart />
			</div>
			<Outlet />
		</div>
	);
};

export default MainLayout;
