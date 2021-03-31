import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct } from "../../../functions/product";
import ProductCreateForm from '../../../components/forms/ProductCreateForm'
import { getCategories, getCategorySubs } from "../../../functions/category";
import FileUpload from "../../../components/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";

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

const ProductCreate = () => {
  const [values, setValues] = useState(initialState);
  const [subOptions, setSubOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showSub, setShowSub] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () =>
    getCategories().then((c) => setValues({ ...values, categories: c.data }));

  const handleCategoryChange = (e) => {
      e.preventDefault();
      console.log("CLICKED CATEGORY", e.target.value);
      setValues({ ...values,subs: [], category: e.target.value });
      getCategorySubs(e.target.value).then((res) => {
        console.log("SUB OPTIONS ON CATEGORY CLICK", res);
        setSubOptions(res.data);
      });
      setShowSub(true)

  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values, user.token)
      .then((res) => {
        console.log(res);
        window.alert(`Produsul "${res.data.title}" a fost creat`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) toast.error(err.response.data);
        toast.error(err.response.data.err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
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
              <h3>Adauga un produs</h3>
            )}
            <hr />
            <label><b>Incarca poze</b></label>
          
            <div className="p-3">
              <FileUpload
                values={values}
                setValues={setValues}
                setLoading={setLoading}
              />
            </div>
          <ProductCreateForm handleSubmit={handleSubmit} 
          handleChange={handleChange} values={values} 
          handleCategoryChange={handleCategoryChange}
          setValues={setValues}
          subOptions={subOptions}
          showSub={showSub}/>

          
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
