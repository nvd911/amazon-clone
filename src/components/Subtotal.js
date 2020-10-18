import React from "react";
import { connect } from "react-redux";

import "./Subtotal.css";
function Subtotal(props) {
  var { cart } = props;
  const showPrice = (basket) => {
    var result = null;
    basket.map((item, index) => {
      return (result = item.price * basket.length);
    });
    return result;
  };

  return (
    <div className="subtotal">
      <div className="subtotal_price">
        <span>Subtotal:</span>
        <small>$</small>
        <strong>{showPrice(cart.basket)}</strong>
        <br />
        <input type="checkbox" />
        <span>This order contains a gift</span>
      </div>
      <button className="subtotal_gift">Proceed to Checkout</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.addToBasket,
});

export default connect(mapStateToProps)(Subtotal);
