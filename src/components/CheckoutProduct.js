import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { connect } from "react-redux";

import "./CheckoutProduct.css";
import { removeFormBasket } from "./../actions/ActionTypes";

function CheckoutProduct(props) {
  const removeFromBasket = () => {
    props.removeFormBasket(props.id);
  };
  return (
    <div className="checkoutProduct">
      <img src={props.image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{props.title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>

        <div className="checkoutProduct_rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => {
              return <StarIcon></StarIcon>;
            })}
        </div>

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { removeFormBasket })(CheckoutProduct);
