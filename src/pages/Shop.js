import React, { useState, useEffect } from "react";
import {
  getProductsByCount,
  fetchProductsByFilter,
} from "../functions/product";
import { getCategories } from "../functions/category";
import { getSubs } from "../functions/sub";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/cards/ProductCard";
import { Menu, Slider, Checkbox, Radio } from "antd";
import {
  DollarOutlined,
  DownSquareOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Star from "../components/forms/Star";

const { SubMenu, ItemGroup } = Menu;

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState([0, 0]);
  const [ok, setOk] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);
  const [star, setStar] = useState("");
  const [subs, setSubs] = useState([]);
  const [sub, setSub] = useState("");

  const [gemstoneCompositions, setGemstoneCompositions] = useState([
    "Naturala", "Tratata", "Sintetica"
  ]);
  const [gemstoneComposition, setGemstoneComposition] = useState("");

  const [colors, setColors] = useState([
    "Alb","Albastru", "Gri","Galben", "Mov", "Maro", "Multicolor", "Negru", "Portocaliu", "Rosu", "Roz",  "Transparent", "Verde"
  ]);
  const [color, setColor] = useState("");

  const [material, setMaterial] = useState("");
  const [materials, setMaterials] = useState([
    "Aur", "Argint", "Platina"
  ]);

  const [stone, setStone] = useState("");
  const [stones, setStones] = useState([
    "Acvamarin", "Agat", "Amazonit", "Ametist", "Angelit", "Apatit", "Aventurin", "Carneol", "Citrin",
  "Coral", "Cuart","Diamant", "Fluorit", "Granat", "Jad", "Labradorit", "Lapis lazuli", "Malachit", "Ochi de tigru","Onix", "Opal", "Opalit", "Peridot", "Perle de cultura",
   "Piatra lunii", "Rodonit", "Rubin", "Safir", "Smarald", "Spinel", "Tanzanit", "Turcoaz", "Turmalina", "Zirconiu"
  ]);

  

  let dispatch = useDispatch();
  let { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  useEffect(() => {
    loadAllProducts();
    // fetch categories
    getCategories().then((res) => setCategories(res.data));
    // fetch subcategories
    getSubs().then((res) => setSubs(res.data));
  }, []);

  const fetchProducts = (arg) => {
    fetchProductsByFilter(arg).then((res) => {
      setProducts(res.data);
    });
  };

  // 1. load products by default on page load
  const loadAllProducts = () => {
    getProductsByCount(12).then((p) => {
      setProducts(p.data);
      setLoading(false);
    });
  };

  // 2. load products on user search input
  useEffect(() => {
    const delayed = setTimeout(() => {
      fetchProducts({ query: text });
      if(!text){
        loadAllProducts()
      }
    }, 300);
    return () => clearTimeout(delayed);
  }, [text]);

  // 3. load products based on price range
  useEffect(() => {
    console.log("ok to request");
    fetchProducts({ price });
  }, [ok]);

  const handleSlider = (value) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });

    // reset
    setCategoryIds([]);
    setPrice(value);
    setStar("");
    setSub("");
    setGemstoneComposition("");
    setColor("");
    setMaterial("");
    setStone("")
    setTimeout(() => {
      setOk(!ok);
    }, 300);
  };

  // 4. load products based on category
  // show categories in a list of checkbox
  const showCategories = () =>
    categories.map((c) => (
      <div key={c._id}>
        <Checkbox
          onChange={handleCheck}
          className="pb-2 pl-4 pr-4"
          value={c._id}
          name="category"
          checked={categoryIds.includes(c._id)}
        >
          {c.name}
        </Checkbox>
        <br />
      </div>
    ));

  // handle check for categories
  const handleCheck = (e) => {
    // reset
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setStar("");
    setSub("");
    setGemstoneComposition("");
    setColor("");
    setMaterial("");
    setStone("")
    // console.log(e.target.value);
    let inTheState = [...categoryIds];
    let justChecked = e.target.value;
    let foundInTheState = inTheState.indexOf(justChecked); // index or -1

    // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
    if (foundInTheState === -1) {
      inTheState.push(justChecked);
    } else {
      // if found pull out one item from index
      inTheState.splice(foundInTheState, 1);
    }

    setCategoryIds(inTheState);
    // console.log(inTheState);
    fetchProducts({ category: inTheState });
  };

  // 5. show products by star rating
  const handleStarClick = (num) => {
    // console.log(num);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
    setStar(num);
    setSub("");
    setGemstoneComposition("");
    setColor("");
    setMaterial("");
    setStone("")
    fetchProducts({ stars: num });
  };

  const showStars = () => (
    <div className="pr-4 pl-4 pb-2">
      <Star starClick={handleStarClick} numberOfStars={5} />
      <Star starClick={handleStarClick} numberOfStars={4} />
      <Star starClick={handleStarClick} numberOfStars={3} />
      <Star starClick={handleStarClick} numberOfStars={2} />
      <Star starClick={handleStarClick} numberOfStars={1} />
    </div>
  );

  // 6. show products by sub category
  const showSubs = () =>
    subs.map((s) => (
      <div
        key={s._id}
        onClick={() => handleSub(s)}
        className="p-1 m-1 badge badge-secondary"
        style={{ cursor: "pointer" }}
      >
        {s.name}
      </div>
    ));

  const handleSub = (sub) => {
    // console.log("SUB", sub);
    setSub(sub);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
    setStar("");
    setGemstoneComposition("");
    setColor("");
    setMaterial("");
    setStone("")
    fetchProducts({ sub });
  };

  // 7. show products based on material name
  const showMaterials = () =>
    materials.map((b) => (
      <Radio
        key={b}
        value={b}
        name={b}
        checked={b === material}
        onChange={handleMaterial}
        className="pb-1 pl-4 pr-4"
      >
        {b}
      </Radio>
    ));

  const handleMaterial = (e) => {
    setSub("");
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
    setStar("");
    setColor("");
    setMaterial(e.target.value);
    setGemstoneComposition("");
    setStone("");
    fetchProducts({ material: e.target.value });
  };

  // 8. show products based on color
  const showColors = () =>
    colors.map((c) => (
      <Radio
        key={c}
        value={c}
        name={c}
        checked={c === color}
        onChange={handleColor}
        className="pb-1 pl-4 pr-4"
      >
        {c}
      </Radio>
    ));

  const handleColor = (e) => {
    setSub("");
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
    setStar("");
    setColor(e.target.value);
    setGemstoneComposition("");
    setMaterial("");
    setStone("")
    fetchProducts({ color: e.target.value });
  };

  // 9. show products based on gemstone composition
  const showGemstoneCompositions = () =>
    gemstoneCompositions.map((c) => (
      <Radio
        key={c}
        value={c}
        name={c}
        checked={c === gemstoneComposition}
        onChange={handleGemstoneComposition}
        className="pb-1 pl-4 pr-4"
      >
        {c}
      </Radio>
    ));

  const handleGemstoneComposition = (e) => {
    setSub("");
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
    setStar("");
    setColor("");
    setGemstoneComposition(e.target.value);
    setMaterial("");
    setStone("")
    fetchProducts({ gemstoneComposition: e.target.value });
  };

  // 10. show products by stone
  const showStones = () =>
    stones.map((c) => (
      <Radio
        key={c}
        value={c}
        name={c}
        checked={c === stone}
        onChange={handleStone}
        className="p-1 m-1 badge badge-primary text-white"
      >
        {c}
      </Radio>
    ));

  const handleStone = (e) => {
    // console.log("SUB", sub);
    setSub("");
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
    setStar("");
    setGemstoneComposition("");
    setColor("");
    setMaterial("");
    setStone(e.target.value)
    fetchProducts({ stone: e.target.value });
  };



  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 pt-2">
          <h4>Filtreaza produsele</h4>
          <hr />

          <Menu
            defaultOpenKeys={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            mode="inline"
          >
            {/* price */}
            <SubMenu
              key="1"
              title={
                <span className="h6">
                  <DollarOutlined /> Pret
                </span>
              }
            >
              <div>
                <Slider
                  className="ml-4 mr-4"
                  tipFormatter={(v) => `${v} RON`}
                  range
                  value={price}
                  onChange={handleSlider}
                  max="4999"
                />
              </div>
            </SubMenu>

            {/* category */}
            <SubMenu
              key="2"
              title={
                <span className="h6">
                  <DownSquareOutlined /> Categorii
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }}>{showCategories()}</div>
            </SubMenu>

            {/* stars */}
            <SubMenu
              key="3"
              title={
                <span className="h6">
                  <StarOutlined /> Rating
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }}>{showStars()}</div>
            </SubMenu>

            {/* sub category */}
            <SubMenu
              key="4"
              title={
                <span className="h6">
                  <DownSquareOutlined /> Subcategorii
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pl-4 pr-4">
                {showSubs()}
              </div>
            </SubMenu>

            {/* material */}
            <SubMenu
              key="5"
              title={
                <span className="h6">
                  <DownSquareOutlined /> Metal
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pr-5">
                {showMaterials()}
              </div>
            </SubMenu>

            {/* colors */}
            <SubMenu
              key="6"
              title={
                <span className="h6">
                  <DownSquareOutlined /> Culoare
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pr-5">
                {showColors()}
              </div>
            </SubMenu>

            {/* gemstoneComposition */}
            <SubMenu
              key="7"
              title={
                <span className="h6">
                  <DownSquareOutlined /> Compozitie piatra
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pr-5">
                {showGemstoneCompositions()}
              </div>
            </SubMenu>

            {/* stones */}
            <SubMenu
              key="8"
              title={
                <span className="h6">
                  <DownSquareOutlined /> Pietre componente
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pr-5">
                {showStones()}
              </div>
            </SubMenu>
          </Menu>
        </div>

        <div className="col-md-9 pt-2">
          {loading ? (
            <h4 className="text-danger">Se incarca...</h4>
          ) : (
            <h4 className="text-danger">Produse</h4>
          )}

          {products.length < 1 && <p>Nu s-au gasit produse.</p>}

          <div className="row pb-5">
            {products.map((p) => (
              <div key={p._id} className="col-md-4 mt-3">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
