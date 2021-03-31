import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getProduct, updateProduct } from "../../../functions/product";
import { getCategories, getCategorySubs } from "../../../functions/category";
import FileUpload from "../../../components/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";
import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";


const initialState = {
  title: "",
  description: "",
  price: "",
  categories: [],
  category: "",
  subs: [],
  quantity: "",
  images: [],
  colors: ["Alb","Albastru", "Gri","Galben", "Mov", "Maro", "Multicolor", "Negru", "Portocaliu", "Rosu", "Roz",  "Transparent", "Verde"],
  color: "",
  material: "",
  materials: ["Aur", "Argint", "Platina"],
  gemstoneCompositions: ["Naturala", "Tratata", "Sintetica"], 
  gemstoneComposition: "",
  stonesOptions: [ {id:1, name: 'Acvamarin'}, 
  {id:2, name: 'Agat'},
  {id:3, name: 'Amazonit'},
  {id:4, name: 'Ametist'},
  {id:5, name: 'Angelit'},
  {id:6, name: 'Apatit'},
  {id:7, name: 'Aventurin'},
  {id:8, name: 'Carneol'},
  {id:9, name: 'Citrin'},
  {id:10, name: 'Coral'},
  {id:11, name: 'Cuart'},
  {id:12, name: 'Diamant'},
  {id:13, name: 'Fluorit'},
  {id:14, name: 'Granat'},
  {id:15, name: 'Jad'},
  {id:16, name: 'Labradorit'},
  {id:17, name: 'Lapis lazuli'},
  {id:18, name: 'Malachit'},
  {id:19, name: 'Ochi de tigru'},
  {id:20, name: 'Onix'},
  {id:21, name: 'Opal'},
  {id:22, name: 'Opalit'},
  {id:23, name: 'Peridot'},
  {id:24, name: 'Perle de cultura'},
  {id:25, name: 'Piatra lunii'},
  {id:26, name: 'Rodonit'},
  {id:27, name: 'Rubin'},
  {id:28, name: 'Safir'},
  {id:29, name: 'Smarald'},
  {id:30, name: 'Spinel'},
  {id:31, name: 'Tanzanit'},
  {id:32, name: 'Turcoaz'},
  {id:33, name: 'Turmalina'},
  {id:34, name: 'Zirconiu'}],
   stones:[]
};

const ProductUpdate = ({ match, history }) => {
  // state
  const [values, setValues] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [subOptions, setSubOptions] = useState([]);
  const [arrayOfSubs, setArrayOfSubs] = useState([]);
  const [arrayOfStones, setArrayOfStones] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));
  // router
  const { slug } = match.params;

  useEffect(() => {
    loadProduct();
    loadCategories();
  }, []);

  const loadProduct = () => {
    getProduct(slug).then((p) => {
      // console.log("single product", p);
      // 1 load single proudct
      setValues({ ...values, ...p.data });
      // 2 load single product category subs
      getCategorySubs(p.data.category._id).then((res) => {
        setSubOptions(res.data); // on first load, show default subs
      });
      // 3 prepare array of sub ids to show as default sub values in antd Select
      let arr = [];
      p.data.subs.map((s) => {
        arr.push(s._id);
      });
      console.log("ARR", arr);
      setArrayOfSubs((prev) => arr); // required for ant design select to work


      //4 prepare array of stones id to show as default values in antd Select
      console.log("ARR of stones", p.data.stones);
      
      let arr2 = [];
      for( let i=0;i<p.data.stones.length;i++){
        arr2[i]=p.data.stones[i]
      }
      console.log("ARR2", arr2);
      
      
      setArrayOfStones((prev) => arr2);
    });
  };

  const loadCategories = () =>
    getCategories().then((c) => {
      console.log("GET CATEGORIES IN UPDATE PRODUCT", c.data);
      setCategories(c.data);
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
  
      values.subs = arrayOfSubs;
      values.category = selectedCategory ? selectedCategory : values.category;
      values.stones=arrayOfStones
      
  
      updateProduct(slug, values, user.token)
        .then((res) => {
          setLoading(false);
          toast.success(`Produsul "${res.data.title}" a fost modificat`);
          history.push("/admin/products");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          toast.error(err.response.data.err);
        });
    };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, subs: [] });

    setSelectedCategory(e.target.value);

    getCategorySubs(e.target.value).then((res) => {
      console.log("SUB OPTIONS ON CATGORY CLICK", res);
      setSubOptions(res.data);
    });

    console.log("EXISTING CATEGORY values.category", values.category);

    // if user clicks back to the original category
    // show its sub categories in default
    if (values.category._id === e.target.value) {
      loadProduct();
    }
    // clear old sub category ids
    setArrayOfSubs([]);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
        {loading ? (
            <LoadingOutlined className="text-danger h1" />
          ) : (
            <h3>Modificare produs</h3>
          )}
          <br></br>
          <label><b>Incarcare poze</b></label>

          {/* {JSON.stringify(values)} */}

          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
          </div>
          <ProductUpdateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
            handleCategoryChange={handleCategoryChange}
            categories={categories}
            subOptions={subOptions}
            arrayOfSubs={arrayOfSubs}
            setArrayOfSubs={setArrayOfSubs}
            arrayOfStones={arrayOfStones}
            setArrayOfStones={setArrayOfStones}
            selectedCategory={selectedCategory}
          />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
