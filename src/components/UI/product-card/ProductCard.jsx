import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { cartActions } from 'store/cart/cartSlice';

const ProductCard = (props) => {
	console.log('ProductCard render');
	const updateFavor = props.updateFavor;
	const { id, productName, image, price, favor } = props.item;
	const dispatch = useDispatch();

	const addToCart = () => {
		dispatch(
			cartActions.addItem({
				id,
				productName,
				image,
				price,
			}),
		);
	};

	return (
		<div className='product__item'>
			<div className='product__img'>
				<Link to={`/product/${id}`}>
					<img src={image} alt='product-img' />
				</Link>
			</div>
			<div className='product__content'>
				<div className='product__title'>
					<span className='product__text'> {productName}</span>
				</div>
				<div className='product__describe'>
					<div className='product__price'>
						<p className='product__text product__text-price'>
							<span className='product__text product__text-price--currency'>$</span>
							<span className='product__text product__text-price--price'>{price}</span>
						</p>
					</div>
					<div className='product__describe-btns'>
						<div className='product__describe-btn--favor' onClick={() => updateFavor(props.item)}>
							{favor ? <AiFillHeart className='icon' /> : <AiOutlineHeart className='icon' />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
