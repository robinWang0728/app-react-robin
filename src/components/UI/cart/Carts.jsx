import React from 'react';

import { Link } from 'react-router-dom';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
const Carts = () => {
	const cartProducts = useSelector((state) => state.cart.cartItems);
	const totalAmount = useSelector((state) => state.cart.totalAmount);

	return (
		<div className='cart'>
			<div className='cart__container'>
				<div className='cart__close'>
					<span className='cart__close-icon'>
						<IoClose className='userIcon heIcon' />
					</span>
				</div>

				<div className='cart__item-list'>
					{cartProducts.length === 0 ? (
						<span className='cart__item-list--empty'>
							<MdOutlineRemoveShoppingCart className='userIcon heIcon' />
						</span>
					) : (
						cartProducts.map((item, index) => <CartItem item={item} key={index} />)
					)}
				</div>

				<div className='cart__bottom d-flex align-items-center justify-content-between'>
					<h6>
						Subtotal : <span>${totalAmount}</span>
					</h6>
					<button>
						<Link to='/checkout'>Checkout</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Carts;
