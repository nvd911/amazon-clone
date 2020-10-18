import React from "react";

import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://m.media-amazon.com/images/G/01/appcore/AMZ_AirPods_ChargingCase_Desktop_03._CB410666782_.jpg"
        alt=""
      />

      <div className="home_row">
        <Product
          id="1223311"
          title="The cofe home pro back"
          price={99.32}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg"
        ></Product>
        <Product
          id="1223311"
          title="The cofe home pro back"
          price={99.32}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71p11135VSL._AC_SY400_.jpg"
        ></Product>
      </div>

      <div className="home_row">
        <Product
          id="1223311"
          title="The cofe home pro back"
          price={99.32}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51i3begZ5BL._AC_UL320_SR320,320_.jpg"
        ></Product>
        <Product
          id="1223311"
          title="The cofe home pro back"
          price={99.32}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"
        ></Product>
        <Product
          id="1223311"
          title="The cofe home pro back"
          price={99.32}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg"
        ></Product>
      </div>
      <div className="home_row">
        <Product
          id="1223311"
          title="The cofe home pro back"
          price={99.32}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/817wkPGulTL._AC_SY400_.jpg"
        ></Product>
      </div>
    </div>
  );
}

export default Home;
