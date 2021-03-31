import React, { useState } from "react";
import { Card, Tabs, Tooltip, List } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import necklace from "../../images/necklace.jpg";
import ProductListItems from "./ProductListItems";
import StarRating from "react-star-ratings";
import RatingModal from "../modal/RatingModal";
import { showAverage } from "../../functions/rating";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist } from "../../functions/user";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const { TabPane } = Tabs;

// const contentStyle = {
//  font-size
  
  
// };

const data = [
  {
    title: 'Livrare gratuita in doua zile lucratoare',
    description: 'JewelryBoutique este mândru să vă ofere una dintre cele mai rapide rapoarte expediere de pe piață. Oferim, de asemenea, livrare gratuită pentru toate comenzile.'

  },
  {
    title: 'Ambalare cadou gratuita',
    description:'Achiziția dvs. va include, de asemenea, o cutie de cadouri gratuită, proiectată de profesioniști, deoarece fiecare detaliu important contează.'

  },
  {
    title: 'Politica de returnare in 60 de zile',
    description: 'Suntem dedicați satisfacției dvs. Dacă nu sunteți mulțumiți cu alegerea dvs., returnați produsul în starea inițială în termen de 60 de zile.'
  },
  {
    title: 'Garantie pe viata',
    description: 'Suntem în spatele calității bijuteriilor noastre și vă asigurăm cu o garanție pe viață pentru toate produsele noastre.'

  },
];

const SingleProduct = ({ product, onStarClick, star }) => {
  const { title, description, images, slug, price, _id } = product;
  const [tooltip, setTooltip] = useState("Click to add");

  let history = useHistory();
  // redux
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");

      // add to reeux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart items in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product._id, user.token).then((res) => {
      console.log("ADDED TO WISHLIST", res.data);
      toast.success("Adaugat in wishlist");
      history.push("/user/wishlist");
    });
  };
 
  return (
    <>
      <div className="col-md-6">
        {images && images.length ? (
          <Carousel showArrows={true} autoPlay infiniteLoop>
            {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
          </Carousel>
        ) : (
          <Card cover={<img src={necklace} className="mb-3 card-image" />}></Card>
        )}

         <Tabs type="card">
          <TabPane tab="Descriere" key="1">
            {description && description}
          </TabPane>
          <TabPane tab="Detalii livrare" key="2">
            <List
              itemLayout="horizontal"
              size="large"
              
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    
                    title={item.title}
                    description={item.description}
                  />
                </List.Item>
              )}
        />
          </TabPane>
        </Tabs>
      </div>

     

      <div className="col-md-5">
        <h1 className="p-2">{title}</h1>
        {product && product.ratings && product.ratings.length > 0 ? (
          showAverage(product)
        ) : (
          <div className="text-center pt-1 pb-3">Niciun rating</div>
        )}
        <div className="row">
          <h4 className="pl-2 m-2">{price} RON </h4>
          <h6  className="p-2 m-2">(TVA inclus)</h6>
        </div>
        

        

        
        
        <Card
          actions={[
            // <>
            //   <ShoppingCartOutlined className="text-danger" /> <br />
            //   <span className="text-danger">Add to Cart</span>
            // </>,
            <Tooltip title={tooltip}>
              <a onClick={handleAddToCart}>
                <ShoppingCartOutlined className="text-danger" /> <br /> Adauga in
                cos
              </a>
            </Tooltip>,
            <a onClick={handleAddToWishlist}>
              <HeartOutlined className="text-info" /> <br /> Adauga in wishlist
            </a>,

            <RatingModal>
              <StarRating
                name={_id}
                numberOfStars={5}
                rating={star}
                changeRating={onStarClick}
                isSelectable={true}
                starRatedColor="red"
              />
            </RatingModal>,
          ]}
        >
          <ProductListItems product={product} stones={product.stones} />
        </Card>
      </div>
    </>
  );
};

export default SingleProduct;
