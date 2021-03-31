import React, { useEffect, useState } from "react";
import { getProductsByCount } from "../functions/product";
import ProductCard from "../components/cards/ProductCard";
import { Carousel } from 'antd';
import hallmark from "../images/hallmark.jpg";
import pearls from "../images/pearls.jpg";
import necklaces from "../images/necklaces.jpg";
import earrings from "../images/earrings.jpg";
import ring from "../images/ring.jpg";
import inspirational from "../images/inspirational.jpg";
import Jumbotron from "../components/cards/Jumbotron";
import LoadingCard from "../components/cards/LoadingCard";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import { Link } from "react-router-dom";

const contentStyle = {
   height: '600px',
  color: '#fff',
  // lineHeight: '520px',
  textAlign: 'center',
  background: '#364d79',
  margin:0,
  // margin: '20px',
   width:'1600px',
  // lineWidth: '1800px'
  
  
};

const Home = () => {
  

  return (
    <>

      {/* <div className="jumbotron h2 font-weight-bold text-center">
        <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
      </div> */}
      <Carousel effect="fade">
          <div>
            <Link to="/category/cercei" >
              <img
                src={earrings}
                style={contentStyle}
                
              />
              </Link>
          </div>
          <div>
            <Link to="/category/inele" >
              <img
                src={ring}
                style={contentStyle}
                
              />
              </Link>
          </div>
          <div>
            <Link to="/category/pandantive" >
              <img
                src={hallmark}
                style={contentStyle}
                
              />
              </Link>
          </div>
          <div>
            <Link to="/category/coliere" >
              <img
                src={necklaces}
                style={contentStyle}
                
              />
              </Link>
          </div>
          <div>
            <Link to="/category/bratari" >
              <img
                src={pearls}
                style={contentStyle}
                
              />
              </Link>
          </div>
          
        </Carousel>
      <br></br>
      

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Ultimele produse adaugate
      </h4>
      <NewArrivals />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Cele mai vandute produse
      </h4>
      <BestSellers />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Categorii
      </h4>
      <CategoryList />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Subcategorii
      </h4>
      <SubList />
      <br></br>
    </>
  );
};

export default Home;