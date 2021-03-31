import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCategory } from "../../functions/category";
import { Link } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import CategoryList from "../../components/category/CategoryList";

const CategoryHome = ({ match }) => {
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const history = useHistory();

  let { slug } = match.params;
  //window.parent.location = window.parent.location.href;
  //history.push('/');
  //history.push(`/category/${slug}`);
  // if(done===false){
  //   setTimeout(()=>{
  //     window.location.reload(false);
  // }, 50);
  // setDone(true)
  // }
 
  useEffect(() => {
    setLoading(true);
    getCategory(slug).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setCategory(res.data.category);
      setProducts(res.data.products);
      setLoading(false);
    });
    setCategory(null)
    slug=''
  }, []);
  console.log('slug ', slug)
  //console.log('category name', category.name)
  // if(slug!==category.name){
  //   history.push(`/category/${slug}`);
  // }
  ///console.log('pagina ', category)

//  setTimeout(2000)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {loading ? (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              Se incarca...
            </h4>
          ) : (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">

               "{category.name}" ({products.length} produse) 
            </h4>
          )}
        </div>
      </div>

      <div className="row">
        {products.map((p) => (
          <div className="col-md-4" key={p._id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
      <br></br>
    </div>
   
    );
};

export default CategoryHome;
