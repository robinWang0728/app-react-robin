import React from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { cartActions } from "store/cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      image,
      price,
    }));
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <Link to={`/product/${id}`}>
          <img src={image} alt="product-img" />
        </Link>
      </div>
      <div className="product__content">
        <div className="product__title">
          <span className="product__text"> {title}</span>
        </div>
        <div className="product__describe">
          <div className="product__price">
            <p className="product__text product__text-price">
              <span className="product__text product__text-price--currency">$</span>
              <span className="product__text product__text-price--price">{price}</span>
            </p>
          </div>
          <div className="product__describe-btns">
            <button className="product__describe-btn product__describe-btn--cart"  onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
