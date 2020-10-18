import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { connect } from "react-redux";
import { auth } from "./../firebase";

import "./Header.css";

function Header(props) {
  var { addToBasket } = props;
  const login = () => {
    if (addToBasket.user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header_logo"
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>
      <div className="header_nav">
        <Link to={!addToBasket.user && "/login"} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_optionLineOne">
              Hello {addToBasket.user?.email}
            </span>
            <span className="header_optionLineTwo">
              {addToBasket.user ? "Sign In" : "Sign Out"}
            </span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="header_optionLineTwo header_basketCount">
              {addToBasket.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  addToBasket: state.addToBasket,
});

export default connect(mapStateToProps)(Header);
