import React, {useState} from "react";
import { Link } from "react-router-dom";

const ProductListItems = ({ product, stones }) => {
  const {
    price,
    category,
    subs,
    material,
    
    color,
    gemstoneComposition,
    quantity,
    sold,
  } = product;

  


  let stonesOptions= [ {id:1, name: 'Acvamarin'}, 
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
  {id:34, name: 'Zirconiu'}]


  let arr = [];
  if(stones!=null){
    
       for(let i=0;i<stonesOptions.length;i++){
         for(let j=0;j<stones.length;j++){
            if(stonesOptions[i].name===stones[j]){
              arr.push(stonesOptions[i])
          }
         }
         
       }
     console.log("ARR", arr);
  }
  
       
       

  return (
    <ul className="list-group">
      

      <li className="list-group-item">
        <b>Metal{" "}</b>
        <span className="label label-default label-pill pull-xs-right">
          {material}
        </span>
      </li>

      <li className="list-group-item">
        <b>Culoare{" "}</b>
        <span className="label label-default label-pill pull-xs-right">
          {color}
        </span>
      </li>

      <li className="list-group-item">
        <b>Compozitie piatra{" "}</b>
        <span className="label label-default label-pill pull-xs-right">
          {gemstoneComposition}
        </span>
      </li>

      {stones && (
        <li className="list-group-item">
          <b>Pietre componente{" "}</b>
          
          {arr.map((s) => (
            <span
              key={s.id}
             
              className="label label-default label-pill pull-xs-right"
            >
              {s.name}
            </span>
          ))}
        </li>)}
  

      <li className="list-group-item">
        <b>Bucati disponibile{" "}</b>
        <span className="label label-default label-pill pull-xs-right">
          {quantity}
        </span>
      </li>

      <li className="list-group-item">
       <b>Bucati vandute{" "}</b> 
        <span className="label label-default label-pill pull-xs-right">
          {sold}
        </span>
      </li>

      {category && (
        <li className="list-group-item">
          <b>Categorie{" "}</b>
          <Link
            to={`/category/${category.slug}`}
            className="label label-default label-pill pull-xs-right"
          >
            {category.name}
          </Link>
        </li>
      )}

      {subs && (
        <li className="list-group-item">
          <b>Subcategorii{" "}</b>
          {subs.map((s) => (
            <Link
              key={s._id}
              to={`/sub/${s.slug}`}
              className="label label-default label-pill pull-xs-right"
            >
              {s.name}
            </Link>
          ))}
        </li>
      )}

      
    </ul>
  );
};

export default ProductListItems;
