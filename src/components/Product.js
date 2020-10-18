import React from "react";

import StarIcon from "@material-ui/icons/Star";
import { connect } from "react-redux";

import "./Product.css";
import { addToBasket } from "./../actions/ActionTypes";

function Product(props) {
  const addBasket = () => {
    props.addToBasket({
      id: props.id,
      title: props.title,
      price: props.price,
      rating: props.rating,
      image: props.image,
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{props.title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product_rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => {
              return <StarIcon key={i}></StarIcon>;
            })}
        </div>
      </div>
      <img src={props.image} alt="" />
      <button onClick={addBasket}>Add to basket</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.addToBasket,
});

export default connect(mapStateToProps, { addToBasket })(Product);
