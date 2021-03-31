import React, {useState} from "react";
import { Card, Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import necklace from "../../images/necklace.jpg";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
import StarRating from "react-star-ratings";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  // destructure
  const { images, title, description, slug, price } = product;
  const [tooltip, setTooltip] = useState("Apasa pentru a adauga in cos");

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
      setTooltip("In cos");

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
  return (
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : necklace}
          style={{ height: "300px", objectFit: "cover" }}
          
        />
      }
      actions={[
        <Link to={`/product/${slug}`}>
          <EyeOutlined className="text-warning" /> <br /> Vezi produsul
        </Link>,
        <Tooltip title={tooltip}>
        <a onClick={handleAddToCart} disabled={product.quantity<1}>
          <ShoppingCartOutlined className="text-danger" /> <br /> 
          {product.quantity<1 ? 'Stoc epuizat' : (product.quantity<4 ? 'Cateva bucati in stoc' : 'Adauga in cos')}
          
        </a>
      </Tooltip>,
      ]}
    >
      {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div className="text-center pt-1 pb-3">
        <span>
          <StarRating
            starDimension="20px"
            starSpacing="2px"
            starRatedColor="red"
            editing={false}
          />{" "}
        
        </span>
      </div>
      )}
      <h4>{title}</h4>
      <h6>{price} RON</h6>
      <div></div>
    </Card>
  );
};

export default ProductCard;