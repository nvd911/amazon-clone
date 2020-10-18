import React from "react";
import { connect } from "react-redux";

import "./CheckOut.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function CheckOut(props) {
  var { cart } = props;

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/G/01/appcore/phone/11pro/iPhone_11_Pro_Desktop_01._CB436769808_.jpg"
          alt=""
        />
        {cart.basket.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in youe basket. To buy one or "Add to basket"
              next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2>Your Shopping Basket </h2>
            {cart.basket?.map((item, index) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                ></CheckoutProduct>
              );
            })}
          </div>
        )}
      </div>
      <div className="checkout_right">
        {cart.basket.length > 0 && (
          <div>
            <Subtotal></Subtotal>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.addToBasket,
});

export default connect(mapStateToProps)(CheckOut);
