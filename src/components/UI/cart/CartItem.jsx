import React from 'react';

import { useDispatch } from 'react-redux';
import { cartActions } from 'store/cart/cartSlice';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { AiFillDelete } from 'react-icons/ai';
const CartItem = ({ item }) => {
	const { id, title, price, image, quantity, totalPrice } = item;

	const dispatch = useDispatch();

	const incrementItem = () => {
		dispatch(
			cartActions.addItem({
				id,
				title,
				price,
				image,
			}),
		);
	};

	const decreaseItem = () => {
		dispatch(cartActions.removeItem(id));
	};

	const deleteItem = () => {
		dispatch(cartActions.deleteItem(id));
	};

	return (
		<div className='cart__item'>
			<div className='cart__item-img'>
				<img src={image} alt='cart__item-img' />
			</div>

			<div className='cart__item-info'>
				<div className='cart__item-title'>{title}</div>
				<div className='cart__item-price'>
					<p className='cart__item-text--price'>
						{quantity}x <span className='cart__item-text--totalPrice'>${totalPrice}</span>
					</p>
				</div>
				<div className='cart__item-add-sub-btn'>
					<span className='cart__item-add-btn' onClick={incrementItem}>
						<IoMdAdd className='userIcon heIcon' />
					</span>
					<span className='quantity'>{quantity}</span>
					<span className='cart__item-sub-btn' onClick={decreaseItem}>
						<IoMdRemove className='userIcon heIcon' />
					</span>
				</div>
			</div>
			<div className='cart__item-deleteBtn' onClick={deleteItem}>
				<AiFillDelete className='userIcon heIcon' />
			</div>
		</div>
	);
};

export default CartItem;
